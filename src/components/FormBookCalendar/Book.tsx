// Render Prop
import React from "react";
import { useFormik } from "formik";
import { FormInput } from "../FormInput";
import { useBookNowMutation } from "../../generated/graphql";
import { bookInitialValues, bookValidationSchema } from "./bookData";
import { useTranslations } from "../Translations/useTranslations";
import tw from "twin.macro";
import { useGlobal } from "../Layout";
import { Button } from "../@UI/Buttons";

export const Book: React.FC<{ from: string; to: string; price: number }> = ({
  from,
  to,
  price,
}) => {
  const [bookNow, { data, loading, error }] = useBookNowMutation();
  const t = useTranslations();
  const { brandColor } = useGlobal();
  const formik = useFormik({
    initialValues: bookInitialValues,
    onSubmit: (values) => {
      bookNow({
        variables: {
          user: { ...values, from, to },
        },
      });
    },
    validationSchema: bookValidationSchema,
  });

  return (
    <div
      css={`
        ${tw`m-4 w-full`}
        min-width: 400px;
      `}
    >
      {data && (
        <div>
          <h3>
            {t("THANKYOU", {
              name: data.book.firstName,
              lastName: data.book.lastName,
            })}
          </h3>
          <p>{t("BOOK_RESPONSE")}</p>
        </div>
      )}
      {error && (
        <div
          css={tw`flex flex-col p-4 items-center `}
          onClick={() => window.location.reload()}
        >
          <p>{t("ERROR")}</p>
          <Button
            css={`
              background-color: ${brandColor.hex};
            `}
            type="submit"
          >
            Ok
          </Button>
        </div>
      )}
      {loading && <p>{t("LOADING")}</p>}
      {!data && !error && !loading && (
        <>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              formik.handleSubmit();
            }}
          >
            <FormInput formik={formik} field={"firstName"} />
            <FormInput formik={formik} field={"lastName"} />

            <FormInput formik={formik} field={"email"} />
            <div css={tw`m-2`}>{price && <p>{price} euros</p>}</div>

            <div css={tw`flex justify-end`}>
              <Button
                css={`
                  background-color: ${brandColor.hex};
                `}
                disabled={!from || !to || !price}
                type="submit"
              >
                Submit
              </Button>
            </div>
          </form>
        </>
      )}
    </div>
  );
};
