import React, { useEffect, useState } from "react";

// Components
import Wrapper from "./UseEffectSimplified.style";

const UseEffectSimplified = () => {
  const [resourceType, setResourceType] = useState("Posts");
  // const [item, setItem] = useState([]);
  // const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    console.log("resource changed!");
    return () => {
      console.log("return from resource change!");
    };
  }, [resourceType]);

  // useEffect(() => {
  //   fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
  //     .then((response) => response.json())
  //     .then((json) => setItem(json));
  // }, [resourceType]);

  // const handleResize = () => {
  //   setWindowWidth(window.innerWidth);
  // };

  // useEffect(() => {
  //   window.addEventListener("resize", handleResize);
  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //   };
  // }, []);

  return (
    <Wrapper>
      <div>
        <button onClick={() => setResourceType("posts")}>Posts</button>
        <button onClick={() => setResourceType("users")}>Users</button>
        <button onClick={() => setResourceType("comments")}>Comments</button>
      </div>
      <h1>{resourceType}</h1>
      {/* {item.map(item => {
        return <pre>{JSON.stringify(item)}</pre>
      })} */}
      {/* {windowWidth} */}
    </Wrapper>
  );
};

export default UseEffectSimplified;
