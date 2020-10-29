import Document, { Head, Main, NextScript, Html } from "next/document";
// Import styled components ServerStyleSheet
import { ServerStyleSheet } from "styled-components";
import { getGlobalProps } from "../takeshape/getGlobal";

export default class MyDocument extends Document<{
  styleTags;
  lang;
  apartment;
  cover: string;
  color: string;
}> {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();

    const page = ctx.renderPage((App) => (props) =>
      sheet.collectStyles(<App {...props} />)
    );

    const styleTags = sheet.getStyleElement();
    const global = await getGlobalProps({ params: ctx.query, locale: "en" });

    return {
      ...page,
      styleTags,
      apartment: global?.props?.global?.apartment,
      cover: global?.props?.global?.coverWebp,
      color: global?.props?.global?.brandColor,
    };
  }

  render() {
    return (
      <Html>
        <Head>
          <>
            <meta
              name="viewport"
              content="initial-scale=1.0, width=device-width"
            ></meta>
            <meta name="theme-color" content={this.props.color} />
            <link
              rel="preload"
              href={this.props.cover}
              as="image"
              type="image/webp"
            ></link>

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

          <script
            src={`https://cmp.osano.com/${process.env.NEXT_PUBLIC_OSANO}/osano.js`}
          ></script>
        </body>
      </Html>
    );
  }
}
