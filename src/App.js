import React from "react";
import "./App.css";

// Components
// import RandomJokeApiCall from "./Components/RandomJokeApiCall/index";
// import LearnUseEffectScrimba from "./Components/LearnUseEffectScrimba/index";
// import UseStateSimplified from "./Components/LearnHooksSimplifiedWeb/UseStateSimplified";
// import UseEffectSimplified from "./Components/LearnHooksSimplifiedWeb/UseEffectSimplified.js";
// import ReactSlick from "./Components/ReactSlick/index";
import FlipKartMultiItemCarousel from "./Components/FlipkartMultiItemCarousel";

function App() {
  return (
    <div className="App">
      <FlipKartMultiItemCarousel />
      {/* <ReactSlick /> */}
      {/* <UseEffectSimplified /> */}
      {/* <UseStateSimplified /> */}
      {/* <LearnUseEffectScrimba /> */}
      {/* <RandomJokeApiCall /> */}
    </div>
  );
}

export default App;
