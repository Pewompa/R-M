import Image from 'next/image';
import Link from 'next/link';
import Router from 'next/router';
import { GetServerSideProps } from 'next';
import { CharacterResults, Result } from '../../types';
import CharacterList from '../../components/CharacterList';

const Character = ({ character, filteredCharactersArray }) => {
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
      <CharacterList
        characters={filteredCharactersArray}
        withLocation={false}
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

export default Character;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const characterResponse = await fetch(
    `https://rickandmortyapi.com/api/character/${context.query.id}`
  );
  const character: CharacterResults = await characterResponse.json();

  const locationResponse = await fetch(
    `https://rickandmortyapi.com/api/location/${context.query.location}`
  );
  const charactersInTheSameLocation: Result = await locationResponse.json();

  //función auxiliar para obtener todos los personajes que también se encuentran en la misma location que el personaje al que hemos clicado
  const bringCharacters = async (locationId: string) => {
    try {
      const response = await fetch(locationId);
      return response.json();
    } catch (error) {
      console.log(error);
    }
  };

  //Llamamos la api de los personajes con cada uno de los personajes en array de location
  let relatedCharactersArray = [];

  for (let i = 0; i < charactersInTheSameLocation.residents.length; i++) {
    let data = await bringCharacters(charactersInTheSameLocation.residents[i]);
    relatedCharactersArray.push(data);
  }

  let filteredCharactersArray = relatedCharactersArray.filter(
    (char) => char.id.toString() !== context.query.id
  );

  //Esta función de abajo reduce la complejidad de las llamadas ya que a diferencia del for loop, map no espera a que la promesa se resuelva,
  //simplemente a que se devuelva. Promise.all se encarga de esperar a que estas promesas se resuelvan.
  //Por alguna razón, la función no funciona con las locations "Citadel of ricks" y "Earth (replacement version)"

  // let relatedCharactersArray = await Promise.all(
  // charactersInTheSameLocation.residents.map(async (char) => {
  //     return await bringCharacters(char);
  //   })
  // );

  return {
    props: {
      character,
      filteredCharactersArray,
    },
  };
};
