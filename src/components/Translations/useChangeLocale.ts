import { useRouter } from "next/router";
import { useGlobal } from "../withGrommetTheme";
import { GlobalType } from "../../graphql/_airbn.types";

export const splitPath = (pathname: string) =>
  pathname.split("/").filter((i) => !!i);

export const useChangeLocale = () => {
  const { pathname, asPath, push, ...r } = useRouter();
  const { lang, apartment, apartments, langs } = useGlobal();

  const routeMapper = (url) => {
    return url
      .replace(new RegExp(`${apartments.join("|")}`, "i"), "[apartment]")
      .replace(new RegExp(`${langs.join("|")}`, "i"), "[lang]");
  };
  return {
    changeLocale: (currentLang: GlobalType["lang"]) => {
      localStorage.setItem("lang", currentLang);

      if (currentLang !== lang) {
        if (asPath === "/") {
          const newPath = `/${currentLang}/${apartments[0]}`;
          push(routeMapper(newPath), newPath);
          return;
        }
        const paths = splitPath(asPath);
        const newPath = `/${[currentLang, ...paths.slice(1)].join("/")}`;
        push(routeMapper(newPath), newPath);
      }
    },

    homeLink: `/${[lang, apartment.toLowerCase()].join("/")}`,
    apartmentLink: (key: string) => `/${[lang, key.toLowerCase()].join("/")}`,
  };
};
