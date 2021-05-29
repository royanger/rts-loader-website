import * as React from 'react'
import Document, {
   Html,
   Head,
   Main,
   NextScript,
   DocumentContext,
} from 'next/document'

class MyDocument extends Document {
   static async getInitialProps(ctx: DocumentContext) {
      const initialProps = await Document.getInitialProps(ctx)
      return { ...initialProps }
   }
   render() {
      return (
         <Html lang="en">
            <Head>
               <meta charSet="utf-8" />

               <meta name="theme-color" content="#000000" />
               <meta property="og_type" content="website" />
               <meta property="og:name" content="React Typescript Loaders" />
               <meta property="og:title" content="React Typescript Loaders" />
               <meta
                  property="og:description"
                  content="Simple, easy to use loader components for your React App"
               />
               <link rel="icon" href="/favicon.ico" />
               <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
               <link
                  rel="icon"
                  type="image/png"
                  sizes="32x32"
                  href="/favicon-32x32.png"
               />
               <link
                  rel="icon"
                  type="image/png"
                  sizes="16x16"
                  href="/favicon-16x16.png"
               />
               <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />

               <link rel="preconnect" href="https://fonts.gstatic.com" />
               <link
                  href="https://fonts.googleapis.com/css2?family=Fira+Sans:wght@400;800&family=Merriweather&family=Fira+Mono&display=swap"
                  rel="stylesheet"
               />
            </Head>
            <body>
               <Main />
               <NextScript />
            </body>
         </Html>
      )
   }
}

export default MyDocument
