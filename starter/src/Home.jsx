import { useGlobalContext } from "./context"
import Modal from "./Modal"
import Sidebar from "./Sidebar"

import { FaAlignJustify } from "react-icons/fa"

const Home = () => {
  const { sidebarOpen, modalOpen, openSidebar, openModal } = useGlobalContext()
  return (
    <main>
      <button onClick={openSidebar} className='openMenu'>
        <FaAlignJustify />
      </button>
      {!modalOpen ? (
        <button onClick={openModal} className='openModal'>
          Ver Modal
        </button>
      ) : (
        <Modal></Modal>
      )}

      <Sidebar></Sidebar>
    </main>
  )
}
export default Home
