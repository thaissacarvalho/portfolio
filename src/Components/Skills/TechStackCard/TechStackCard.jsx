import PropTypes from 'prop-types';

TechStackCard.propTypes = {
    title: PropTypes.string,
    children: PropTypes.element,
}

export default function TechStackCard({ title, children }) {
    return (
        <div className="techStack-card">
            <h1 className="techStack-card__title">{title}</h1>
            <div className="techStack-card__stack">
                {children}
            </div>
        </div>
    )
}
