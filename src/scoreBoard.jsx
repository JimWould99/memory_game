const ScoreBoard = ({ currentScore, currentHighest }) => {
  return (
    <div className="scoreBoard">
      <h3>Click on images to gain points. Click on image twice = lose game</h3>
      <h3>
        Current score: {currentScore} Current highest: {currentHighest}
      </h3>
    </div>
  );
};

export default ScoreBoard;
