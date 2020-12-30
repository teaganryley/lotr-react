import React, { useEffect, useReducer } from 'react';
import PropTypes from 'prop-types';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Pagination from '@material-ui/lab/Pagination';
import API from '../../services/api';

const pageLimits = [5, 10, 15];

const init = charID => ({
  _id: charID,
  limit: 5,
  page: 1,
  totalPages: 10,
  quotes: [],
  error: null,
});

const reducer = (state = { ...init }, action = {}) => {
  switch (action.type) {
    case 'UPDATE_SETTINGS':
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

const updateSettings = fieldAndValue => ({
  type: 'UPDATE_SETTINGS',
  payload: fieldAndValue,
});

const QuotePage = ({ charID }) => {
  const [state, dispatch] = useReducer(reducer, charID, init);

  useEffect(() => {
    API.get(`/character/${charID}/quote?limit=${state.limit}&page=${state.page}`)
      .then(({ data }) => {
        dispatch(updateSettings(
          {
            quotes: data.docs,
            totalPages: data.pages,
          },
        ));
      })
      .catch(er => console.log(er));
  }, [charID, state.page, state.limit]);

  if (!state.quotes?.length) return (<div>no movie quotes</div>);
  return (
    <React.Fragment>
      <h4>Movie Quotes List</h4>
      <div>
        <Select
          value={state.limit}
          onChange={({ target }) => dispatch(updateSettings({ limit: target?.value }))}
        >
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
        <Pagination
          count={state.totalPages}
          page={state.page}
          onChange={(event, value) => dispatch(updateSettings({ page: value }))}
        />
      </div>
    </React.Fragment>
  );
};

QuotePage.propTypes = {
  charID: PropTypes.string.isRequired,
};

export default QuotePage;
