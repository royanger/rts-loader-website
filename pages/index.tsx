import Head from 'next/head'
import Image from 'next/image'
import Loader from 'react-ts-loaders'

export default function Home() {
   return (
      <div>
         <Head>
            <title>React Typescript Loaders</title>
            <meta
               name="description"
               content="Simple, easy to use loader components for your React App"
            />
            <link rel="icon" href="/favicon.ico" />
         </Head>

         <main className="main">
            <h1>Welcome - React Typescript Loaders</h1>
            <Loader />
         </main>

         <footer>
            <p>by Roy Anger Welcome</p>
         </footer>
      </div>
   )
}
