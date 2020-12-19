// Render Prop
import React, { useState } from "react";
import { useFormik, FieldArray, FormikProvider } from "formik";
import { initialValues, validationSchema, guestValue } from "./data";
import { FormInput } from "../@UI/FormInput";
import ReactCalendar from "react-calendar";
import {
  useRegisterMutation,
  useReservationQuery,
} from "../../generated/graphql";
import { useTranslations } from "../Translations/useTranslations";
import { useGlobal } from "../Layout";
import { H1 } from "../@UI/Texts";
import tw from "twin.macro";
import { Button } from "../@UI/Buttons";
import { GrUserAdd, GrTrash } from "react-icons/gr";
import { FormSelect } from "../@UI/FormSelect";
import { FormError } from "../@UI/FormError";
import { FormLoading } from "../@UI/FormLoading";
import { FormUpload } from "../@UI/FormUpload";
import { useRouter } from "next/router";
import { Section } from "../@UI/Section";

export const Register: React.FC = () => {
  const [register, { data, loading, error }] = useRegisterMutation();
  const router = useRouter();
  const [isCalendarOpen, setCalendarOpen] = useState(false);
  const t = useTranslations();
  const { data: guestData } = useReservationQuery({
    variables: {
      hash: router.query.hash as string,
      id: router.query.id as string,
    },
  });

  const formik = useFormik({
    initialValues,
    onSubmit: async (values) => {
      const { guests: guestsForm } = values;
      const guests = guestsForm.map(({ file, birthDate, ...rest }) => ({
        ...rest,
        birthDate: birthDate.toISOString().split("T")[0],
      }));
      register({
        variables: {
          user: {
            phone: guestData?.reservation?.phone,
            hash: router.query.hash as string,
            id: router.query.id as string,
            guests,
          },
          file: guestsForm.map((g) => g.file),
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
              name: guestData?.reservation?.guest_name,
              lastName: "",
            })}
          </h3>
        )}
        {error && <FormError />}
        {loading && <FormLoading />}
        {!data && !error && !loading && (
          <>
            <Section>
              <H1 css={tw`mb-4`}>{t("REGISTER")}</H1>
              <p>{guestData?.reservation?.guest_name}</p>
              <p>Checkin: {guestData?.reservation?.check_in}</p>
              <p>Checkout: {guestData?.reservation?.check_out}</p>
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
                              css={tw`p-4 my-6 border-2`}
                              key={`guest${index}`}
                            >
                              <legend>Guest {index + 1}</legend>
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
                                index={index}
                              />
                              <FormInput
                                formik={formik}
                                field={`guests[${index}].lastName`}
                                label="Last name"
                                index={index}
                              />

                              <FormSelect
                                formik={formik}
                                field={`guests[${index}]["documentType"]`}
                                options={[
                                  "Passport",
                                  "ID Card",
                                  "Driving License",
                                ]}
                                label="Document Type"
                              />

                              <FormInput
                                index={index}
                                formik={formik}
                                field={`guests[${index}].documentNumber`}
                                label="Document Number"
                              />

                              <div css={tw`m-2`}>
                                {formik.errors?.guests?.[index]?.[
                                  "birthDate"
                                ] &&
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
                                {!isCalendarOpen && (
                                  <Button onClick={() => setCalendarOpen(true)}>
                                    Date of birth
                                  </Button>
                                )}
                                <p>
                                  {
                                    formik.values?.guests?.[index]?.birthDate
                                      ?.toISOString()
                                      ?.split("T")?.[0]
                                  }
                                </p>
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
                                    value={
                                      formik.values.guests[index].birthDate
                                    }
                                  />
                                )}
                              </div>

                              <FormInput
                                formik={formik}
                                field={`guests[${index}].nationality`}
                                label="Nationality"
                                index={index}
                              />

                              <FormInput
                                index={index}
                                formik={formik}
                                field={`guests[${index}].placeOfBirth`}
                                label="Place of Birth"
                              />

                              <FormUpload
                                formik={formik}
                                field={`guests[${index}].file`}
                                label={"Upload your document"}
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
                    <Button type="submit">Submit</Button>
                  </div>
                </form>
              </FormikProvider>
            </Section>
          </>
        )}
      </div>
    </div>
  );
};
