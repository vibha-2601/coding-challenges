// when we write the text in input field it display on screen.

import React, { useState } from 'react'

const Exam1 = () => {
    const [text, setText] = useState("");

    const onChange = (e) => {
        let newVal = (e.target.value);
        setText(newVal);
    }

  return (
    <div>
       <input type="text"  placeholder="Type something here...." onChange={onChange}  />
      <h1>{text}</h1>
    </div>
  )
}

export default Exam1
