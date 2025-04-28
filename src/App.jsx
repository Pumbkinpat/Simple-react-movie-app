import { useState } from "react";

const Card = ({title}) => {
  const [hasLiked, setHasLiked] = useState('❤️');

  return (
    <div className="card" >
      <h2>{title}</h2>
      <button onClick={() => setHasLiked( hasLiked === '❤️'? '🤍':'❤️')}>{hasLiked}</button>
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
