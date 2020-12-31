import "react-calendar/dist/Calendar.css";
import Router from "next/router";
import "tailwindcss/dist/base.min.css";
import { useEffect } from "react";

const loadedScripts: string[] = [];
const loadScript = async (src: HTMLScriptElement["src"]): Promise<void> =>
  new Promise((resolve, reject) => {
    if (loadedScripts.includes(src)) {
      resolve();
      return;
    }
    loadedScripts.push(src);
    const script = document.createElement("script");
    script.src = src;
    script.async = true;
    script.onload = () => resolve();
    script.onerror = reject;

    document.body.appendChild(script);
  });

export function reportWebVitals(metric) {
  console.log(metric);
}

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    loadScript(
      `https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_UA}`
    );
  }, []);
  return <Component {...pageProps} />;
}
Router.events.on("routeChangeComplete", (url) => {
  setTimeout(() => {
    window["gtag"]("config", process.env.NEXT_PUBLIC_UA, {
      page_location: url,
      page_title: document.title,
    });
  }, 0);
});

export default MyApp;
