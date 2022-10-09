import Character from './Character';
import { CharacterT } from '../types';
import RelatedCharacter from './RelatedCharacter';

const CharacterList = ({ characters, characterId }) => {
  let results;
  characters.results ? (results = characters.results) : (results = characters);
  return (
    // <div className="grid gap-7 grid-cols-5 grid-rows-2">
    //   {characters.results.map((char: CharacterT, i: number) => (
    //     <Character key={i} character={char} />
    //   ))}
    // </div>

    <div className="grid gap-7 grid-cols-5 grid-rows-2 wrap">
      {results
        .filter((char: CharacterT) => char.id !== characterId)
        .map((char: CharacterT, i: number) => (
          <Character key={i} character={char} />
        ))}
    </div>
  );
};

export default CharacterList;
