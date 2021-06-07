import * as React from 'react'
import Head from 'next/head'
import Link from 'next/link'

import Intro from '../components/Intro'
import Installation from '../components/Installation'
import LoaderSample from '../components/LoaderSample'

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
      { title: 'Ring', type: 'ring' },
      { title: 'Roller', type: 'roller' },
      { title: 'Grid', type: 'grid' },
      { title: 'Circle', type: 'circle' },
      { title: 'Ripple', type: 'ripple' },
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
            {/* <div>
               <p>If you have any questions, please reach out to me!</p>
               <Link href="/contact">
                  <button className="button">Contact Me</button>
               </Link>
            </div> */}
         </main>
      </div>
   )
}

export async function getStaticProps() {
   return {
      props: {}, // will be passed to the page component as props
   }
}
