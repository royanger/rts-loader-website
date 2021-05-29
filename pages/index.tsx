import * as React from 'react'
import Head from 'next/head'
import Image from 'next/image'

import Intro from '../components/Intro'
import Installation from '../components/Installation'
import LoaderSample from '../components/LoaderSample'
import loadConfig from 'next/dist/next-server/server/config'

// TODO figure out what to use instead of any.
interface HomeProps {
   handleUpdateModalPosition: any
}

export default function Home({ handleUpdateModalPosition }: HomeProps) {
   const loaders = [
      { title: 'Spinner', type: 'spinner' },
      { title: 'Pulse', type: 'pulse' },
      { title: 'Dual Rings', type: 'dualring' },
      { title: 'Hourglass', type: 'hourglass' },
      { title: 'Dot Spinner', type: 'dotspinner' },
      { title: 'Ellipsis', type: 'ellipsis' },
   ]

   return (
      <div className="contents">
         <Head>
            <title>React Typescript Loaders</title>
            <meta
               name="description"
               content="Simple, easy to use loader components for your React App"
            />
            <link rel="icon" href="/favicon.ico" />
         </Head>

         <main className="main">
            <Intro />
            <Installation />
            <div className="loader-samples">
               {loaders.map((loader, index) => {
                  return (
                     <LoaderSample
                        key={loader.type}
                        title={loader.title}
                        type={loader.type}
                        index={index}
                        handleUpdateModalPosition={handleUpdateModalPosition}
                     />
                  )
               })}
            </div>
         </main>
      </div>
   )
}

export async function getStaticProps() {
   return {
      props: {}, // will be passed to the page component as props
   }
}
