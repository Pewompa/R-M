import Character from './Character';

const CharacterList = ({ characters }) => {
  return (
    <div className="grid gap-7 grid-cols-5 grid-rows-2">
      {characters.results.map((char, i) => (
        <Character key={i} character={char} />
      ))}
    </div>
  );
};

export default CharacterList;
