import projects from '../../../data/projects.json';
import projectLinkbioImage from '../../../assets/project-linkbio.svg'
import projectCalculadoraImage from '../../../assets/project-calculadora.svg'
import projectLinkbioYasminImage from "../../../assets/project-linkbio-yasmin.svg"
import { Card } from 'react-bootstrap';
import TechnologiesList from './TechnologiesList/TechnologiesList';

export default function Cards() {
  return (
    <ul className="card__container">
      {projects.map((project) => (
        <Card key={project.id} className="card__item"> 
          <Card.Header className="card__header">
            <Card.Img variant="top" src={
              project.id === 1 ? projectLinkbioImage :
              project.id === 2 ? projectCalculadoraImage : 
              project.id === 3 ? projectLinkbioYasminImage : "Não tem nada aqui"} 
              alt={project.title} className="card__image" />
            <TechnologiesList technologies={project.technologies} />
          </Card.Header>
          <Card.Body className="card__body">
            <div className="card__titleTime">
              <Card.Text className="card__title">{project.title}</Card.Text>
              <Card.Text className="card__time">{project.time}</Card.Text>
            </div>
            <Card.Text className="card__description">{project.description}</Card.Text>
          </Card.Body>
          <Card.Footer className="card__footer">
            <Card.Link href={project.code} className="card__link" target="_blank">Código</Card.Link>
            <Card.Link href={project.webSite} className="card__link" target="_blank">Live website</Card.Link>
          </Card.Footer>
        </Card>
      ))
      }
    </ul>
  )
}
