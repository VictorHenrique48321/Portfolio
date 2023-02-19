import projectOne from "../../assets/Project/project_1.png"
import projectTwo from "../../assets/Project/project_2.png"
import projectThree from "../../assets/Project/project_3.png"
import projectFour from "../../assets/Project/project_4.png"

import "./projects.css"

const Projects = () => {
  return (
    <div className="projects">
      <div className="projects_layout">
        <div className="projects_project">
          <img className="projects_project_image" src={projectOne} alt="" />
          <p className="projects_project_title">Localização de de veículos com leaflet</p>
          <p className="projects_project_description">Com os dados mostro o histórico de posições, estado e localização atual do equipamentos</p>
        </div>
        <div className="projects_project">
          <img className="projects_project_image" src={projectTwo} alt="" />
          <p className="projects_project_title">Um site de benchmark com pontuações</p>
          <p className="projects_project_description">Uma SPA com seis diferentes testes, que após finalizá los você receberá uma pontuação baseada em sua performance</p>
        </div>
        <div className="projects_project">
          <img className="projects_project_image" src={projectThree} alt="" />
          <p className="projects_project_title">Jogo inspirado no letroca</p>
          <p className="projects_project_description">Você recebe letras aleatórias e precisa formar o maior número de palavras antes que o tempo se esgote</p>
        </div>
        <div className="projects_project">
          <img className="projects_project_image" src={projectFour} alt="" />
          <p className="projects_project_title">Artigos sobre o espaço com spaceflight API</p>
          <p className="projects_project_description">Site de artigo utilizando spaceflight, na qual você tem opções de busca, paginação, filtros e aumentar a quantidade de artigos por página</p>
        </div>
      </div>
    </div>
  )
}

export default Projects