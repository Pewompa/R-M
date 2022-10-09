import Link from 'next/link';
import React from 'react';
import RelatedCharacter from './RelatedCharacter';
import { CharacterT } from '../types';

const RelatedCharacterList = ({ relatedCharacters, characterId }) => {
  //esta función permite que la lista de los personajes en la misma location excluya el personaje clicado
  const filteredCharacters = [];
  const func = () => {
    relatedCharacters.filter((char: CharacterT, i: string) => {
      char.id !== characterId && filteredCharacters.push(char);
    });
  };
  func();
  return (
    <div className="grid gap-7 grid-cols-5 grid-rows-2 wrap">
      {filteredCharacters.map((char, i) => (
        <RelatedCharacter key={i} character={char} />
      ))}
    </div>
  );
};
//ADD INDEX TO LAYOUT!!!
export default RelatedCharacterList;
