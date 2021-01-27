// pages/_document.js

import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  // static async getInitialProps(ctx) {
  //   const initialProps = await Document.getInitialProps(ctx);
  //   return { ...initialProps };
  // }

  render() {
    return (
      <Html>
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto+Condensed&display=swap"
            rel="stylesheet"
          />
          {/* font-family: 'Hachi Maru Pop', cursive; */}
          <link
            href="https://fonts.googleapis.com/css2?family=Hachi+Maru+Pop&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          {/* Main - Це наші компоненти */}
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
