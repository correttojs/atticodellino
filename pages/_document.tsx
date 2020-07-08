import Document, { Head, Main, NextScript } from "next/document";
// Import styled components ServerStyleSheet
import { ServerStyleSheet } from "styled-components";
import { getPathLocale } from "../components/Translations/useChangeLocale";

export default class MyDocument extends Document<{
  styleTags;
  lang;
  apartment;
}> {
  static getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();

    const page = ctx.renderPage((App) => (props) =>
      sheet.collectStyles(<App {...props} />)
    );

    const styleTags = sheet.getStyleElement();

    return {
      ...page,
      styleTags,
      lang: getPathLocale(ctx?.req?.url ?? window.location.pathname),
      apartment: /garda/.test(ctx?.req?.url) ? "GARDA" : "VR",
    };
  }

  render() {
    return (
      <html lang={this.props.lang}>
        <Head>
          <>
            {this.props.apartment === "GARDA" ? (
              <>
                <meta
                  name="viewport"
                  content="initial-scale=1.0, width=device-width"
                ></meta>
                <meta name="theme-color" content="#290012" />
                <link
                  rel="preload"
                  href="/images/cover-garda.webp"
                  as="image"
                  type="image/webp"
                ></link>
              </>
            ) : (
              <>
                <meta name="theme-color" content="#09364c" />
                <link
                  rel="preload"
                  href="/images/cover.webp"
                  as="image"
                  type="image/webp"
                ></link>
              </>
            )}

            <link
              href="https://fonts.googleapis.com/css2?family=Dancing+Script&family=Raleway&display=swap"
              rel="preload"
              as="style"
            />

            <link
              href="https://fonts.googleapis.com/css2?family=Dancing+Script&family=Raleway&display=swap"
              rel="stylesheet"
            />
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_UA}`}
            ></script>
            <script
              dangerouslySetInnerHTML={{
                __html: `
           
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', '${process.env.NEXT_PUBLIC_UA}');


          `,
              }}
            />
          </>

          <link rel="icon" href="/icon_144.png" type="image/png" />
          <link rel="manifest" href="manifest.json" />
          <link rel="apple-touch-icon" href="/icon_144.png"></link>
          {this.props.styleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
