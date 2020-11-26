import React, { useState, useEffect } from 'react';
import AsyncAutoComplete from './components/AsyncAutoComplete';

import API from './api';

export default function Main() {
  const [response, setResponse] = useState('No response yet');
  const [isLoading, setLoading] = useState(true);

  if (isLoading) return (<div>Loading...</div>);
  return (
    <React.Fragment>
      <p>
        {response}
      </p>
      <AsyncAutoComplete />
    </React.Fragment>
  );
}
