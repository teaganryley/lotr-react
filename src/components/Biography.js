import React from 'react';
import PropTypes from 'prop-types';

const Biography = ({ character }) => (
  <ul>
    {Object.keys(character).map(field => {
      const key = field.toString();

      if (field === '_id' || !character[field]) {
        return (<div key={key} />);
      }
      return (
        <li key={key}>
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
