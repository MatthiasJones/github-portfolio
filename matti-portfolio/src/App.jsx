import { Row, Col, Button } from "react-bootstrap";
import './App.css'
import ProjectCard from "./ProjectCard.jsx"
import projects from "./data/projects.json"


function App() {
  const colours = ["#263e2e", "#9a6d38", "#cc3F0c" ]
  const accents = ["#33673b", "#855E2F", "#B83208"]

/** TODO:
 * - Add Pagination for projects (will leave until more projects)
 * - Potentially add a backend for projects to be added into instead of using a json file
 * - look into changing the card colouring for smaller devices 
 */

  return (
    <>
      <header>
        <div className='profile'>
          <span style={{ color: "#ff7d45"}}>Hi I'm</span>
          <h1>Matti</h1>
          <p>I'm a computer science student trying out various different projects to improve my knowledge</p>
          <Button href="#project-page">View my Projects</Button>
        </div>
        <img src={`${import.meta.env.BASE_URL}mountain-logo.svg`} alt='image of mountain logo '/>
      </header>
      <div className='project-area' id="project-page">
        <div className='projects'>
        <h2 className='fw-bold'>My Projects</h2>
        <Row className='g-3'>
          {projects.map((project) => {

            const index = project.id - 1
            const row = Math.floor(index / 3)
            const col = index % 3
            const colIndex = (row + col) % 3
            const colour = colours[colIndex]
            const accent = accents[colIndex]

            return (
              <Col xs={12} sm={6} lg={4} key={project.id}>
                <ProjectCard
                  colour = {colour}
                  accent = {accent}
                  project = {project}
                />
              </Col>
            );
          })}
        </Row>
        </div>
      </div>
    </>
  )
}

export default App;
