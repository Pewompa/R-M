import Image from 'next/image';
import { useState } from 'react';
import Button from '../../components/Button';
import CharacterList from '../../components/CharacterList';
import Character from '../../components/CharacterList';

const Charactero = ({ character }) => {
  const [location, setLocation] = useState(character.location.name);
  return (
    <>
      <Image
        src={character.image}
        alt={character.name}
        width="200"
        height="400"
      />
      <h3>{character.name}</h3>
      <p>{character.location.name}</p>
      <p>Personajes que también estan en {character.location.name}</p>
    </>
  );
};

export default Charactero;

export async function getServerSideProps(context) {
  const response = await fetch(
    `https://rickandmortyapi.com/api/character/${context.query.id}`
  );
  const character = await response.json();
  return {
    props: {
      character,
    },
  };
}
