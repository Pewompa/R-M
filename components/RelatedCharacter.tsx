import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const RelatedCharacter = ({ character }) => {
  let locationId = character.location.url.substring(
    character.location.url.indexOf('location/') + 9
  );
  return (
    //Link para poder clicar los personajes dentro de la página de personajes en la misma location
    <Link
      href={{
        pathname: `/character/${character.id}`,
        query: { location: locationId },
      }}
    >
      <div className="card cursor-pointer">
        <Image
          src={character.image}
          alt={character.name}
          width="300"
          height="300"
          className="rounded"
        />
        <h3 className="text-white mt-2 leading-6">{character.name}</h3>
      </div>
    </Link>
  );
};

export default RelatedCharacter;
