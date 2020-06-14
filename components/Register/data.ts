import * as Yup from "yup";

export type FormValues = keyof typeof initialValues | "email";

export const initialValues = {
  firstName: "",
  lastName: "",
  documentNumber: "",
  documentType: "Passport",
  nationality: "",
  placeOfBirth: "",
  day: null,
  month: null,
  year: null,
  file: null
};

export const validationSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  lastName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  documentType: Yup.string()
    // .min(2, "Too Short!")
    // .max(50, "Too Long!")
    .required("Required"),
  documentNumber: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  nationality: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  placeOfBirth: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  month: Yup.number()
    .min(1, "Too Short!")
    .max(12, "Too Long!")
    .required("Required"),
  day: Yup.number()
    .min(1, "Too Short!")
    .max(31, "Too Long!")
    .required("Required"),
  year: Yup.number()
    .min(1900, "Too Short!")
    .max(new Date().getFullYear() - 18, "Too Long!")
    .required("Required"),
  file: Yup.mixed().required("A file is required")
});
