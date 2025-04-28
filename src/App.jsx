import { useEffect, useState } from "react";

const Card = ({title}) => {
  const [hasLiked, setHasLiked] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`${title} has been liked: ${hasLiked}!`);
  }, [hasLiked]);

  useEffect(() => {
    console.log('CARD REDEREN');
  }, []);

  return (
    <div className="card" onClick={() => {setCount(count => count + 1)}} >
      <h2>{title}</h2>
      <p>{count}</p>
      <button onClick={() => setHasLiked(!hasLiked)}>{hasLiked? '🤍':'❤️'}</button>
    </div>
  );
}


const App = () => {
  return (
    <div className="card-container">

      <Card title={"Star War"} rating={5} isCool={true} />
      <Card title={"Avatar"} rating={5}  />
      <Card title={"The Lion King"} rating={4}  />

    </div>
  );
}

export default App;
