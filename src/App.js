import React, { useState } from "react";
import "./App.css";
// import Axios from "axios";

function App() {
  const [joke, setJoke] = useState("");

  // const getJoke = () => {
  //   Axios.get("https://official-joke-api.appspot.com/random_joke").then(
  //     (response) => {
  //       setJoke(`${response.data.setup} ... ${response.data.punchline}`);
  //       console.log(response);
  //     }
  //   );
  // };

  const getJoke = () => {
    fetch("https://official-joke-api.appspot.com/random_joke")
      .then((response) => response.json())
      .then((data) => {
        setJoke(`${data.setup} ... ${data.punchline}`);
        console.log(data);
      });
  };

  return (
    <div className="App">
      <h1>Hello API!</h1>
      <q style={{ display: "block", marginBottom: "1rem" }}>{joke}</q>
      <button onClick={getJoke}>Get Joke!</button>
    </div>
  );
}

export default App;
