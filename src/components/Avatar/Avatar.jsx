import { useState } from "react"
import resume from "../../assets/file/resume.docx"
import photo from "../../assets/avatar.jpg"

import "./avatar.css"

const Avatar = () => {

  const [iconColorGithub, setIconColorGithub] = useState("#7A3CED")
  const [iconColorLinkedin, setIconColorLinkedin] = useState("#7A3CED")

  const changeColorIconHover = (iconName) => {
    iconName === "github" ? setIconColorGithub("white") : setIconColorLinkedin("white")
    return
  }
  
  const changeColorDefault = (iconName) => {
    iconName === "github" ? setIconColorGithub("#7A3CED") : setIconColorLinkedin("#7A3CED")
    return
  }

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
        <a className="avatar_resume" href={resume} download="curriculoVictorHenrique">
          Baixar Curriculo
        </a>
        <div className="avatar_info_social">
          <div className="avatar_info_icon" onMouseEnter={() => changeColorIconHover("linkedin")} onMouseLeave={() => changeColorDefault("linkedin")}>
            <a className="avatar_link" href="https://github.com/VictorHenrique48321" target="_blank">
              <svg className="avatar_info_icon_social" xmlns="http://www.w3.org/2000/svg" fill={iconColorLinkedin} width="24" height="24" viewBox="0 0 24 24">
                <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/>
              </svg>
            </a>
          </div>
          <div className="avatar_info_icon" onMouseEnter={() => changeColorIconHover("github")} onMouseLeave={() => changeColorDefault("github")}>
            <a className="avatar_link" href="https://www.linkedin.com/in/victor-henrique-042267205/" target="_blank">
              <svg className="avatar_info_icon_social" xmlns="http://www.w3.org/2000/svg" fill={iconColorGithub} width="24" height="24" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="avatar_description">
        <h1 className="avatar_description_about">SOBRE MIM</h1>
        <p className="avatar_description_text">Durante minha carreira, tive a oportunidade de trabalhar com diversos projetos de desenvolvimento front-end utilizando tecnologias como React, Node, 
          Material UI, Express e autenticação de usuários. Essa experiência me permitiu aprimorar minhas habilidades em criação de interfaces intuitivas e acessíveis, 
          além de desenvolver soluções para autenticação de usuários.</p>
      </div>
    </div>
  )
}

export default Avatar