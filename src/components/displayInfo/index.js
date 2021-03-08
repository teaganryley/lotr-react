import React from 'react';
import PropTypes from 'prop-types';
import Biography from '../biography';
import QuotePage from '../quotePage';

const DisplayInfo = ({ character, limit }) => {
  if (!character) return (<span>select character plz</span>);
  return (
    <React.Fragment>
      <Biography character={character} />
      <QuotePage charID={character?._id} limit={limit} />
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
