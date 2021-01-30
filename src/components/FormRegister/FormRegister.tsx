import { FieldArray, FormikProvider, useFormik } from "formik";
import { useRouter } from "next/router";
import React, { useState } from "react";
import ReactCalendar from "react-calendar";
import { GrTrash, GrUserAdd } from "react-icons/gr";
import tw from "twin.macro";

import { Button } from "../@UI/Buttons";
import { FormError } from "../@UI/FormError";
import { FormInput } from "../@UI/FormInput";
import { FormSelect } from "../@UI/FormSelect";
import { FormUpload } from "../@UI/FormUpload";
import { Loading } from "../@UI/Loading";
import { Section } from "../@UI/Section";
import { H1 } from "../@UI/Texts";
import { useTranslations } from "../Translations/useTranslations";
import { useReactMutation } from "../useReactQuery";
import { guestValue, initialValues, validationSchema } from "./data";
import { RegisterDocument, ReservationQuery } from "./register.generated";

export const FormRegister: React.FC<{
  reservation: ReservationQuery["reservation"];
  onSuccess: () => void;
}> = ({ reservation, onSuccess }) => {
  const router = useRouter();
  const [isCalendarOpen, setCalendarOpen] = useState(false);
  const t = useTranslations();
  const { mutate, isLoading, error } = useReactMutation(RegisterDocument, {
    onSuccess,
  });

  const formik = useFormik({
    initialValues,
    onSubmit: async (values) => {
      const { guests: guestsForm } = values;
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const guests = guestsForm.map(({ file, birthDate, ...rest }) => ({
        ...rest,
        birthDate: (birthDate ?? new Date()).toISOString().split("T")[0],
      }));

      mutate({
        user: {
          check_out: reservation?.check_out ?? "",
          home: reservation?.home ?? "",
          phone: reservation?.phone ?? "",
          hash: router.query.hash as string,
          guests,
        },
        file: guestsForm.map((g) => g.file),
      });
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
                                role="presentation"
                                style={{ float: "right" }}
                                onClick={() => arrayHelpers.remove(index)}
                              >
                                <GrTrash />
                              </div>
                            )}
                            <FormInput
                              formik={formik as any}
                              field={`guests[${index}].firstName`}
                              label={t("FIRST_NAME")}
                              index={index}
                              placeholder={
                                reservation?.guest_name?.split(" ")[0] ?? ""
                              }
                            />
                            <FormInput
                              formik={formik as any}
                              field={`guests[${index}].lastName`}
                              label={t("LAST_NAME")}
                              index={index}
                              placeholder={
                                reservation?.guest_name?.split(" ")[1] ?? ""
                              }
                            />

                            <FormSelect
                              formik={formik as any}
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
                              formik={formik as any}
                              field={`guests[${index}].documentNumber`}
                              label={t("DOC_NUMBER")}
                            />
                            <FormInput
                              index={index}
                              formik={formik as any}
                              field={`guests[${index}].documentPlace`}
                              label={t("DOC_PLACE")}
                            />

                            <div css={tw`mx-2 my-4 `}>
                              {(formik.errors?.guests as any)?.[index]?.[
                                "birthDate"
                              ] &&
                                formik.touched?.guests?.[index]?.[
                                  "birthDate"
                                ] && (
                                  <p css={tw`text-red-500 text-xs italic`}>
                                    {
                                      (formik.errors?.guests as any)?.[index]?.[
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
                                  (
                                    formik.values?.guests?.[index]?.birthDate ??
                                    new Date()
                                  )
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
                              formik={formik as any}
                              field={`guests[${index}].nationality`}
                              label={t("NATIONALITY")}
                              index={index}
                            />

                            <FormInput
                              index={index}
                              formik={formik as any}
                              field={`guests[${index}].placeOfBirth`}
                              label={t("PLACE_BIRTH")}
                            />

                            <FormUpload
                              formik={formik as any}
                              field={`guests[${index}].file`}
                              label={t("UPLOAD_DOC")}
                              index={index}
                            />

                            <div
                              role="presentation"
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
