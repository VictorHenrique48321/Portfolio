import "./menu.css"
import { NavLink } from "react-router-dom"

const Menu = () => {
  return (
    <div className="bar">
      <div className="bar_menu">
        <NavLink to="/sobre" className={({isActive}) => isActive ? "currentLink" : "notActive"}>
          <p className="bar_option">Sobre</p>
        </NavLink>
        <NavLink to="/projetos" className={({isActive}) => isActive ? "currentLink" : "notActive"}> 
          <p className="bar_option">Projetos</p>
        </NavLink>
        <NavLink to="/contato" className={({isActive}) => isActive ? "currentLink" : "notActive"}>
          <p className="bar_option">Contato</p>
        </NavLink>
      </div>
    </div>
  )
}

export default Menu 