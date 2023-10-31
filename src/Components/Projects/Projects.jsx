import Title from '../Title/Title';
import Card from "./Cards/Cards";
import Repository from './Repository/Repository';

export default function Projects() {
  return (
    <section id="projects" className="section__projects">
      <div className="project__container">
        <Title title="PROJETOS" />
        <div className="project__card">
          <Card />
        </div>
        <Repository />
      </div>
    </section>
  )
}
