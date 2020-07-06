import { useRouter } from "next/router";
import { useGlobal } from "../withGrommetTheme";
import { GlobalType } from "../graphql/airbnDetail";
import { LOCALES, ALL_LOCALES } from "./translations";

export const splitPath = (pathname: string) =>
  pathname.split("/").filter((i) => !!i);

export const getPathLocale = (pathname: string) => {
  const paths = splitPath(pathname);
  return ALL_LOCALES.includes(paths[0]) ? paths[0] : LOCALES.en;
};

const routeMapper = (url) => {
  return url.replace(/garda|vr/, "[apartment]").replace(/en|it|de/, "[lang]");
};

export const useChangeLocale = () => {
  const { pathname, asPath, push, ...r } = useRouter();
  const { lang, setLang, apartment } = useGlobal();
  const link: string[] = [lang];
  if (apartment !== "GARDA") {
    link.push("garda");
  } else {
    link.push("vr");
  }

  return {
    changeLocale: (currentLang: GlobalType["lang"]) => {
      localStorage.setItem("lang", currentLang);
      if (setLang) {
        setLang(currentLang);
        return;
      }

      if (currentLang !== lang) {
        if (asPath === "/") {
          const newPath = `/${currentLang}/vr`;
          push(routeMapper(newPath), newPath);
          return;
        }
        const paths = splitPath(asPath);
        const newPath = `/${[currentLang, ...paths.slice(1)].join("/")}`;
        push(routeMapper(newPath), newPath);
      }
    },

    apartmentLink: `/${link.join("/")}`,
  };
};
