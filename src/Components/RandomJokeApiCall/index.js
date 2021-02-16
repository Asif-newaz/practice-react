import React, { useState } from "react";
import Axios from "axios";

// Components
import Wrapper, {Button} from './RandomJokesApiCall.style';

const RandomJokeApiCall = () => {
  const [joke, setJoke] = useState("");

  const getJoke = () => {
    Axios.get("https://official-joke-api.appspot.com/random_joke").then(
      (response) => {
        setJoke(`${response.data.setup} ... ${response.data.punchline}`);
        console.log(response);
      }
    );
  };

  //   const getJoke = () => {
  //     fetch("https://official-joke-api.appspot.com/random_joke")
  //       .then((response) => response.json())
  //       .then((data) => {
  //         setJoke(`${data.setup} ... ${data.punchline}`);
  //         console.log(data);
  //       });
  //   };

  return (
    <Wrapper>
      <h1>Hello API!</h1>
      <q style={{ display: "block", marginBottom: "1rem" }}>{joke}</q>
      <Button onClick={getJoke}>Get Joke!</Button>
    </Wrapper>
  );
};

export default RandomJokeApiCall;
