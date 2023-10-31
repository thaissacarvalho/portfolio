import PropTypes from 'prop-types';

TechnologiesList.propTypes = {
    technologies: PropTypes.arrayOf(PropTypes.string),
}

export default function TechnologiesList({ technologies }) {
    return (
        <ul className="techno__container">
            {technologies.map((tech, index) => (
                <li key={index} className="techno__item">{tech}</li>
            ))}
        </ul>
    )
}
