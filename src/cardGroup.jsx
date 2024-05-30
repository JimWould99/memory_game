import Card from "./card";
const CardGroup = ({ catData, handleClick }) => {
  /*function createNewOrder(){

    }*/

  return (
    <div className="cardgroup">
      {catData.map((catObject) => (
        <Card
          key={catObject.id}
          propKey={catObject.id}
          url={catObject.url}
          handleClick={handleClick}
        ></Card>
      ))}
    </div>
  );
};

export default CardGroup;
