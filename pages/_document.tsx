import Document, { Html, Main, NextScript, Head } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link
            href="https://fonts.googleapis.com/icon?family=Material+Icons"
            rel="stylesheet"
          />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Quicksand:wght@500;700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body className="font-Quicksand">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
