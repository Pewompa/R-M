import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const RelatedCharacter = ({ character }) => {
  const locationId = character.location.url[character.location.url.length - 1];
  return (
    <Link href={`/character/${character.id}+${locationId}/`}>
      <div className="bg-black card">
        <a>
          <Image
            src={character.image}
            alt={character.name}
            width="300"
            height="300"
            class="rounded"
          />
          <h3 className="text-white">{character.name}</h3>
        </a>
      </div>
    </Link>
  );
};

export default RelatedCharacter;
