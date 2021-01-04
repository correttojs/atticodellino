// Render Prop
import React from "react";
import { useFormik } from "formik";
import { FormInput } from "../@UI/FormInput";

import { bookInitialValues, bookValidationSchema } from "./bookData";
import { useTranslations } from "../Translations/useTranslations";
import tw from "twin.macro";
import { Button } from "../@UI/Buttons";
import { FormError } from "../@UI/FormError";
import { MQ_NOT_MOBILE } from "../Layout/MediaQueries";
import { Loading } from "../@UI/Loading";

import { BookNowDocument } from "./bookNow.generated";
import { useSwrMutation } from "../useSwrQuery";

export const FormBook: React.FC<{
  from: string;
  to: string;
  price: number;
}> = ({ from, to, price }) => {
  const [bookNow, { data, isValidating, error }] = useSwrMutation(
    "book",
    BookNowDocument
  );

  const t = useTranslations();
  const formik = useFormik({
    initialValues: bookInitialValues,
    onSubmit: (values) => {
      bookNow({
        user: { ...values, from, to },
      });
    },
    validationSchema: bookValidationSchema,
  });

  return (
    <div
      css={`
        ${tw`m-4 w-full`}
        @media ${MQ_NOT_MOBILE} {
          min-width: 400px;
        }
      `}
    >
      {data && (
        <div>
          <h3>
            {t("THANKYOU", {
              name: data?.book?.firstName,
              lastName: data?.book?.lastName,
            })}
          </h3>
          <p>{t("BOOK_RESPONSE")}</p>
        </div>
      )}
      {error && <FormError />}
      {isValidating && <Loading />}
      {!data && !error && !isValidating && (
        <>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              formik.handleSubmit();
            }}
          >
            <FormInput formik={formik as any} field={"firstName"} />
            <FormInput formik={formik as any} field={"lastName"} />

            <FormInput formik={formik as any} field={"email"} />
            <div css={tw`m-2`}>{price && <p>{price} euros</p>}</div>

            <div css={tw`flex justify-end`}>
              <Button disabled={!from || !to || !price} type="submit">
                Submit
              </Button>
            </div>
          </form>
        </>
      )}
    </div>
  );
};
