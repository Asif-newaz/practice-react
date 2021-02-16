import React, { useState } from "react";

// Components
import Wrapper from "./LearnHooksSimplifiedWeb.style";

const LearnHooksSimplifiedWeb = () => {
  const [count, setCount] = useState("4");

  function decrementCount() {
    if (count === 0) {
      return false;
    } else {
      setCount(count - 1);
    }
  }

  return (
    <Wrapper>
      <button onClick={decrementCount}>-</button>
      <span>{count}</span>
      <button>+</button>
    </Wrapper>
  );
};

export default LearnHooksSimplifiedWeb;
