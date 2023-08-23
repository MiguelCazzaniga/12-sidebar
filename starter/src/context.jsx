import { createContext,useContext,useState } from "react";


const AppContext=createContext()

export const AppProvider=({children})=>{
    
    const [modalOpen,setModalOpen]=useState(false)
    const [sidebarOpen,setSidebarOpen]=useState(false)

    const openModal=()=>{
        setModalOpen(true)
    }

    const closeModal=()=>{
        setModalOpen(false)
    }

    const openSidebar=()=>{
        setSidebarOpen(true)
       
        return
    }

    const closeSidebar=()=>{
        setSidebarOpen(false)
       
        return
    }


    return(
     <AppContext.Provider
        value={{
            modalOpen,
            sidebarOpen,
            openModal,
            closeModal,
            openSidebar,
            closeSidebar
        }}
     >
        {children}
    </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}