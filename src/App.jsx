import Hello from "./components/Hello";

const Card = ({title, rating}) => {
  return (
    <div className="card" style = {{
      border: '1px solid #4b5362',
      padding: '20px',
      margin: '10px',
      backgroundColor: '#31363f',
      borderRadius: '10px',
      minHeight: '100px'
    }}>
      <h2>{title}</h2>
      <p>{rating}</p>
      <br />
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
