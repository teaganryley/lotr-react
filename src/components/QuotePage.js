import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Pagination from '@material-ui/lab/Pagination';
import Typography from '@material-ui/core/Typography';

import API from '../api';

/*

TODO:
  -count prop: total number of pages
  -what happens at boundaries?
  -why are my components rendering so much??
  -add limit selection component
  -Clear quots when new character is selected

{{base_url}}/character/5cd99d4bde30eff6ebccfea0/quote?limit=5&page=2

*/

const QuotePage = ({ charID }) => {
  // const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(10);
  const [quotes, setQuotes] = useState([]);
  const [renderCount, setRenderCount] = useState(1);

  const handleChange = (event, value) => {
    setPage(value);
  };

  useEffect(() => {
    API.get(`/character/${charID}/quote?limit=5&page=${page}`)
      .then(({ data }) => {
        setQuotes(data.docs);
        setTotalPages(data.pages);
      })
      .catch(er => console.log(er));
  }, []);

  useEffect(() => {
    setRenderCount(c => c + 1);
  }, [page, totalPages, quotes]);

  return (
    <div>
      <Typography>
        {'Render Count: '}
        {renderCount}
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
