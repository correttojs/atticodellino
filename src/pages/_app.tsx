import "react-calendar/dist/Calendar.css";
import Router from "next/router";
import "tailwindcss/dist/base.min.css";

export function reportWebVitals(metric) {
  console.log(metric);
}

function MyApp({ Component, pageProps }) {
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
