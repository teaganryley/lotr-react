import React from 'react';
import PropTypes from 'prop-types';
import Biography from '../biography';
import QuotePage from '../quotePage';

const DisplayInfo = ({ character, limit }) => {
  let content;

  if (character) {
    content = (
      <div>
        <Biography character={character} />
        <QuotePage charID={character?._id} limit={limit} />
      </div>
    );
  } else {
    content = <div>nothin yet</div>;
  }

  return (
    <React.Fragment>
      {content}
    </React.Fragment>
  );
};

DisplayInfo.propTypes = {
  character: PropTypes.shape({
    _id: PropTypes.string,
  }),
  limit: PropTypes.number.isRequired,
};

export default DisplayInfo;
