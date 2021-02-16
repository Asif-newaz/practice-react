import React, { useState, useEffect } from "react";

import "./App.css";

// import randomcolor from "randomcolor";
// import Axios from "axios";

function App() {
  // const [joke, setJoke] = useState("");

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

      {/* <h1>Hello API!</h1> */}
      {/* <q style={{ display: "block", marginBottom: "1rem" }}>{joke}</q> */}
      {/* <button onClick={getJoke}>Get Joke!</button> */}
    </div>
  );
}

export default App;
