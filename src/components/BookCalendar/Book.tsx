// Render Prop
import React from "react";
import { useFormik } from "formik";
import { Form, Button, Box, Text } from "grommet";
import { FormInput } from "../FormInput";
import { useBookNowMutation } from "../../generated/graphql";
import { bookInitialValues, bookValidationSchema } from "./bookData";
import { useTranslations } from "../Translations/useTranslations";

export const Book: React.FC<{ from: string; to: string; price: number }> = ({
  from,
  to,
  price,
}) => {
  const [bookNow, { data, loading, error }] = useBookNowMutation();
  const t = useTranslations();
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
    <Box width="medium" margin="large">
      {data && (
        <Box>
          <h3>
            {t("THANKYOU", {
              name: data.book.firstName,
              lastName: data.book.lastName,
            })}
          </h3>
          <Text>{t("BOOK_RESPONSE")}</Text>
        </Box>
      )}
      {error && (
        <Box
          direction="row"
          onClick={() => window.location.reload()}
          pad="medium"
          align="center"
        >
          <Text>{t("ERROR")}</Text>
          <Button margin="medium" type="submit" primary label="Ok" />
        </Box>
      )}
      {loading && (
        <Box>
          <Text>{t("LOADING")}</Text>
        </Box>
      )}
      {!data && !error && !loading && (
        <>
          <Form
            onSubmit={(e) => {
              e.preventDefault();
              formik.handleSubmit();
            }}
          >
            <FormInput formik={formik} field={"firstName"} />
            <FormInput formik={formik} field={"lastName"} />

            <FormInput formik={formik} field={"email"} />
            <Box pad="small">{price && <Text>{price} euros</Text>}</Box>

            <Box direction="row" justify="end">
              <Button
                type="submit"
                disabled={!from || !to || !price}
                primary
                label="Submit"
              />
            </Box>
          </Form>
        </>
      )}
    </Box>
  );
};
