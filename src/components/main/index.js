import React, { useEffect, useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import DisplayInfo from '../displayInfo';
import API from '../../services/api';

const Main = () => {
  const [characters, setCharacters] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [currentChar, setCurrentChar] = useState({});
  const [limit, setLimit] = useState(10);

  const pageLimits = [5, 10, 15];

  useEffect(() => {
    API.get('/character')
      .then(({ data }) => {
        setCharacters(data.docs);
        setLoading(false);
      })
      .catch(er => console.error(er));
  }, []);

  const handleSelect = (event, value = {}) => setCurrentChar(value);

  const handleLimitChange = ({ target }) => setLimit(target.value);

  if (isLoading) return (<div>Loading...</div>);
  return (
    <React.Fragment>
      <Autocomplete
        id="lotr-auto"
        style={{ width: 300 }}
        options={characters}
        getOptionSelected={(option, value) => option.name === value.name}
        getOptionLabel={option => option.name}
        onChange={handleSelect}
        renderInput={params => (
          <TextField
            {...params}
            label="Search"
            margin="normal"
            variant="outlined"
          />
        )}
      />
      <Select value={limit} onChange={handleLimitChange}>
        {pageLimits.map(size => (
          <MenuItem key={size} value={size}>
            {size}
          </MenuItem>
        ))}
      </Select>
      <DisplayInfo character={currentChar} limit={limit} />
    </React.Fragment>
  );
};

export default Main;
