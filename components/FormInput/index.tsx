import { FormValues } from "../Register/data";
import { useFormik, getIn } from "formik";
import { FormField, TextInput } from "grommet";

const formatLabel = (value: string) =>
  value
    // insert a space before all caps
    .replace(/([A-Z])/g, " $1")
    // uppercase the first character
    .replace(/^./, function (str) {
      return str.toUpperCase();
    });

type PropType = {
  field: string;
  formik: ReturnType<typeof useFormik>;
  suggestions?: Array<{ label: string; value: string }>;
  type?: "text" | "number" | "email";
  label?: string;
};

export const FormInput: React.FC<PropType> = ({
  field,
  formik,
  suggestions,
  type = "text",
  label,
}) => {
  const labelValue = label ?? formatLabel(field);
  return (
    <FormField
      htmlFor={field}
      label={labelValue}
      error={getIn(formik.errors, field) && getIn(formik.touched, field)}
    >
      <TextInput
        id={field}
        name={field}
        onChange={formik.handleChange}
        value={getIn(formik.values, field)}
        suggestions={suggestions}
        placeholder={label}
        type={type}
      />
    </FormField>
  );
};
