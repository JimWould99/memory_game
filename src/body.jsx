import { useEffect, useState } from "react";
import ScoreBoard from "./scoreBoard";
import CardGroup from "./cardGroup";

const Body = () => {
  const [catData, setCatData] = useState(null);
  const [clickedIDs, setClickedIDs] = useState([]);

  const [currentScore, setCurrentScore] = useState(0);
  const [currentHighest, setCurrentHighest] = useState(0);

  useEffect(() => {
    fetch(
      "https://api.thecatapi.com/v1/images/search?limit=12&api_key=live_40SlhPOkTbpzJIMhKo6FFzFignI9fouJOTXF4FIqvsWHUdvTe1u9NbZCtW7V4urb"
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setCatData(data);
      });
  }, []);

  function addID(imageID) {
    if (clickedIDs.includes(imageID)) {
      return false;
    } else {
      setClickedIDs((prevState) => [...prevState, imageID]);
      return true;
    }
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
  };

  return (
    <>
      <h1>Memory Game</h1>
      <ScoreBoard
        currentScore={currentScore}
        currentHighest={currentHighest}
      ></ScoreBoard>
      {catData && (
        <CardGroup catData={catData} handleClick={handleClick}></CardGroup>
      )}
    </>
  );
};

export default Body;
