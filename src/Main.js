import React from 'react';
import debounce from 'debounce';
import AsyncAutoComplete from './components/AsyncAutoComplete';

const _searchCharacter = characterName => {
  // ping BE here!!
  return 'Gimli';
}

// debounce to avoid pinging BE for each keystroke
//const searchCharacter = debounce(_searchCharacter, 500);

export default function Main() {
  return (
    <React.Fragment>
      <h3>
        This is the main component
      </h3>
      <AsyncAutoComplete />
    </React.Fragment>
  );
}