import React from 'react';
import RelatedCharacter from './RelatedCharacter';
const RelatedCharacterList = ({ relatedCharacters }) => {
  return (
    <div>
      {relatedCharacters.map((char, i) => (
        <RelatedCharacter key={i} character={char} />
      ))}
    </div>
  );
};

export default RelatedCharacterList;
