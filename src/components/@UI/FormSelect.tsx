import { useFormik } from "formik";
import React from "react";
import tw from "twin.macro";
import { formatLabel } from "./FormInput";

type PropType = {
  field: string;
  formik: ReturnType<typeof useFormik>;
  label?: string;
  options: string[];
};

export const FormSelect: React.FC<PropType> = ({
  field,
  formik,
  label,
  options,
}) => {
  return (
    <div css={tw`m-2`}>
      <label css={tw`block`} htmlFor={field}>
        <span css={tw`text-gray-700`}>{label ?? formatLabel(field)}</span>
        <select
          css={tw`form-select block w-full`}
          value={formik.values[field]}
          id={field}
          name={field}
          onChange={formik.handleChange}
          defaultValue={options[0]}
        >
          {options.map((option, k) => (
            <option key={k} value={option}>
              {option}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
};
