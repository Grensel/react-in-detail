import React from "react";
import { useState } from "react"

export default {
  title: 'React.memo demo'
}

export const Example2 = () => {
  console.log('Example!');

  const [counter, setCounter] = useState(0);

  return (
    <>
      <button onClick={() => setCounter(state => state + 1)}>x</button>
      {counter}
    </>
  )
}

