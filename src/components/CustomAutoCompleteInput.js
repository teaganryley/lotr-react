import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import CircularProgress from '@material-ui/core/CircularProgress';

const CustomAutoCompleteInput = (props) => {
  const { loading, ...params } = props;

  const endAdornment = (
    <React.Fragment>
      {loading ? <CircularProgress color="inherit" size={20} /> : null}
      {console.log(params.InputProps)}
      {params.InputProps.endAdornment}
    </React.Fragment>
  );

  return (
    <TextField
      {...params}
      label="Asynchronous"
      variant="outlined"
      InputProps={{
        ...params.InputProps,
        endAdornment,
      }}
    />
  );
};

CustomAutoCompleteInput.propTypes = {
  loading: PropTypes.bool,
};

export default CustomAutoCompleteInput;
