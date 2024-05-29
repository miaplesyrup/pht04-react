import React, { useState, useEffect } from 'react'

const Counter = () => {
  // counter
  const [count, setCount] = useState(0);

  // useEffect(() => {
  //   console.log("Component did mount or update");
  //   return () => {
  //     console.log("Component will unmount");
  //   }
  // }, [])

  useEffect(() => {
    setTimeout(() => {
      setCount(count + 1);
    }, 1000)
  }, [])

  const increment = () => {
    setCount(count + 1)
  };
  const decrement = () => {
    setCount(count - 1)
  };
  const reset = () => {
    setCount(0)
  };
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  )
}

export default Counter;