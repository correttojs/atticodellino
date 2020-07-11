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

          <script
            type="text/javascript"
            async={true}
            dangerouslySetInnerHTML={{
              __html: `
(function() {
  var host = window.location.hostname;
  var element = document.createElement('script');
  var firstScript = document.getElementsByTagName('script')[0];
  var url = 'https://quantcast.mgr.consensu.org'
    .concat('/choice/', 'CbrJARwmBxYCJ', '/', host, '/choice.js')
  var uspTries = 0;
  var uspTriesLimit = 3;
  element.async = true;
  element.type = 'text/javascript';
  element.src = url;

  firstScript.parentNode.insertBefore(element, firstScript);

  function makeStub() {
    var TCF_LOCATOR_NAME = '__tcfapiLocator';
    var queue = [];
    var win = window;
    var cmpFrame;

    function addFrame() {
      var doc = win.document;
      var otherCMP = !!(win.frames[TCF_LOCATOR_NAME]);

      if (!otherCMP) {
        if (doc.body) {
          var iframe = doc.createElement('iframe');

          iframe.style.cssText = 'display:none';
          iframe.name = TCF_LOCATOR_NAME;
          doc.body.appendChild(iframe);
        } else {
          setTimeout(addFrame, 5);
        }
      }
      return !otherCMP;
    }

    function tcfAPIHandler() {
      var gdprApplies;
      var args = arguments;

      if (!args.length) {
        return queue;
      } else if (args[0] === 'setGdprApplies') {
        if (
          args.length > 3 &&
          args[2] === 2 &&
          typeof args[3] === 'boolean'
        ) {
          gdprApplies = args[3];
          if (typeof args[2] === 'function') {
            args[2]('set', true);
          }
        }
      } else if (args[0] === 'ping') {
        var retr = {
          gdprApplies: gdprApplies,
          cmpLoaded: false,
          cmpStatus: 'stub'
        };

        if (typeof args[2] === 'function') {
          args[2](retr);
        }
      } else {
        queue.push(args);
      }
    }

    function postMessageEventHandler(event) {
      var msgIsString = typeof event.data === 'string';
      var json = {};

      try {
        if (msgIsString) {
          json = JSON.parse(event.data);
        } else {
          json = event.data;
        }
      } catch (ignore) {}

      var payload = json.__tcfapiCall;

      if (payload) {
        window.__tcfapi(
          payload.command,
          payload.version,
          function(retValue, success) {
            var returnMsg = {
              __tcfapiReturn: {
                returnValue: retValue,
                success: success,
                callId: payload.callId
              }
            };
            if (msgIsString) {
              returnMsg = JSON.stringify(returnMsg);
            }
            event.source.postMessage(returnMsg, '*');
          },
          payload.parameter
        );
      }
    }

    while (win) {
      try {
        if (win.frames[TCF_LOCATOR_NAME]) {
          cmpFrame = win;
          break;
        }
      } catch (ignore) {}

      if (win === window.top) {
        break;
      }
      win = win.parent;
    }
    if (!cmpFrame) {
      addFrame();
      win.__tcfapi = tcfAPIHandler;
      win.addEventListener('message', postMessageEventHandler, false);
    }
  };

  if (typeof module !== 'undefined') {
    module.exports = makeStub;
  } else {
    makeStub();
  }

  var uspStubFunction = function() {
    var arg = arguments;
    if (typeof window.__uspapi !== uspStubFunction) {
      setTimeout(function() {
        if (typeof window.__uspapi !== 'undefined') {
          window.__uspapi.apply(window.__uspapi, arg);
        }
      }, 500);
    }
  };

  var checkIfUspIsReady = function() {
    uspTries++;
    if (window.__uspapi === uspStubFunction && uspTries < uspTriesLimit) {
      console.warn('USP is not accessible');
    } else {
      clearInterval(uspInterval);
    }
  };

  if (typeof window.__uspapi === 'undefined') {
    window.__uspapi = uspStubFunction;
    var uspInterval = setInterval(checkIfUspIsReady, 6000);
  }
})();
`,
            }}
          />
        </body>
      </html>
    );
  }
}
