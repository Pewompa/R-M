import Character from './Character';

const CharacterList = ({ characters }) => {
  console.log(characters);
  return (
    <div>
      {characters.results.map((char, i) => (
        <Character key={i} character={char} />
      ))}
    </div>
  );
};

export default CharacterList;
