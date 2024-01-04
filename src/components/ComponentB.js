import React, { useState } from 'react'
import useCounter from '../useCounter'
const ComponentB = () => {
  const {count, increment, decrement, reset}= useCounter();
  return (
    <div>
      <h1>Second Counter</h1>
      <h4>{count}</h4>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  )
}

export default ComponentB
