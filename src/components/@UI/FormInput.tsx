import { useFormik } from "formik";
import React from "react";
import tw from "twin.macro";

type PropType = {
  field: string;
  formik: ReturnType<typeof useFormik>;
  type?: "text" | "number" | "email";
  label?: string;
  index?: number;
};

export const formatLabel = (value: string) =>
  value
    // insert a space before all caps
    .replace(/([A-Z])/g, " $1")
    // uppercase the first character
    .replace(/^./, function (str) {
      return str.toUpperCase();
    });

export const FormInput: React.FC<PropType> = ({
  field,
  formik,
  label,
  type = "text",
  index,
}) => {
  const filedPart = field.split(".")[1];
  let error = formik.errors[field];
  let touched = formik.touched[field];
  if (typeof index !== "undefined") {
    error = formik.errors?.guests?.[index]?.[filedPart];
    touched = formik.touched?.guests?.[index]?.[filedPart];
  }
  return (
    <div css={tw`m-2`}>
      {error && touched && <p css={tw`text-red-500 text-xs italic`}>{error}</p>}
      <label css={tw`block`} htmlFor={field}>
        <span css={tw`text-gray-700`}> {label ?? formatLabel(field)}</span>
        <input
          css={tw`form-input mt-1 block w-full`}
          name={field}
          id={field}
          onChange={formik.handleChange}
          // placeholder={label ?? formatLabel(field)}
          type={type}
          value={formik.values[field]}
        />
      </label>
    </div>
  );
};
