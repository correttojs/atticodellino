import { FormValues } from "../Register/data";
import { useFormik } from "formik";
import { FormField, TextInput } from "grommet";

const formatLabel = (value: string) =>
  value
    // insert a space before all caps
    .replace(/([A-Z])/g, " $1")
    // uppercase the first character
    .replace(/^./, function(str) {
      return str.toUpperCase();
    });

type PropType = {
  field: FormValues;
  formik: ReturnType<typeof useFormik>;
  suggestions?: Array<{ label: string; value: string }>;
  type?: "text" | "number";
};

export const FormInput: React.FC<PropType> = ({
  field,
  formik,
  suggestions,
  type = "text",
}) => {
  const label = formatLabel(field);
  return (
    <FormField
      htmlFor={field}
      label={label}
      error={formik.errors[field] && formik.touched[field]}
    >
      <TextInput
        id={field}
        name={field}
        onChange={formik.handleChange}
        value={formik.values[field]}
        suggestions={suggestions}
        placeholder={label}
        type={type}
      />
    </FormField>
  );
};
