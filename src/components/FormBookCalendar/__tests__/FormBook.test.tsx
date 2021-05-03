import * as TR from "@/hooks/useTranslations/useTranslations";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import * as RQ from "react-query-gql";
import { ThemeProvider } from "styled-components";

import { FormBook } from "../FormBook";

beforeEach(() => {
  jest.resetAllMocks();
});

test("FormBook Should call with 1 guest", async () => {
  const mutate = jest.fn();
  jest.spyOn(RQ, "useReactMutation").mockImplementation(
    () =>
      ({
        mutate,
      } as any)
  );
  jest.spyOn(TR, "useTranslations").mockImplementation(() => (k: string) => k);

  render(
    <ThemeProvider theme={{ colors: { brand: "red" } }}>
      <FormBook from={"2021-01-01"} to={"2021-02-04"} price={123} />
    </ThemeProvider>
  );
  userEvent.type(screen.getByLabelText(/FIRST_NAME/i), `John`);
  userEvent.type(screen.getByLabelText(/LAST_NAME/i), `John`);
  userEvent.type(screen.getByLabelText(/EMAIL/i), `test@gmail.com`);

  userEvent.click(screen.getByRole("button", { name: /SUBMIT/i }));

  await waitFor(() =>
    expect(mutate).toHaveBeenCalledWith({
      user: {
        email: "test@gmail.com",
        firstName: "John",
        from: "2021-01-01",
        lastName: "John",
        to: "2021-02-04",
      },
    })
  );
});
