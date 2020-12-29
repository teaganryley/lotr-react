import React, { useEffect, useReducer } from 'react';
import PropTypes from 'prop-types';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Pagination from '@material-ui/lab/Pagination';
import API from '../../services/api';

const init = charID => ({
  _id: charID,
  limit: 5,
  page: 1,
  totalPages: 10,
  quotes: [],
  error: null,
});

const reducer = (state, action) => {
  switch (action.type) {
    case 'setLimit':
      return { ...state, limit: action.payload };
    case 'setPage':
      return { ...state, page: action.payload };
    case 'setTotalPages':
      return { ...state, totalPages: action.payload };
    case 'setQuotes':
      return { ...state, quotes: action.payload };
    default:
      throw new Error();
  }
};

const QuotePage = ({ charID }) => {
  const [state, dispatch] = useReducer(reducer, charID, init);

  const pageLimits = [5, 10, 15];

  const handleLimitChange = ({ target }) => dispatch({ type: 'setLimit', payload: target?.value });

  const handlePageChange = (event, value) => dispatch({ type: 'setPage', payload: value });

  useEffect(() => {
    API.get(`/character/${charID}/quote?limit=${state.limit}&page=${state.page}`)
      .then(({ data }) => {
        dispatch({ type: 'setQuotes', payload: data.docs });
        dispatch({ type: 'setTotalPages', payload: data.pages });
      })
      .catch(er => console.log(er));
  }, [charID, state.page, state.limit]);

  if (!state.quotes?.length) return (<div>no movie quotes</div>);
  return (
    <React.Fragment>
      <h4>Movie Quotes List</h4>
      <div>
        <Select value={state.limit} onChange={handleLimitChange}>
          {pageLimits.map(size => (
            <MenuItem key={size} value={size}>
              {size}
            </MenuItem>
          ))}
        </Select>
        <ul>
          {state.quotes.map(quote => (
            <li key={quote._id}>
              {quote.dialog}
            </li>
          ))}
        </ul>
        <Pagination count={state.totalPages} page={state.page} onChange={handlePageChange} />
      </div>
    </React.Fragment>
  );
};

QuotePage.propTypes = {
  charID: PropTypes.string.isRequired,
};

export default QuotePage;
