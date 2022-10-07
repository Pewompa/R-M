import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const RelatedCharacter = ({ character }) => {
  const locationId = character.location.url[character.location.url.length - 1];
  console.log('insde');
  return (
    <Link href={`/character/${character.id}+${locationId}/`}>
      <a>
        <Image
          src={character.image}
          alt={character.name}
          width="200"
          height="400"
        />
        <h3>{character.name}</h3>
        <p>{character.location.name}</p>
      </a>
    </Link>
  );
};

export default RelatedCharacter;
