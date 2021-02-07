import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class CustomDocument extends Document {
  render() {
    console.log('HELLO FROM _document.tsx')
    return (
      <Html>
        <Head>
          <meta property="custom" content="yolo" />
        </Head>

        <body>
          <Main />
        </body>
        <NextScript />
      </Html>
    )
  }
}