import React, { useEffect, useState } from 'react';
import AsyncAutoComplete from './components/AsyncAutoComplete';

import API from './api';

export default function Main() {
  const [characters, setCharacters] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    API.get('/character')
      .then(({ data }) => {
        setCharacters(data.docs);
        setLoading(false);
      })
      .catch((er) => console.error(er));
  }, []);

  if (isLoading) return (<div>Loading...</div>);
  return (
    <React.Fragment>
      <p>
        {console.log(characters)}
      </p>
      <AsyncAutoComplete characters={characters} />
    </React.Fragment>
  );
}
