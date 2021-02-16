import React, { useEffect, useState } from "react";

// Components
import Wrapper from "./UseEffectSimplified.style";

const UseEffectSimplified = () => {
    const [resourceType, setResourceType] = useState('Posts');

    useEffect(() => {
        console.log('Hello useEffect');
    })

  return (
    <Wrapper>
      <div>
        <button onClick={() => setResourceType('posts')}>Posts</button>
        <button onClick={() => setResourceType('users')}>Users</button>
        <button onClick={() => setResourceType('comments')}>Comments</button>
      </div>
      <h1>{resourceType}</h1>
    </Wrapper>
  );
};

export default UseEffectSimplified;
