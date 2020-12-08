import React from 'react';
import PropTypes from 'prop-types';

const Biography = ({ character }) => (
  <ul>
    {Object.keys(character).map(field => {
      if (field === '_id' || !character[field]) return null;
      return (
        <li key={field}>
          <strong>
            {field}
            :
            {' '}
          </strong>
          <span>{character[field]}</span>
        </li>
      );
    })}
  </ul>
);

Biography.propTypes = {
  character: PropTypes.object,
};

export default Biography;
