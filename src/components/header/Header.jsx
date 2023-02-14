import background from "../../assets/background.jpg"
import "./header.css"

const Header = () => {
  return (
    <div className="header">
      <img 
        className="background_image" 
        src={background} 
        alt="fundo do perfil" />
    </div>
  )
}

export default Header