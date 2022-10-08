import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const RelatedCharacter = ({ character }) => {
  let locationId = '';
  for (let i = character.location.url.length - 1; i > 0; i--) {
    if (character.location.url[i] === '/') {
      break;
    } else {
      locationId += character.location.url[i];
    }
  }
  return (
    <Link href={`/character/${character.id}+${locationId}/`}>
      <div className="card cursor-pointer">
        <a>
          <Image
            src={character.image}
            alt={character.name}
            width="300"
            height="300"
            className="rounded"
          />
          <h3 className="text-white mt-2 leading-6">{character.name}</h3>
        </a>
      </div>
    </Link>
  );
};

export default RelatedCharacter;
