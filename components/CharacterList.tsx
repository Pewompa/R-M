import Character from './Character';
import { CharacterT } from '../types';

const CharacterList = ({ characters, withLocation }) => {
  return (
    <div className="grid gap-7 grid-cols-5 grid-rows-2 wrap">
      {characters.map((char: CharacterT, i: number) => (
        <Character key={i} character={char} withLocation={withLocation} />
      ))}
    </div>
  );
};

export default CharacterList;
