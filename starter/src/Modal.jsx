import { useGlobalContext } from "./context"

const Modal = () => {
  const { modalOpen, closeModal } = useGlobalContext()
  return (
    <div className='modal'>
      <button onClick={closeModal}>X</button>
      <p>Texto del Modal</p>
      
    </div>
  )
}
export default Modal
