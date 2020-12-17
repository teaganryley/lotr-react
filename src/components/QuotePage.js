import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Pagination from '@material-ui/lab/Pagination';
// import Typography from '@material-ui/core/Typography';

import API from '../api';

/*
TODO:
  -what happens at boundaries?
  -conditional rendering for no quotes... something like 'no quotes available'
*/

const QuotePage = ({ charID }) => {
  const [limit, setLimit] = useState(5);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(10);
  const [quotes, setQuotes] = useState([]);
  const pageLimits = [5, 10, 15];

  const handleLimitChange = event => {
    setLimit(event.target.value);
  };

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  useEffect(() => {
    API.get(`/character/${charID}/quote?limit=${limit}&page=${page}`)
      .then(({ data }) => {
        setQuotes(data.docs);
        setTotalPages(data.pages);
      })
      .catch(er => console.log(er));
  }, [charID, page, limit]);

  if (!quotes?.length) return (<div>no movie quotes</div>);
  return (
    <React.Fragment>
      <h4>Movie Quotes List</h4>
      <div>
        <Select value={limit} onChange={handleLimitChange}>
          {pageLimits.map(size => (
            <MenuItem key={size} value={size}>
              {size}
            </MenuItem>
          ))}
        </Select>
        <ul>
          {quotes && quotes.map(quote => (
            <li key={quote._id}>
              {quote.dialog}
            </li>
          ))}
        </ul>
        <Pagination count={totalPages} page={page} onChange={handlePageChange} />
      </div>
    </React.Fragment>
  );
};

QuotePage.propTypes = {
  charID: PropTypes.string,
};

export default QuotePage;
