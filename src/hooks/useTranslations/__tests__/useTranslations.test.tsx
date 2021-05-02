import * as MockGlobal from "@/components/Layout/useGlobal";
import { renderHook } from "@testing-library/react-hooks";

import { useTranslations } from "../useTranslations";

describe("useTranslations", () => {
  it("should translate to EN", () => {
    jest.spyOn(MockGlobal, "useGlobal").mockImplementation(
      () =>
        ({
          lang: "en",
        } as any)
    );
    const Mock = ({ children }: any) => <div>{children}</div>;
    const { result } = renderHook(() => useTranslations(), {
      wrapper: Mock,
    });
    expect(result.current("SPACE")).toEqual("The space");
  });
  it("should translate to IT", () => {
    jest.spyOn(MockGlobal, "useGlobal").mockImplementation(
      () =>
        ({
          lang: "it",
        } as any)
    );
    const Mock = ({ children }: any) => <div>{children}</div>;
    const { result } = renderHook(() => useTranslations(), {
      wrapper: Mock,
    });
    expect(result.current("SPACE")).toEqual("Lo spazio");
  });
});
