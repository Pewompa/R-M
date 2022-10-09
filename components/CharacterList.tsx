import Character from './Character';
import { CharacterT } from '../types';

const CharacterList = ({ characters }) => {
  return (
    <div className="grid gap-7 grid-cols-5 grid-rows-2">
      {characters.results.map((char: CharacterT, i: number) => (
        <Character key={i} character={char} />
      ))}
    </div>
  );
};

export default CharacterList;
