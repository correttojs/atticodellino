// Render Prop
import React from "react";
import { useFormik, FieldArray, FormikProvider } from "formik";
import { initialValues, validationSchema, guestValue } from "./data";
import { FormInput } from "../FormInput";
import styled from "styled-components";
import { useRegisterMutation } from "../../generated/graphql";
import { useTranslations } from "../Translations/useTranslations";
import { useGlobal } from "../Layout";
import { H1 } from "../@UI/Texts";
import tw from "twin.macro";
import { Button } from "../@UI/Buttons";
import { GrUserAdd, GrTrash } from "react-icons/gr";

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
  const { apartment, brandColor } = useGlobal();
  console.log(brandColor);

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
    <div
      css={`
        ${tw`items-center p-4`};
        grid-area: "main";
      `}
    >
      <div css={tw`p-2 md:p-8 max-w-screen-lg mx-auto `}>
        {data && (
          <h3>
            {t("THANKYOU", {
              name: data.register?.guests?.[0].firstName,
              lastName: data.register?.guests?.[0].lastName,
            })}
          </h3>
        )}
        {error && (
          <div
            css={tw`flex flex-col p-4 items-center `}
            onClick={() => window.location.reload()}
          >
            <p>{t("ERROR")}</p>
            <Button type="submit">Ok</Button>
          </div>
        )}
        {loading && <p>{t("LOADING")}</p>}
        {!data && !error && !loading && (
          <>
            <H1 css={tw`mb-4`}>{t("REGISTER")}</H1>
            <FormikProvider value={formik}>
              <form
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
                              <div
                                style={{ float: "right" }}
                                onClick={() => arrayHelpers.remove(index)}
                              >
                                <GrTrash />
                              </div>
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
                            <div css={tw`m-2`}>
                              <label
                                css={tw`block`}
                                htmlFor={`guests[${index}]["documentType"]`}
                              >
                                <span css={tw`text-gray-700`}>
                                  Document Type
                                </span>
                                <select
                                  css={tw`form-select block w-full`}
                                  value={
                                    formik.values.guests[index]["documentType"]
                                  }
                                  id={`guests[${index}]["documentType"]`}
                                  name={`guests[${index}]["documentType"]`}
                                  onChange={(e) => {
                                    formik.setFieldValue(
                                      `guests[${index}].documentType`,
                                      e.target.value
                                    );
                                  }}
                                >
                                  <option value="Passport">Passport</option>
                                  <option value="ID Card">ID Card</option>
                                  <option value="Driving License">
                                    Driving License
                                  </option>
                                </select>
                              </label>
                            </div>

                            <FormInput
                              formik={formik}
                              field={`guests[${index}].documentNumber`}
                              label="Document Number"
                            />
                            <div css={tw`flex flex-row`}>
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
                            </div>
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

                            <div css={tw`flex flex-col my-4 items-center`}>
                              <UploadStyle
                                error={
                                  !!formik.errors?.guests?.[index]?.["file"] &&
                                  !!formik.touched?.guests?.[index]?.["file"]
                                }
                              >
                                <Button>Upload your document</Button>
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
                              <p>{formik.values.guests[index].file?.name}</p>
                            </div>

                            <div
                              onClick={() => {
                                arrayHelpers.push({ ...guestValue });
                              }}
                            >
                              <GrUserAdd />
                            </div>
                          </GuestStyle>
                        );
                      })}
                    </>
                  )}
                />

                <div css={tw`flex justify-end`}>
                  <Button type="submit">Submit</Button>
                </div>
              </form>
            </FormikProvider>
          </>
        )}
      </div>
    </div>
  );
};
