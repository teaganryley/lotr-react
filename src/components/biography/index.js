import React, { useMemo } from 'react';
import PropTypes from 'prop-types';

const Biography = ({ character }) => {
  const fieldsMemo = useMemo(() => Object.keys(character), [character?._id]);

  return (
    <ul>
      {fieldsMemo.map(field => {
        if (field === '_id' || !character[field]) return null;
        return (
          <li key={field}>
            <strong>
              {field}
              {': '}
            </strong>
            <span>
              {character[field]}
            </span>
          </li>
        );
      })}
    </ul>
  );
};

Biography.propTypes = {
  character: PropTypes.shape({
    _id: PropTypes.string,
  }),
};

export default Biography;
