import React from "react";
import { useTranslations } from "../Translations/useTranslations";

export const FormLoading = () => {
  const t = useTranslations();
  return <p>{t("LOADING")}</p>;
};
