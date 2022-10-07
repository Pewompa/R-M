import { useEffect, useState } from 'react';
import RelatedCharacterList from './RelatedCharacterList';

const RelatedCharacterFetch = ({ location, page }) => {
  const [relatedCharacters, setRelatedCharacters] = useState([]);
  const id = location[location.length - 1];

  // useEffect(() => {
  //   const fetchPages = async () => {
  //     const response = await fetch(
  //       `https://rickandmortyapi.com/api/location/${id}`
  //     );
  //     const relatedChar = await response.json();
  //     setRelatedCharacters(relatedChar);
  //   };
  //   fetchPages();
  // }, [id]);
  // console.log(relatedCharacters);
  return (
    // <RelatedCharacterList
    //   relatedCharacters={relatedCharacters}
    // ></RelatedCharacterList>
    <></>
  );
};

export default RelatedCharacterFetch;

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
