import { useFormik } from "formik";
// Render Prop
import React from "react";
import tw from "twin.macro";

import { Button } from "../@UI/Buttons";
import { FormError } from "../@UI/FormError";
import { FormInput } from "../@UI/FormInput";
import { Loading } from "../@UI/Loading";
import { MQ_NOT_MOBILE } from "../Layout";
import { useTranslations } from "../Translations/useTranslations";
import { useReactMutation } from "../useReactQuery";
import { bookInitialValues, bookValidationSchema } from "./bookData";
import { BookNowDocument } from "./bookNow.generated";

export const FormBook: React.FC<{
  from: string;
  to: string;
  price?: number | null;
}> = ({ from, to, price }) => {
  const { mutate: bookNow, data, isLoading, error } = useReactMutation(
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
      {isLoading && <Loading />}
      {!data && !error && !isLoading && (
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
