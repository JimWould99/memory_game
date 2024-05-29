import { useEffect } from "react";
const Body = () => {
  useEffect(() => {
    fetch("https://api.thecatapi.com/v1/images/search?limit=10")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
      });
  });
  return <></>;
};

export default Body;
