// create a button when we click on that the initial message will be changed.

import React, { useState } from 'react'

const Exam2 = () => {
  const [message, setMessage] = useState("Love Javascript");

  const handleClick = () => {
    setMessage("Also Loving React")
  }
  return (
    <div>
      <h1>{message}</h1>
      <button onClick={handleClick}>Click here</button>
    </div>
  )
}

export default Exam2
