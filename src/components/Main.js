import React, { useEffect, useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
// import AsyncAutoComplete from './components/AsyncAutoComplete';

import API from '../api';

export default function Main() {
  const [characters, setCharacters] = useState([]);
  const [isLoading, setLoading] = useState(true);
  // const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    API.get('/character')
      .then(({ data }) => {
        setCharacters(data.docs);
        setLoading(false);
      })
      .catch((er) => console.error(er));
  }, []);

  const handleSelect = (event, value) => {
    const { _id: id } = value;
    // TODO: handle clear selection-- causes destructuring problem
    console.log(event);
    // console.log(`/quote/${id}`);
    API.get(`/character/${id}/quote`)
      .then(({ data }) => {
        console.log(data.docs);
      })
      .catch((er) => console.log(er));
  };

  if (isLoading) return (<div>Loading...</div>);
  return (
    <React.Fragment>
      <p>
        {console.log(characters)}
      </p>
      <Autocomplete
        id="lotr-auto"
        style={{ width: 300 }}
        options={characters}
        getOptionSelected={(option, value) => option.name === value.name}
        getOptionLabel={(option) => option.name}
        onChange={handleSelect}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Search"
            margin="normal"
            variant="outlined"
          />
        )}
      />

    </React.Fragment>
  );
}
