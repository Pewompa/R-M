import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import Modal from './Modal';

const Character = ({ character }) => {
  const locationId = character.location.url[character.location.url.length - 1];

  return (
    <Link href={`/character/${character.id}+${locationId}/`}>
      <a>
        <div className="card">
          <img
            src={character.image}
            alt={character.name}
            width="300"
            height="300"
            class="rounded"
          />
          <h3 className="text-white text-[14px] font-semi-bold">
            {character.name}
          </h3>
          <p className="text-slate-300  text-[12px]">
            {character.location.name}
          </p>
        </div>
      </a>
    </Link>
  );
};

export default Character;
