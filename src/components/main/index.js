import React, { useEffect, useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Biography from '../biography';
import QuotePage from '../quotePage';
import API from '../../services/api';

const Main = () => {
  const [characters, setCharacters] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [currentChar, setCurrentChar] = useState({});

  useEffect(() => {
    API.get('/character')
      .then(({ data }) => {
        setCharacters(data.docs);
        setLoading(false);
      })
      .catch(er => console.error(er));
  }, []);

  const handleSelect = (event, value = {}) => setCurrentChar(value);

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
      <h4>
        {currentChar?.name}
        {' facts: '}
      </h4>
      <Biography character={currentChar} />
      {(currentChar?._id) && (<QuotePage charID={currentChar?._id} />)}
    </React.Fragment>
  );
};

export default Main;
