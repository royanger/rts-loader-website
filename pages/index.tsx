import Head from 'next/head'
import Image from 'next/image'
import LoaderSample from '../components/LoaderSample'

export default function Home() {
   const loaders = [
      { title: 'Spinner', type: 'spinner' },
      { title: 'Pulse', type: 'pulse' },
      { title: 'Dual Rings', type: 'dualring' },
      { title: 'Hourglass', type: 'hourglass' },
      { title: 'Dot Spinner', type: 'dotspinner' },
      { title: 'Ellipsis', type: 'ellipsis' },
   ]

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
            <div className="loader-samples">
               {loaders.map(loader => {
                  return (
                     <LoaderSample
                        key={loader.type}
                        title={loader.title}
                        type={loader.type}
                     />
                  )
               })}
            </div>
         </main>
      </div>
   )
}
