import Link from 'next/link';
import React from 'react';
import RelatedCharacter from './RelatedCharacter';
const RelatedCharacterList = ({ relatedCharacters, characterId }) => {
  const filteredCharacters = [];
  const func = () => {
    relatedCharacters.filter((char, i) => {
      char.id !== characterId && filteredCharacters.push(char);
    });
  };
  func();
  return (
    <div className="grid gap-7 grid-cols-5 grid-rows-2">
      {filteredCharacters.map((char, i) => (
        <RelatedCharacter key={i} character={char} />
      ))}
      {/* <Link href={'/'}>Go Back</Link> */}
    </div>
  );
};
//ADD INDEX TO LAYOUT!!!
export default RelatedCharacterList;
