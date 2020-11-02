import { useFormik } from "formik";
import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Button } from "./Buttons";

const UploadStyle = styled.div<{ error: boolean }>`
  position: relative;
  overflow: hidden;
  display: inline-block;
  margin-right: 20px;
  input[type="file"] {
    font-size: 100px;
    position: absolute;
    left: 0;
    top: 0;
    opacity: 0;
    border: none;
    cursor: pointer;
  }
  button {
    border-color: ${({ error }) => (error ? "#FF4040" : "#000")};
  }
`;

type PropType = {
  field: string;
  formik: ReturnType<typeof useFormik>;
  label: string;
};

export const FormUpload: React.FC<PropType> = ({ formik, field, label }) => {
  return (
    <div css={tw`flex flex-col my-4 items-center`}>
      <UploadStyle error={false}>
        <Button>{label}</Button>
        <input
          id={field}
          name={field}
          type="file"
          onChange={(event) => {
            const file = event.currentTarget.files[0];
            console.log(file, field);
            // formik.setFieldValue(field, file);
          }}
          className="form-control"
        />
      </UploadStyle>
      <p>{formik.values[field]?.name}</p>
    </div>
  );
};
