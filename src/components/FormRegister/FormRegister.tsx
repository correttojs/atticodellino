import React, { useState } from "react";
import { useFormik, FieldArray, FormikProvider } from "formik";
import { initialValues, validationSchema, guestValue } from "./data";
import { FormInput } from "../@UI/FormInput";
import ReactCalendar from "react-calendar";

import { useTranslations } from "../Translations/useTranslations";
import { H1 } from "../@UI/Texts";
import tw from "twin.macro";
import { Button } from "../@UI/Buttons";
import { GrUserAdd, GrTrash } from "react-icons/gr";
import { FormSelect } from "../@UI/FormSelect";
import { FormError } from "../@UI/FormError";
import { FormUpload } from "../@UI/FormUpload";
import { useRouter } from "next/router";
import { Section } from "../@UI/Section";
import { Loading } from "../@UI/Loading";

import { RegisterDocument, ReservationQuery } from "./register.generated";
import { gqlRequest } from "../useSwrQuery";

export const FormRegister: React.FC<{
  reservation: ReservationQuery["reservation"];
  onSuccess: () => void;
}> = ({ reservation, onSuccess }) => {
  const [isLoading, setIsLoading] = useState(null);
  const [error, setError] = useState(null);
  const router = useRouter();
  const [isCalendarOpen, setCalendarOpen] = useState(false);
  const t = useTranslations();

  const formik = useFormik({
    initialValues,
    onSubmit: async (values) => {
      const { guests: guestsForm } = values;
      const guests = guestsForm.map(({ file, birthDate, ...rest }) => ({
        ...rest,
        birthDate: birthDate.toISOString().split("T")[0],
      }));
      try {
        setIsLoading(true);
        await gqlRequest(RegisterDocument, {
          user: {
            check_out: reservation?.check_out,
            home: reservation?.home,
            phone: reservation?.phone,
            hash: router.query.hash as string,
            guests,
          },
          file: guestsForm.map((g) => g.file),
        });
        onSuccess();
      } catch (e) {
        setError(e);
      }
    },
    validationSchema,
  });

  return (
    <div css={tw`p-2 md:p-8 max-w-screen-lg mx-auto `}>
      {error && <FormError />}
      {isLoading && (
        <div css={tw`flex justify-center`}>
          <Loading />
        </div>
      )}
      {!error && !isLoading && (
        <>
          <Section css={tw`p-0`}>
            <H1 css={tw`mb-4`}>{t("REGISTER")}</H1>

            <FormikProvider value={formik}>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  formik.handleSubmit();
                }}
              >
                {/* <FormInput type="email" formik={formik} field={"email"} /> */}
                <FieldArray
                  name="guests"
                  render={(arrayHelpers) => (
                    <>
                      {formik.values.guests.map((guest, index) => {
                        return (
                          <fieldset
                            css={tw`p-2 md:p-4 my-6 border-2 rounded-md`}
                            key={`guest${index}`}
                          >
                            <legend>
                              {t("GUEST")} {index + 1}
                            </legend>
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
                              label={t("FIRST_NAME")}
                              index={index}
                              placeholder={
                                reservation?.guest_name?.split(" ")[0] ?? ""
                              }
                            />
                            <FormInput
                              formik={formik}
                              field={`guests[${index}].lastName`}
                              label={t("LAST_NAME")}
                              index={index}
                              placeholder={
                                reservation?.guest_name?.split(" ")[1] ?? ""
                              }
                            />

                            <FormSelect
                              formik={formik}
                              field={`guests[${index}]["documentType"]`}
                              options={[
                                "Passport",
                                "ID Card",
                                "Driving License",
                              ]}
                              label={t("DOC_TYPE")}
                            />

                            <FormInput
                              index={index}
                              formik={formik}
                              field={`guests[${index}].documentNumber`}
                              label={t("DOC_NUMBER")}
                            />
                            <FormInput
                              index={index}
                              formik={formik}
                              field={`guests[${index}].documentPlace`}
                              label={t("DOC_PLACE")}
                            />

                            <div css={tw`mx-2 my-4 `}>
                              {formik.errors?.guests?.[index]?.["birthDate"] &&
                                formik.touched?.guests?.[index]?.[
                                  "birthDate"
                                ] && (
                                  <p css={tw`text-red-500 text-xs italic`}>
                                    {
                                      formik.errors?.guests?.[index]?.[
                                        "birthDate"
                                      ]
                                    }
                                  </p>
                                )}
                              <p css={tw`text-gray-700`}>{t("BIRTH_DATE")}</p>
                              {!isCalendarOpen && (
                                <Button
                                  css={tw`my-2`}
                                  onClick={() => setCalendarOpen(true)}
                                >
                                  {t("BROWSE_CALENDAR")}
                                </Button>
                              )}
                              <span css={tw`mx-4`}>
                                {
                                  formik.values?.guests?.[index]?.birthDate
                                    ?.toISOString()
                                    ?.split("T")?.[0]
                                }
                              </span>
                              {isCalendarOpen && (
                                <ReactCalendar
                                  onChange={(value) => {
                                    formik.setFieldValue(
                                      `guests[${index}].birthDate`,
                                      value
                                    );
                                    setCalendarOpen(false);
                                  }}
                                  defaultView="decade"
                                  value={formik.values.guests[index].birthDate}
                                />
                              )}
                            </div>

                            <FormInput
                              formik={formik}
                              field={`guests[${index}].nationality`}
                              label={t("NATIONALITY")}
                              index={index}
                            />

                            <FormInput
                              index={index}
                              formik={formik}
                              field={`guests[${index}].placeOfBirth`}
                              label={t("PLACE_BIRTH")}
                            />

                            <FormUpload
                              formik={formik}
                              field={`guests[${index}].file`}
                              label={t("UPLOAD_DOC")}
                              index={index}
                            />

                            <div
                              onClick={() => {
                                arrayHelpers.push({ ...guestValue });
                              }}
                            >
                              <GrUserAdd />
                            </div>
                          </fieldset>
                        );
                      })}
                    </>
                  )}
                />

                <div css={tw`flex justify-end`}>
                  <Button type="submit">{t("SUBMIT")}</Button>
                </div>
              </form>
            </FormikProvider>
          </Section>
        </>
      )}
    </div>
  );
};
