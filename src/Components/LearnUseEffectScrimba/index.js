import React, { useState, useEffect } from "react";
import randomcolor from "randomcolor";

// Components
import Wrapper from "./LearnUseEffectScrimba.style";

const LearnUseEffectScrimba = () => {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState(randomcolor());

  //   useEffect(() => {
  //     effect
  //     return () => {
  //       cleanup
  //     }
  //   }, [input])

  useEffect(() => {
    setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);
  }, []);

  useEffect(() => {
    setColor(randomcolor());
  }, [count]);

  return (
    <Wrapper>
      <h1 style={{ color: color }}>Hello useState!</h1>
      <h1 className="timer-box" style={{ color: color }}>
        {count}
      </h1>
    </Wrapper>
  );
};

export default LearnUseEffectScrimba;
