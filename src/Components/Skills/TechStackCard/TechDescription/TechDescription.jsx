import PropTypes from 'prop-types';
import Stack from '../../../../data/Stack';

TechDescription.propTypes = {
  category: PropTypes.arrayOf(PropTypes.string),
};

export default function TechDescription({ category }) {
  return (
    <ul className="tech-description">
      {Stack[category].map(stack => (
        <li key={stack.id} className="tech-description__container">
          <div className="tech-description__item">
            <h1 className={`tech-description__icon ${getIconClass(stack.title)}`}>{stack.icon}</h1>
            <h1 className="tech-description__title">{stack.title}</h1>
          </div>
        </li>
      ))}
    </ul>
  )
}

function getIconClass(title) {
  // Tratar casos especiais para títulos com espaços ou pontos
  if (title === "Node.js") {
    return "node-js";
  } else if (title === "Next.js") {
    return "next-js";
  } else if (title === "Styled Components") {
    return "styled-components";
  } else {
    return title.toLowerCase();
  }
}