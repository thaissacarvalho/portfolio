import PropTypes from 'prop-types';

Title.propTypes = {
  title: PropTypes.string,
}

export default function Title({ title }) {
  return (
    <h1 className="title">{title}</h1>
  )
}
