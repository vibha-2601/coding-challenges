// delete items by value

// import React, { useState } from 'react'

// const Exam6 = () => {
//     const [fruits, setFruits] = useState([
//         "Apple",
//         "Oranges",
//         "Peru",
//         "Watermelon",
//     ])

//     const deleteByValue = value => {
//         setFruits(oldValues => {
//             return oldValues.filter(fruit => fruit !== value)
//         })
//     }
//   return (
//     <div>
//       <ul>
//         {
//             fruits.map(fruit => {
//                 return (
//                     <li key={fruit}>
//                      {fruit}
//                      <button onClick={() => deleteByValue(fruit)}>
//                         Delete
//                      </button>
//                     </li>
//                 )
//             })
//         }
//       </ul>
//     </div>
//   )
// }

// export default Exam6

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// we have duplicate values of fruits then delete by array index.
// import React, { useState } from 'react'

// const Exam6 = () => {
//     const [fruits, setFruits] = useState([
//         "Apple",
//         "Apple",
//         "Peru",
//         "Watermelon",
//     ])

//     const deleteByIndex = index => {
//         setFruits(oldValue => {
//             return oldValue.filter((_,i) => i !== index)
//         })
//     }

//   return (
//     <div>
//       <ul>
//         {
//             fruits.map((fruit,index) => {
//                 return (
//                     <li key={fruit}>
//                         {fruit}
//                         <button onClick={() => deleteByIndex(index)}>Delete</button>
//                     </li>
//                 )
//             })
//         }
//       </ul>
//     </div>
//   )
// }

// export default Exam6

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 3) If you have an array of objects and you want to delete them based on the id of the object

// import React, { useState } from 'react'

// const Exam6 = () => {
//     const [fruits, setFruits] = useState([
//     { id: 1, name: "🍎 Apple" },
//     { id: 2, name: "🍊 Orange" },
//     { id: 3, name: "🍌 Banana" },
//     { id: 4, name: "🍇 Grapes" },
//     ])

   

//     const deleteById = id => {
//         setFruits(oldValue => {
//             return oldValue.filter(fruit => fruit.id !== id)
//         })
//     }
//   return (
//     <div>
//         <ul>
            
//             {
//                 fruits.map(fruit => {
//                     return (
//                         <li key={fruit.id}>{fruit.name}

//                         <button onClick={() => deleteById(fruit.id)}>Delete</button>

                          
//                         </li>
//                         )
//                 })
//             }
//         </ul>
//     </div>
//   )
// }

// export default Exam6

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////






