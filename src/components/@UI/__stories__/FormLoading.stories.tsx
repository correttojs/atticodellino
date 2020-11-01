// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta, Story } from "@storybook/react/types-6-0";
import { useFormik } from "formik";
import React from "react";
import { FormLoading } from "../FormLoading";

export default {
  title: "UI/FormLoading",
} as Meta;

const Template: Story<React.ButtonHTMLAttributes<any>> = (args) => {
  const formik = useFormik({
    initialValues: { lastName: "" },
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <div>
      <FormLoading />
    </div>
  );
};

export const FormLoadingStories = Template.bind({});
