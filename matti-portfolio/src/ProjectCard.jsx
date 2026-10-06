import { Card, Button } from "react-bootstrap";
import './ProjectCard.css';





const ProjectCard = ({colour, accent, project}) => {

  return (
    <Card
      className="project-card"
      style={{"--card-colour": colour, "--accent-colour": accent}}
    >
      <Card.Header>
          <h3>{project.title}</h3>
      </Card.Header>
      <Card.Body className="d-flex flex-column">
        <Card.Text>
          {project.description}
        </Card.Text>
        <div className="project-tags">
          {project.tags.map((tag) => (
            <span className="project-tag" key={tag}>
              {tag}
            </span>
          ))}
        </div>
      </Card.Body>
      <Card.Footer>
        {project.githubURL &&
          <Button href={project.githubURL}>
            <div className="g-4">
              <i className="bi bi-github"></i>
              <span className="px-1">View Project</span>
              <i className="bi bi-arrow-right"></i>
            </div>
          </Button>
        }
      </Card.Footer>
    </Card>
  );
};

export default ProjectCard;