import "react-calendar/dist/Calendar.css";
import Router from "next/router";
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
