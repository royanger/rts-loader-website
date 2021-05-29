import ReactDOM from 'react-dom'

interface ModalProps {
   children: JSX.Element
}

const Modal = ({ children }: ModalProps) => {
   const modal = document.getElementById('modal')!
   return ReactDOM.createPortal(children, modal)
}

export default Modal
