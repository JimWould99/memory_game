const Card = ({ url, propKey, handleClick }) => {
  return (
    <div
      className="card"
      onClick={() => {
        handleClick(propKey);
      }}
    >
      <img src={url} alt="catImage" />
    </div>
  );
};

export default Card;
