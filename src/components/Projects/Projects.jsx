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
          <p>title</p>
          <p>description</p>
        </div>
        <div className="projects_project">
          <img className="projects_project_image" src={projectTwo} alt="" />
          <p>title</p>
          <p>description</p>
        </div>
        <div className="projects_project">
          <img className="projects_project_image" src={projectThree} alt="" />
          <p>title</p>
          <p>description</p>
        </div>
        <div className="projects_project">
          <img className="projects_project_image" src={projectFour} alt="" />
          <p>title</p>
          <p>description</p>
        </div>
      </div>
    </div>
  )
}

export default Projects