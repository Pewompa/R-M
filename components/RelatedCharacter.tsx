import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const RelatedCharacter = ({ character }) => {
  //locationId de la api de locations
  let locationId = '';

  //Comporbando si en el location url del personaje tiene más de un dígito
  //Si es así, lo obtenemos loopeando el url des del final
  if (character.location.url.length >= 4) {
    for (let i = character.location.url.length - 1; i > 0; i--) {
      if (character.location.url[i] === '/') {
        break;
      } else {
        locationId = character.location.url[i] + locationId;
      }
    }
    //Si solo tiene un dígito, cojemos el úlitmo caracter del url y nos ahorramos el loop
  } else {
    locationId = character.location.url[character.location.url.length - 1];
  }
  return (
    //Link para poder clicar los personajes dentro de la página de personajes en la misma location
    <Link
      href={{
        pathname: `/character/${character.id}`,
        query: { location: locationId },
      }}
    >
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
