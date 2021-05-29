import * as React from 'react'
import type { AppProps } from 'next/app'
import '../styles/styles.scss'

interface modalPositionProps {
   (x: number, y: number): void
}

function MyApp({ Component, pageProps }: AppProps) {
   const [modalPosition, setModalPosition] = React.useState({
      top: '50%',
      left: '50%',
   })

   const handleUpdateModalPosition: modalPositionProps = (x, y) => {
      console.log(`${Math.round(x)}px`)

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
            <p>by Roy Anger Welcome</p>
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
