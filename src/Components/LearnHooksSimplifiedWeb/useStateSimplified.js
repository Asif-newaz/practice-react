import React, { useState } from "react";

// Components
import Wrapper from "./UseStateSimplified.style";

const UseStateSimplified = () => {
  const [count, setCount] = useState(4);
  const [theme, setTheme] = useState('Hot pink');

  //   const [state, setState] = useState({ count: 4, theme: "blue" });
  //   let count = state.count;
  //   let theme = state.theme;

  function decrementCount() {
    if (count === 0) {
      return false;
    } else {
      setCount((prevCount) => prevCount - 1);
    }
  }

  function incrementCount() {
    setCount((prevCount) => prevCount + 1);
    setTheme('Crimson');
  }

  //   function decrementCount() {
  //       setState((prevState) => {
  //         return {...prevState, count: prevState.count - 1};
  //       });
  //   }

  //   function incrementCount() {
  //     setState((prevState) => {
  //       return {...prevState, count: prevState.count + 1};
  //     });
  // }

  return (
    <Wrapper>
      <button onClick={decrementCount}>-</button>
      <span>{count}</span>
      <span>{theme}</span>
      <button onClick={incrementCount}>+</button>
    </Wrapper>
  );
};

export default UseStateSimplified;
