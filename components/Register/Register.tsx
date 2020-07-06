// Render Prop
import React from "react";
import { useFormik } from "formik";
import { Form, Button, Box, Heading, Text } from "grommet";
import { initialValues, validationSchema } from "./data";
import { FormInput } from "../FormInput";
import styled from "styled-components";
import { useSendMailMutation } from "../../generated/graphql";
import { useTranslations } from "../Translations/useTranslations";

const UploadStyle = styled.div<{ error: boolean }>`
  position: relative;
  overflow: hidden;
  display: inline-block;
  margin-right: 20px;
  input[type="file"] {
    font-size: 100px;
    position: absolute;
    left: 0;
    top: 0;
    opacity: 0;
    border: none;
    cursor: pointer;
  }
  button {
    border-color: ${({ error }) => (error ? "#FF4040" : "#000")};
  }
`;

export const Register: React.FC<{ apartment: string }> = ({ apartment }) => {
  const [sendMail, { data, loading, error }] = useSendMailMutation();
  const t = useTranslations();

  const formik = useFormik({
    initialValues,
    onSubmit: async (values) => {
      const { month, day, year, file, ...rest } = values;

      sendMail({
        variables: {
          user: {
            ...rest,
            apartment,
            birthDate: `${day}-${month}-${year}`,
          },
          file,
        },
      });
    },
    validationSchema,
  });

  return (
    <Box align="center" gridArea="main" pad="medium">
      <Box width="medium" margin="large">
        {data && (
          <Box>
            <h3>
              {t("THANKYOU", {
                name: data.sendMail.firstName,
                lastName: data.sendMail.lastName,
              })}
            </h3>
            <Text>
              {t("CODE", {
                code: data.sendMail.code,
                lastName: data.sendMail.lastName,
              })}
            </Text>
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
            <Heading>{t("REGISTER")}</Heading>
            <Form
              onSubmit={(e) => {
                e.preventDefault();
                formik.handleSubmit();
              }}
            >
              <FormInput formik={formik} field={"firstName"} />
              <FormInput formik={formik} field={"lastName"} />
              <FormInput
                formik={formik}
                field={"documentType"}
                suggestions={[
                  {
                    label: "Passport",
                    value: "Passport",
                  },

                  {
                    label: "ID Card",
                    value: "ID Card",
                  },

                  {
                    label: "Driving License",
                    value: "Driving License",
                  },
                ]}
              />
              <FormInput formik={formik} field={"documentNumber"} />
              <Box direction="row">
                <FormInput type="number" formik={formik} field={"day"} />
                <FormInput type="number" formik={formik} field={"month"} />
                <FormInput type="number" formik={formik} field={"year"} />
              </Box>
              <FormInput formik={formik} field={"nationality"} />
              <FormInput formik={formik} field={"placeOfBirth"} />
              <FormInput type="email" formik={formik} field={"email"} />
              <Box
                direction="row"
                margin={{ vertical: "medium" }}
                align="center"
              >
                <UploadStyle
                  error={!!formik.errors["file"] && !!formik.touched["file"]}
                >
                  <Button label="Upload your document" />
                  <input
                    id="file"
                    name="file"
                    type="file"
                    onChange={(event) => {
                      const file = event.currentTarget.files[0];
                      formik.setFieldValue("file", file);
                    }}
                    className="form-control"
                  />
                </UploadStyle>
                <Text>{formik.values.file?.name}</Text>
              </Box>
              <Box direction="row" justify="end">
                <Button type="submit" primary label="Submit" />
              </Box>
            </Form>
          </>
        )}
      </Box>
    </Box>
  );
};
