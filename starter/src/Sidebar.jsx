import { useGlobalContext } from "./context"
import { links, social } from "./data"
import logo from "./logo.svg"


const Sidebar = () => {
  const { sidebarOpen,openSidebar,closeSidebar } = useGlobalContext()
  console.log(sidebarOpen)
  return (
   
   
    
    <article className= {sidebarOpen?"sidebar":"nosidebar"}>
        
        <div className="sidebarHeader" >
          <img src={logo} alt='coding addict' className='logo' />
          <button onClick={closeSidebar}>X</button>
        </div>
        <ul className='ulLinks'>
          {links.map((link) => {
            return (
              <li key={link.id}>
                <a>{link.icon}</a>
                {link.text}
              </li>
            )
          })}
        </ul>
        <ul className='ulsocial'>
          {social.map((socialItem) => {
            return (
              <li key={socialItem.id}>
                <a href={socialItem.url}>{socialItem.icon}</a>
              </li>
            )
          })}
        </ul>

      </article>
    
   
  )
}
export default Sidebar
