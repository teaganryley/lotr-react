import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Pagination from '@material-ui/lab/Pagination';
import Typography from '@material-ui/core/Typography';

import API from '../api';

/*
TODO:
  -what happens at boundaries?
  -add limit selection component
*/

const QuotePage = ({ charID }) => {
  // const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(10);
  const [quotes, setQuotes] = useState([]);

  const handleChange = (event, value) => {
    setPage(value);
  };

  useEffect(() => {
    API.get(`/character/${charID}/quote?limit=10&page=${page}`)
      .then(({ data }) => {
        setQuotes(data.docs);
        setTotalPages(data.pages);
      })
      .catch(er => console.log(er));
  }, [charID, page]);

  return (
    <div>
      <Typography>
        placeholder
      </Typography>
      <ul>
        {quotes && quotes.map(quote => (
          <li key={quote._id}>
            {quote.dialog}
          </li>
        ))}
      </ul>
      <Pagination count={totalPages} page={page} onChange={handleChange} />
    </div>
  );
};

QuotePage.propTypes = {
  charID: PropTypes.string,
};

export default QuotePage;
