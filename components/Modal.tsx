import * as React from 'react'
import { createPortal } from 'react-dom'

interface ModalProps {
   children: JSX.Element
}

const Modal = ({ children }: ModalProps) => {
   const modal = document.getElementById('modal-contents')!
   const el = document.createElement('div')

   React.useEffect(() => {
      modal.appendChild(el)

      return () => {
         modal.removeChild(el)
      }
   }, [el, modal])

   return createPortal(children, el)
}

export default Modal
