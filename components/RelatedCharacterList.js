import { useState, useEffect } from 'react';
import RelatedCharacter from './RelatedCharacter';

const RelatedCharacterList = ({ relatedCharacters }) => {
  const [relatedCharacterList, setRelatedCharacterList] = useState([]);
  // useEffect(() => {
  //     const fetchPages = async () => {
  //       const response = await fetch(
  //         `https://rickandmortyapi.com/api/character/${}`
  //       );
  //       const relatedChar = await response.json();
  //       setRelatedCharacters(relatedChar);
  //     };
  //     fetchPages();
  //   }, [id]);
  console.log(relatedCharacters.residents.length);
  //   useEffect(() => {
  //     const fetching = async () => {
  //       for (let i = 0; i < 11; i++) {
  //         const response = await fetch(relatedCharacters.residents[i]);
  //         const relatedChar = await response.json();
  //         setRelatedCharacterList((prev) => {
  //           return [...prev, relatedChar];
  //         });
  //       }
  //     };
  //     fetching();
  //   }, [relatedCharacters]);
  return (
    <div>
      {/* {relatedCharacterList.residents.map((char, i) => (
        <RelatedCharacter key={i} character={char} />
      ))} */}
      <button>click</button>
    </div>
  );
};

export default RelatedCharacterList;

// export async function getServerSideProps(context) {
//   console.log('in');
//   const response = await fetch(
//     `https://rickandmortyapi.com/api/location/${location}`
//   );
//   console.log(response);
//   const page = await response.json();
//   return {
//     props: {
//       page,
//     },
//   };
// }
