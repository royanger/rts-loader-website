import type { AppProps } from 'next/app'
import '../styles/styles.scss'

function MyApp({ Component, pageProps }: AppProps) {
   return (
      <>
         <header>
            <h1>React Typescript Loaders</h1>
         </header>
         <Component {...pageProps} />
         <footer>
            <p>by Roy Anger Welcome</p>
         </footer>
      </>
   )
}
export default MyApp
