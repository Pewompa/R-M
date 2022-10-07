import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import RelatedCharacterList from '../../components/RelatedCharacterList';

const Charactero = ({ character, relatedCharactersArray }) => {
  return (
    <>
      <Link href={'/'}>Go Back</Link>
      <Image
        src={character.image}
        alt={character.name}
        width="200"
        height="400"
      />
      <h3>{character.name}</h3>
      <p>{character.location.name}</p>
      <p>Personajes que también estan en {character.location.name}</p>
      <RelatedCharacterList
        relatedCharacters={relatedCharactersArray}
        characterId={character.id}
      />
      <button className="bg-black text-white mt-10 flex justify-left gap-5">
        <Link href={'/'}>Go Back</Link>
      </button>
    </>
  );
};

export default Charactero;

export async function getServerSideProps(context) {
  let id = '';
  for (let i = 0; i < context.query.id.length; i++) {
    if (context.query.id[i] === '+') {
      break;
    } else {
      id += context.query.id[i];
    }
  }
  const characterResponse = await fetch(
    `https://rickandmortyapi.com/api/character/${id}`
  );
  const character = await characterResponse.json();

  let locationId = '';
  for (let i = context.query.id.length - 1; i > 0; i--) {
    if (context.query.id[i] === '+') {
      break;
    } else {
      locationId += context.query.id[i];
    }
  }
  const locationResponse = await fetch(
    `https://rickandmortyapi.com/api/location/${locationId}`
  );
  const location = await locationResponse.json();

  let relatedCharactersArray = [];

  const bringCharacters = async (locationId) => {
    const response = await fetch(locationId);
    return await response.json();
    // return fetch(numero).then((response) => response.json());
  };
  for (let i = 0; i < location.residents.length; i++) {
    // const response = await fetch(location.residents[i]);
    // const relatedChar = await response.json();
    // arr.push(relatedChar);
    let data = await bringCharacters(location.residents[i]);
    relatedCharactersArray.push(data);
  }

  return {
    props: {
      character,
      location,
      relatedCharactersArray,
    },
  };
}
