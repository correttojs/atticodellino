// Render Prop
import React from "react";
import { useFormik, FieldArray, FormikProvider } from "formik";
import { Form, Button, Box, Heading, Text, Select } from "grommet";
import { initialValues, validationSchema, guestValue } from "./data";
import { FormInput } from "../FormInput";
import styled from "styled-components";
import { useRegisterMutation } from "../../generated/graphql";
import { useTranslations } from "../Translations/useTranslations";
import { useGlobal } from "../withGrommetTheme";
import { FormTrash, UserAdd } from "grommet-icons";

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

const GuestStyle = styled.div`
  margin: 40px 0;

  border: 1px solid;
  padding: 20px;
`;

export const Register: React.FC = () => {
  const [register, { data, loading, error }] = useRegisterMutation();
  const t = useTranslations();
  const { apartment } = useGlobal();

  const formik = useFormik({
    initialValues,
    onSubmit: async (values) => {
      const { guests, email } = values;

      register({
        variables: {
          user: {
            apartment,
            email: email,
            guests: guests.map(({ day, year, month, file, ...rest }) => ({
              ...rest,
              birthDate: `${day}-${month}-${year}`,
            })),
          },
          file: guests.map((g) => g.file),
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
                name: data.register?.guests?.[0].firstName,
                lastName: data.register?.guests?.[0].lastName,
              })}
            </h3>
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
            <FormikProvider value={formik}>
              <Form
                onSubmit={(e) => {
                  e.preventDefault();
                  formik.handleSubmit();
                }}
              >
                <FormInput type="email" formik={formik} field={"email"} />
                <FieldArray
                  name="guests"
                  render={(arrayHelpers) => (
                    <>
                      {formik.values.guests.map((guest, index) => {
                        return (
                          <GuestStyle key={`guest${index}`}>
                            {formik.values.guests.length > 1 && (
                              <Button
                                style={{ float: "right" }}
                                type="button"
                                onClick={() => arrayHelpers.remove(index)}
                                icon={<FormTrash />}
                              ></Button>
                            )}
                            <FormInput
                              formik={formik}
                              field={`guests[${index}].firstName`}
                              label="First name"
                            />
                            <FormInput
                              formik={formik}
                              field={`guests[${index}].lastName`}
                              label="Last name"
                            />
                            <Select
                              options={[
                                "Passport",
                                "ID Card",
                                "Driving License",
                              ]}
                              value={
                                formik.values.guests[index]["documentType"]
                              }
                              id={`guests[${index}]["documentType"]`}
                              name={`guests[${index}]["documentType"]`}
                              onChange={(e) => {
                                formik.setFieldValue(
                                  `guests[${index}].documentType`,
                                  e.value
                                );
                              }}
                            />

                            <FormInput
                              formik={formik}
                              field={`guests[${index}].documentNumber`}
                              label="Document Number"
                            />
                            <Box direction="row">
                              <FormInput
                                type="number"
                                formik={formik}
                                field={`guests[${index}].day`}
                                label="Day"
                              />
                              <FormInput
                                type="number"
                                formik={formik}
                                field={`guests[${index}].month`}
                                label="Month"
                              />
                              <FormInput
                                type="number"
                                formik={formik}
                                field={`guests[${index}].year`}
                                label="Year"
                              />
                            </Box>
                            <FormInput
                              formik={formik}
                              field={`guests[${index}].nationality`}
                              label="Nationality"
                            />
                            <FormInput
                              formik={formik}
                              field={`guests[${index}].placeOfBirth`}
                              label="Place of Birth"
                            />

                            <Box
                              direction="row"
                              margin={{ vertical: "medium" }}
                              align="center"
                            >
                              <UploadStyle
                                error={
                                  !!formik.errors?.guests?.[index]?.["file"] &&
                                  !!formik.touched?.guests?.[index]?.["file"]
                                }
                              >
                                <Button label="Upload your document" />
                                <input
                                  id={`guests[${index}].file`}
                                  name={`guests[${index}].file`}
                                  type="file"
                                  onChange={(event) => {
                                    const file = event.currentTarget.files[0];
                                    formik.setFieldValue(
                                      `guests[${index}].file`,
                                      file
                                    );
                                  }}
                                  className="form-control"
                                />
                              </UploadStyle>
                              <Text>
                                {formik.values.guests[index].file?.name}
                              </Text>
                            </Box>

                            <Button
                              type="button"
                              onClick={() => {
                                arrayHelpers.push({ ...guestValue });
                              }}
                              icon={<UserAdd />}
                            ></Button>
                          </GuestStyle>
                        );
                      })}
                    </>
                  )}
                />

                <Box direction="row" justify="end">
                  <Button type="submit" primary label="Submit" />
                </Box>
              </Form>
            </FormikProvider>
          </>
        )}
      </Box>
    </Box>
  );
};
