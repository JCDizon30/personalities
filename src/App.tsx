import { useState } from 'react';
import { nbaList } from './data';

export default function Gallery() {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);
  const hasNext = index < nbaList.length - 1;
  const hasPrevious = index > 0;

  function handleNextClick() {
    if (hasNext) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  }

  function handleBackClick() {
    if (hasPrevious) {
      setIndex(index - 1);
    } else {
      setIndex(nbaList.length - 1); 
    }
  }

  function handleMoreClick() {
    setShowMore(!showMore);
  }

  let nba = nbaList[index];

  return (
    <>
      <button onClick={handleBackClick}>
        Back
      </button>
      <button onClick={handleNextClick}>
        Next
      </button>
      <h2>
        <i>{nba.name}</i>
      </h2>
      <h3>
        ({index + 1} of {nbaList.length})
      </h3>
      <button onClick={handleMoreClick}>
        {showMore ? 'Hide' : 'Show'} details
      </button>
      {showMore && <p>{nba.description}</p>}
      <img
        src={nba.url}
        alt={nba.alt}
      />
    </>
  );
}
