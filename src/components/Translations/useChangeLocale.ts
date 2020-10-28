import { useRouter } from "next/router";
import { useGlobal } from "../Layout";

export const useChangeLocale = () => {
  const { pathname, asPath, push, locale, ...r } = useRouter();
  const { apartment } = useGlobal();
  return {
    changeLocale: (currentLang: string) => {
      if (currentLang !== locale) {
        push(pathname, asPath, { locale: currentLang });
      }
    },

    homeLink: `/${[apartment.toLowerCase()].join("/")}`,
    apartmentLink: (key: string) => `/${key.toLowerCase()}/`,
  };
};
