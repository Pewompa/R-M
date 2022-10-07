import Image from 'next/image';
import Link from 'next/link';

const RelatedCharacter = ({ character }) => {
  return (
    <Link
      // href="https://rickandmortyapi.com/api/character/[id]"
      // as={`https://rickandmortyapi.com/api/character/${character.id}`}
      href={`/character/${character.id}`}
    >
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
