import React from 'react';
import PropTypes from 'prop-types';

const Biography = ({ character }) => (
  <ul>
    {Object.keys(character).map((fieldName) => (
      <li key={character[fieldName]?._id}>
        <strong>
          {fieldName}
          :
          {' '}
        </strong>
        <span>{character[fieldName]}</span>
      </li>
    ))}
  </ul>
);

Biography.propTypes = {
  character: PropTypes.object,
};

export default Biography;
