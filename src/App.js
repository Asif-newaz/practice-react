import React from "react";
import "./App.css";

// Components
import RandomJokeApiCall from "./Components/RandomJokeApiCall/index";

// import randomcolor from "randomcolor";

function App() {
  // const [count, setCount] = useState(0);
  // const [color, setColor] = useState(randomcolor());

  // useEffect(() => {
  //   effect
  //   return () => {
  //     cleanup
  //   }
  // }, [input])

  // useEffect(() => {
  //   setInterval(() => {
  //     setCount((prevCount) => prevCount + 1);
  //   }, 1000);
  // }, []);

  // useEffect(() => {
  //   setColor(randomcolor());
  // }, [count]);

  return (
    <div className="App">
      {/* <h1 style={{ color: color }}>Hello useState!</h1>
      <h1
        style={{
          color: color,
          margin: "auto",
          width: "300px",
          border: "1px solid goldenrod",
          borderRadius: "4px",
        }}
      >
        {count}
      </h1> */}
      <RandomJokeApiCall />
    </div>
  );
}

export default App;
