import React from 'react';
import RelatedCharacter from './RelatedCharacter';
import { CharacterT } from '../types';

const RelatedCharacterList = ({ relatedCharacters, characterId }) => {
  console.log(relatedCharacters);
  return (
    <div className="grid gap-7 grid-cols-5 grid-rows-2 wrap">
      {relatedCharacters
        .filter((char: CharacterT) => char.id !== characterId)
        .map((char: CharacterT, i: number) => (
          <RelatedCharacter key={i} character={char} />
        ))}
    </div>
  );
};

export default RelatedCharacterList;
