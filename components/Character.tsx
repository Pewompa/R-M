import Link from 'next/link';

const Character = ({ character, withLocation }) => {
  let locationId = character.location.url.substring(
    character.location.url.indexOf('location/') + 9
  );
  return (
    <Link
      href={{
        pathname: `/character/${character.id}`,
        query: { location: locationId },
      }}
    >
      <div className="card cursor-pointer">
        <img
          src={character.image}
          alt={character.name}
          width="300"
          height="300"
          className="rounded"
        />
        <h3 className="text-white text-[14px] font-semi-bold mt-2 leading-6">
          {character.name}
        </h3>
        {withLocation && (
          <p className="text-slate-300  text-[12px]">
            {character.location.name}
          </p>
        )}
      </div>
    </Link>
  );
};

export default Character;
