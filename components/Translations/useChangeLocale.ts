import { useRouter } from "next/router";
import { useGlobal } from "../withGrommetTheme";
import { GlobalType } from "../graphql/airbnDetail";
import { LOCALES, ALL_LOCALES } from "./translations";

export const splitPath = (pathname: string) =>
  pathname.split("/").filter(i => !!i);

export const getPathLocale = (pathname: string) => {
  const paths = splitPath(pathname);
  return ALL_LOCALES.includes(paths[0]) ? paths[0] : LOCALES.en;
};

export const useChangeLocale = () => {
  const { pathname, push, ...r } = useRouter();
  const { lang, setLang, apartment } = useGlobal();
  const link: string[] = lang === LOCALES.en ? [] : [lang];
  if (apartment !== "GARDA") {
    link.push("garda");
  }

  return {
    changeLocale: (currentLang: GlobalType["lang"]) => {
      localStorage.setItem("lang", currentLang);
      if (setLang) {
        setLang(currentLang);
        return;
      }

      if (currentLang !== lang) {
        const paths = splitPath(pathname);
        let newPath = "";
        if (currentLang === LOCALES.en) {
          newPath = `/${paths.slice(1).join("/")}`; // to EN => remove /lang
        } else if (lang === LOCALES.en) {
          newPath = `/${[currentLang, ...paths].join("/")}`; // from EN => add /lang
        } else {
          newPath = `/${[currentLang, ...paths.slice(1)].join("/")}`; // other langs
        }
        push(newPath);
      }
    },

    apartmentLink: `/${link.join("/")}`
  };
};
