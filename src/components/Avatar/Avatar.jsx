import photo from "../../assets/avatar.jpg"
import "./avatar.css"

const Avatar = () => {
  return (
    <div className="avatar">
      <div className="avatar_photo">
        <img 
          className="avatar_photo_user"
          src={photo} 
          alt="Minha foto" 
        />
      </div>
      <div className="avatar_info">
        <p className="avatar_info_name">Victor Henrique</p>
        <p className="avatar_info_title">Desenvolvedor Frontend</p>
        <a href="#">Baixar Curriculo</a>
        <p>social media</p>
      </div>
      <div className="avatar_description">
        <p className="avatar_description_about">Sobre mim</p>
        <p className="avatar_description_text">Durante minha carreira, tive a oportunidade de trabalhar com diversos projetos de desenvolvimento front-end utilizando tecnologias avançadas como React, Node, 
          Material UI, Express e autenticação de usuários. Essa experiência me permitiu aprimorar minhas habilidades em criação de interfaces intuitivas e acessíveis, 
          além de desenvolver soluções para autenticação de usuários.</p>
      </div>
    </div>
  )
}

export default Avatar