import Document, { Html, Head, Main, NextScript } from "next/document"

class ExtendedDocument extends Document {
  render() {
    return (
      <Html lang="de-DE">
        <Head />
        <body className="relative">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default ExtendedDocument
