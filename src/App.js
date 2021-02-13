import React, { useState } from "react";
import "./App.css";
// import Axios from "axios";

function App() {
  // const [joke, setJoke] = useState("");
  const [count, setCount] = useState(0);

  const increment = () => {
    return setCount((prevCount) => prevCount + 1);
  };

  const decrement = () => {
    return setCount((prevCount) => prevCount - 1);
  };

  const doubled = () => {
    return setCount((prevCount) => prevCount * 2);
  };
  // const countUpdate = () => {
  //   return setCount(function (prevCount) {
  //     return prevCount + 1;
  //   });
  // };

  // const getJoke = () => {
  //   Axios.get("https://official-joke-api.appspot.com/random_joke").then(
  //     (response) => {
  //       setJoke(`${response.data.setup} ... ${response.data.punchline}`);
  //       console.log(response);
  //     }
  //   );
  // };

  // const getJoke = () => {
  //   fetch("https://official-joke-api.appspot.com/random_joke")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setJoke(`${data.setup} ... ${data.punchline}`);
  //       console.log(data);
  //     });
  // };

  return (
    <div className="App">
      <h1>Hello useState!</h1>
      <h1
        style={{
          margin: "auto",
          width: "300px",
          border: "1px solid goldenrod",
          borderRadius: "4px",
        }}
      >
        {count}
      </h1>
      <button
        style={{
          display: "block",
          margin: "auto",
          border: "none",
          borderRadius: "4px",
          backgroundColor: "crimson",
          padding: "10px 30px",
          color: "white",
          marginTop: "15px",
          marginBottom: "15px",
        }}
        // onClick={() => setCount((prevCount) => prevCount + 1)}
        onClick={increment}
      >
        Change!
      </button>
      <button
        style={{
          display: "block",
          margin: "auto",
          border: "none",
          borderRadius: "4px",
          backgroundColor: "crimson",
          padding: "10px 30px",
          color: "white",
        }}
        // onClick={() => setCount((prevCount) => prevCount + 1)}
        onClick={decrement}
      >
        Decrement!
      </button>
      <button
        style={{
          display: "block",
          margin: "auto",
          border: "none",
          borderRadius: "4px",
          backgroundColor: "crimson",
          padding: "10px 30px",
          color: "white",
          marginTop: '15px'
        }}
        // onClick={() => setCount((prevCount) => prevCount + 1)}
        onClick={doubled}
      >
        Doubled!
      </button>
      {/* <h1>Hello API!</h1> */}
      {/* <q style={{ display: "block", marginBottom: "1rem" }}>{joke}</q> */}
      {/* <button onClick={getJoke}>Get Joke!</button> */}
    </div>
  );
}

export default App;
