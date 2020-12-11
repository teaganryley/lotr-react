import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Pagination from '@material-ui/lab/Pagination';
import Typography from '@material-ui/core/Typography';

import API from '../api';

/*
API.get(`/character/${id}/quote`)
        .then(({ data }) => {
          console.log(data.docs);
          // setQuotes();
        })
        .catch(er => console.log(er));

{{base_url}}/character/5cd99d4bde30eff6ebccfea0/quote?limit=5&page=2
*/

const QuotePage = ({ charID }) => {
  // const [currentID, setCurrentID] = useState(charID);
  const [page, setPage] = useState(1);
  const [quotes, setQuotes] = useState([]);

  const handleChange = (event, value) => {
    setPage(value);
  };

  useEffect(() => {
    API.get(`/character/${charID}/quote?limit=5&page=${page}`)
      .then(({ data }) => {
        setQuotes(data.docs);
      })
      .catch(er => console.log(er));
  }, []);

  return (
    <div>
      <Typography>
        {'Page: '}
        {page}
      </Typography>
      <ul>
        {quotes && quotes.map(quote => (
          <li key={quote._id}>
            {quote.dialog}
          </li>
        ))}
      </ul>
      <Pagination count={10} page={page} onChange={handleChange} />
    </div>
  );
};

QuotePage.propTypes = {
  charID: PropTypes.string,
};

export default QuotePage;
