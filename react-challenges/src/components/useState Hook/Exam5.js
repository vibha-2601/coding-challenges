// useState with an array

// 1) when we click on button make an random number.
// import React, { useState } from 'react'

// const Exam5 = () => {
//     const [items, setItems] = useState([]);
   

//     const addItems = () => {
//         setItems([...items, {
//             id: items.length,
//             value: Math.floor(Math.random() * 10) + 1
//         }])
//     }

//   return (
//     <div>
//         <button onClick={addItems}>Add Numbers</button>
//       <ul>
//         {
//             items.map(item => (
//                  <li key={item.id}>{item.value}</li>
//             ))
//         }
//       </ul>
//     </div>
//   )
// }

// export default Exam5

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 2) when click on add button add the items.

// import React, { useState } from 'react'

// const Exam5 = () => {
//     const [text, setText] = useState('');
//     const [items, setItems] = useState([]);

//     const addItems = () => {
//         setItems([...items, {
//             id: items.length,
//             name: text,
//         }])
//         setText('');
//     }

//   return (
//     <div>
//     <input 
//     type="text" 
//     value={text} 
//     onChange={e => setText(e.target.value)} />

//     <button onClick={addItems} >Add Items</button>
//     <ol>
//           {
//         items.map(item => (
//             <li key={item.id}>{item.name}</li>
//         ))
//     }
//     </ol>
  
//     </div>
//   )
// }

// export default Exam5

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 3) value is even or odd.

import React, { useState } from 'react'

const Exam5 = () => {
  const [click, setClick] = useState(5);

  const handleClick = () => {
    setClick(click + 1);
  }

  return (
    <div>
      <p>You've clicked {click} times!</p>

      <p>The number of times you have clicked is {click%2==0 ? "Even" : "Odd"}</p>

      <button onClick={handleClick}>Click Me</button>
    </div>
  )
}

export default Exam5

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
