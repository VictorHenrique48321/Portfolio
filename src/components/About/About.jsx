import "./about.css"

const About = () => { 
  return (
    <div className="about">
      <div className="about_user">
        <h1 className="about_title">Quem eu sou</h1>
        <p className="about_text">Sou um profissional de tecnologia com formação de técnico em informática pelo Instituto Federal. 
        Atualmente, estou cursando Análise e Desenvolvimento de Sistemas, buscando me aprimorar ainda mais em minha carreira. 
        Tenho experiência e conhecimentos sólidos em hardware, bem como em desenvolvimento front-end e back-end, o que me permite trabalhar em diferentes áreas de TI e lidar com projetos complexos com eficiência 
        </p>
      </div>
      <div className="about_skills">
        <h1 className="about_title">Habilidades</h1>
        <div className="about_section">
          <p className="about_text_skill">Material-Ui</p>
          <p className="about_text_skill">Javascript</p>
          <p className="about_text_skill">React</p>
          <p className="about_text_skill">Node</p>
          <p className="about_text_skill">MongoDB</p>
          <p className="about_text_skill">MySQL</p>
          <p className="about_text_skill">Express</p>
          <p className="about_text_skill">Github</p>
        </div>
      </div>
    </div>
  )
}

export default About