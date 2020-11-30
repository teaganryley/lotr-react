import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import PropTypes from 'prop-types';

const AsyncAutoComplete = ({ characters }) => (
  <Autocomplete
    id="lotr-auto"
    style={{ width: 300 }}
    options={characters}
    getOptionSelected={(option, value) => option.name === value.name}
    getOptionLabel={(option) => option.name}
    renderInput={(params) => (
      <TextField
        {...params}
        label="Search"
        margin="normal"
        variant="outlined"
      />
    )}
  />
);

AsyncAutoComplete.propTypes = {
  characters: PropTypes.arrayOf(PropTypes.object),
};

export default AsyncAutoComplete;