import React, { useEffect, useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Biography from './Biography';
import QuotePage from './QuotePage';
// import AsyncAutoComplete from './components/AsyncAutoComplete';

import API from '../api';

export default function Main() {
  const [characters, setCharacters] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [currentChar, setCurrentChar] = useState({});
  const [charID, setCharID] = useState('');

  // TODO asynch
  useEffect(() => {
    API.get('/character')
      .then(({ data }) => {
        setCharacters(data.docs);
        setLoading(false);
      })
      .catch(er => console.error(er));
  }, []);

  const handleSelect = (event, value) => {
    // is there ever a case in which value is undefined?
    if (value) {
      const { _id: id } = value;
      setCurrentChar(value);
      setCharID(id);
    }
  };

  // todo handleClear
  // todo Handle no charID

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
      <h4>Funny Gandalf facts:</h4>
      <Biography character={currentChar} />
      <h4>Funny Gandalf sayings:</h4>
      {(charID) && (<QuotePage charID={charID} />)}
    </React.Fragment>
  );
}
