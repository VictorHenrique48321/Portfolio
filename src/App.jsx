import { Route, Routes } from "react-router-dom"
import Header from "./components/header/Header"
import About from "./components/About/About"
import Avatar from "./components/Avatar/Avatar"
import Menu from "./components/Menu/Menu"
import Projects from "./components/Projects/Projects"
import Contact from "./components/Contact/Contact"

import "./app.css"

function App() {
  return (
    <div className="main">
      <div className="main_box">
        <div className="main_header">
          <Header/>
        </div>
        <div className="main_content">
          <Avatar/>
          <div className="main_content_info">
            <Menu/>
            <section className="main_content_section">
              <Routes>
                <Route path="/" element={<About/>}/>
                <Route path="/sobre" element={<About/>}/>
                <Route path="/projetos" element={<Projects/>}/>
                <Route path="/contato" element={<Contact/>}/>
              </Routes>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
