// 1) counter example

// import React, {useState} from 'react';

// const Counter = () => {
//   const [count,setCount] = useState(0);

//   const increment = () => {
//     setCount(count + 1);
//   }

//     const decrement = () => {
//     setCount(count - 1);
//   }
//   return (
//     <div>
//       <h1>Counter Example:</h1>
//       <h2>Count is : {count}</h2>
//       <button onClick={increment}>Increment</button>
//       <button onClick={decrement}>Decrement</button>
//     </div>
//   )
// }

// export default Counter

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 2) updating the value of state based on the previous value.Every time you take a step, simply click the button. At the end of the day, it will tell you how many steps you took.

import React, { useState } from 'react'

const Counter = () => {
  const [steps, setSteps] = useState(0);

  const increment = () => {
    setSteps(prevStep => prevStep + 1);
  }
    return (
    <div>
      <p>Today I have taken {steps} steps.</p>
    <button onClick={increment}>
      I took another step.</button>  
    </div>
  )
}

export default Counter



