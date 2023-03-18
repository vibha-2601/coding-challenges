// Toggle theme 

import React, { useState } from 'react'

const Exam4 = () => {
    const [darkTheme, setDarkTheme] = useState(false);

    const handleClick = () => {
        setDarkTheme(!darkTheme);
    }

   const theme = {
        darkTheme: {
            backgroundColor: 'black',
            color: 'gray',
        },

        lightTheme: {
            backgroundColor: 'gray',
            color: 'white',
        }
    }
  return (
    <>
     Enable Dark Theme:
     <input type="checkbox" onClick={handleClick}/> 
     
     <div style={darkTheme ? theme.darkTheme : theme.lightTheme}>
        <h1>useState hook</h1>
        <p>
            useState Hook are used in functional components.
        </p>
     </div>
    </>
  )
}

export default Exam4