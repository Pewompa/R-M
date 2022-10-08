import Image from 'next/image';
import Link from 'next/link';
import Router from 'next/router';
import { useState } from 'react';
import RelatedCharacterList from '../../components/RelatedCharacterList';
import { GetServerSideProps, GetStaticPaths } from 'next';
import { GetCharacterResults, Result } from '../../types';

const Charactero = ({ character, relatedCharactersArray }) => {
  return (
    <div>
      <div className="flex justify-end">
        <button className="bg-slate-700 hover:bg-slate-600 text-white font-semi-bold py-2 p px-4 rounded mb-3 mr-3 mt-3 ">
          <Link href={'/'}>
            <img src="/../home.png"></img>
          </Link>
        </button>
      </div>
      <div className="flex align">
        <img
          src={character.image}
          alt={character.name}
          width="300"
          height="300"
          className="rounded border-double border-4 border-slate-500"
        />
        <div className="grid content-start">
          <h3 className="text-slate-300 font-bold text-6xl font-horror ml-4 mt-7">
            {character.name}
          </h3>
          <p className="text-slate-400 text-2xl ml-4 mt-6 font-semi-bold">
            <Image
              src="/icons8.png"
              alt="location svg"
              width="15"
              height="15"
            ></Image>
            {character.location.name}
          </p>
        </div>
      </div>
      <div className="flex justify-end">
        <p className="font-bold text-slate-300 text-xl mb-3">
          Personajes que también estan en{' '}
          <span style={{ color: '#5fd12e' }}>{character.location.name}</span>
        </p>
      </div>

      <RelatedCharacterList
        relatedCharacters={relatedCharactersArray}
        characterId={character.id}
      />
      <div className="flex justify-end">
        <button
          onClick={() => Router.back()}
          className="bg-slate-700 hover:bg-slate-600 text-white font-semi-bold py-2 p px-4 rounded mb-3 mr-3 mt-3 "
        >
          <img src="/../left.png"></img>
        </button>
      </div>
    </div>
  );
};

export default Charactero;

export const getServerSideProps: GetServerSideProps = async (context) => {
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
  const character: GetCharacterResults = await characterResponse.json();

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
  const location: Result = await locationResponse.json();

  let relatedCharactersArray: string[] = [];

  const bringCharacters = async (locationId: string) => {
    const response = await fetch(locationId);
    return await response.json();
  };
  for (let i = 0; i < location.residents.length; i++) {
    let data = await bringCharacters(location.residents[i]);
    relatedCharactersArray.push(data);
  }

  return {
    props: {
      character,
      relatedCharactersArray,
    },
  };
};
