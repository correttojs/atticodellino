// Render Prop
import React from "react";
import { useFormik, FieldArray, FormikProvider } from "formik";
import { initialValues, validationSchema, guestValue } from "./data";
import { FormInput } from "../@UI/FormInput";
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

export const Register: React.FC = () => {
  const [register, { data, loading, error }] = useRegisterMutation();
  const router = useRouter();
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
      const { guests } = values;

      register({
        variables: {
          user: {
            phone: guestData?.reservation?.phone,
            hash: router.query.hash as string,
            id: router.query.id as string,
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
              name: guestData?.reservation?.guest_name,
              lastName: "",
            })}
          </h3>
        )}
        {error && <FormError />}
        {loading && <FormLoading />}
        {!data && !error && !loading && (
          <>
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
                            />
                            <FormInput
                              formik={formik}
                              field={`guests[${index}].lastName`}
                              label="Last name"
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
          </>
        )}
      </div>
    </div>
  );
};
