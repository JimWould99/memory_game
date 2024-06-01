import { useEffect, useState } from "react";
import ScoreBoard from "./scoreBoard";
import CardGroup from "./cardGroup";
import useFetch from "./useFetch";

const Body = () => {
  const {
    data: catData,
    isLoading,
    error,
  } = useFetch(
    "https://api.thecatapi.com/v1/images/search?limit=12&api_key=live_40SlhPOkTbpzJIMhKo6FFzFignI9fouJOTXF4FIqvsWHUdvTe1u9NbZCtW7V4urb"
  );

  // 'data: catData'= change name only in that context

  const [clickedIDs, setClickedIDs] = useState([]);
  const [currentScore, setCurrentScore] = useState(0);
  const [currentHighest, setCurrentHighest] = useState(0);

  function addID(imageID) {
    if (clickedIDs.includes(imageID)) {
      return false;
    } else {
      setClickedIDs((prevState) => [...prevState, imageID]);
      return true;
    }
  }

  function shuffleData() {
    let shuffledArray = catData.sort((a, b) => 0.5 - Math.random());
  }

  const handleClick = (imageID) => {
    let continueGame = addID(imageID);

    if (continueGame) {
      setCurrentScore(currentScore + 1);
    } else {
      if (currentScore > currentHighest) {
        setCurrentHighest(currentScore);
      }
      setCurrentScore(0);
      setClickedIDs([]);
      continueGame = true;
    }

    shuffleData();
  };

  return (
    <>
      <h1>Memory Game</h1>
      <ScoreBoard
        currentScore={currentScore}
        currentHighest={currentHighest}
      ></ScoreBoard>
      {error && <h3>{error}</h3>}
      {isLoading && <h3>Cat images loading...</h3>}
      {catData && (
        <CardGroup catData={catData} handleClick={handleClick}></CardGroup>
      )}
    </>
  );
};

export default Body;
