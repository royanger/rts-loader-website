import * as React from 'react'
import type { AppProps } from 'next/app'
import '../styles/styles.scss'
import Image from 'next/image'

import Website from '../images/home-lg-alt.svg'
import Twitter from '../images/twitter.svg'
import GitHub from '../images/github.svg'
import NPM from '../images/npm.svg'

interface modalPositionProps {
   (x: number, y: number): void
}

function MyApp({ Component, pageProps }: AppProps) {
   const [modalPosition, setModalPosition] = React.useState({
      top: '50%',
      left: '50%',
   })

   const handleUpdateModalPosition: modalPositionProps = (x, y) => {
      setModalPosition({
         left: `${Math.round(x)}px`,
         top: `${Math.round(y)}px`,
      })
   }

   const modalCSSPosition = {
      '--modal-top': modalPosition.top,
      '--modal-left': modalPosition.left,
   } as React.CSSProperties

   return (
      <>
         <header>
            <h1>React Typescript Loaders</h1>
         </header>
         <Component
            handleUpdateModalPosition={handleUpdateModalPosition}
            {...pageProps}
         />
         <footer>
            <div className="container">
               <p>by Roy Anger</p>
               <p>
                  Both the NPM package and this website are released under the{' '}
                  <a href="https://mit-license.org/">MIT License</a>
               </p>

               <div className="socials">
                  <p>See my socials and work:</p>
                  <a href="https://royanger.com">
                     <Website
                        width="40px"
                        height="40px"
                        fill="var(--light-text)"
                     />
                  </a>
                  <a href="https://twitter.com/royanger">
                     <Twitter
                        width="40px"
                        height="40px"
                        fill="var(--light-text)"
                     />
                  </a>
                  <a href="https://github.com/royanger">
                     <GitHub
                        width="40px"
                        height="40px"
                        fill="var(--light-text)"
                     />
                  </a>
                  <a href="https://www.npmjs.com/~royanger">
                     <NPM width="40px" height="40px" fill="var(--light-text)" />
                  </a>
               </div>
            </div>
         </footer>
         <div id="modal">
            <div
               id="modal-contents"
               className="modal-contents"
               style={modalCSSPosition}
            ></div>
         </div>
      </>
   )
}
export default MyApp
