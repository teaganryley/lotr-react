import React, { useMemo } from 'react';
import PropTypes from 'prop-types';

const Biography = ({ character }) => {
  const fieldsMemo = useMemo(() => Object.keys(character), [character?._id]);

  return (
    <React.Fragment>
      <h4>
        {character?.name}
        {' facts: '}
      </h4>
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
    </React.Fragment>
  );
};

Biography.propTypes = {
  character: PropTypes.shape({
    _id: PropTypes.string,
    name: PropTypes.string,
  }),
};

export default Biography;
