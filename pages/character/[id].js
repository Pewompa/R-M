import Image from 'next/image';
import { useState } from 'react';
import RelatedCharacterFetch from '../../components/RelatedCharacterFetch';

const Charactero = ({ character, location, arr }) => {
  // const [location, setLocation] = useState([]);
  console.log(arr);
  console.log(location.residents[0]);
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
      {/* <RelatedCharacterFetch location={location}></RelatedCharacterFetch> */}
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

  let arr = [];

  const bringCharacters = (numero) => {
    return fetch(numero).then((response) => response.json());
  };
  for (let i = 0; i < location.residents.length; i++) {
    // const response = await fetch(location.residents[i]);
    // const relatedChar = await response.json();
    // arr.push(relatedChar);
    let data = await bringCharacters(location.residents[i]);
    arr.push(data);
  }
  return {
    props: {
      character,
      location,
      arr,
    },
  };
}
