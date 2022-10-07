import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const RelatedCharacter = ({ character }) => {
  const locationId = character.location.url[character.location.url.length - 1];
  return (
    <Link href={`/character/${character.id}+${locationId}/`}>
      <a>
        <Image
          src={character.image}
          alt={character.name}
          width="300"
          height="300"
        />
        <h3>{character.name}</h3>
      </a>
    </Link>
  );
};

export default RelatedCharacter;
