import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Pagination from '@material-ui/lab/Pagination';
import API from '../../services/api';

const QuotePage = ({ charID, limit }) => {
  const [page, setPage] = useState(1);
  const [quotes, setQuotes] = useState([]);
  const [totalPages, setTotalPages] = useState(10);

  const handlePageChange = (event, value) => setPage(value);

  // memoize quotes? get rid of validation?

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
  charID: PropTypes.string.isRequired,
  limit: PropTypes.number.isRequired,
};

export default QuotePage;
