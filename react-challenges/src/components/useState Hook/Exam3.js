//1) simple show/hide component
// import React, { useState } from 'react'

// const Exam3 = ({text}) => {
//     const [hidden, setHidden] = useState(false);

//     const handleClick = () => {
//         setHidden(!hidden)
//     }
//   return (
//     <div>
//       <button onClick={handleClick}>{hidden ? 'Show' : 'Hide'}</button>
//       {hidden && <p>{text}</p>}
//     </div>
//   )
// }

// export default Exam3



//4) show/hide component = This example is a component that displays some text with a “read more” link at the end, and will expand to show the rest of the text when the link is clicked.

import React, { useState } from 'react'

const Exam3 = ({ text, maxLength }) => {
    const [hidden, setHidden ] = useState(true);

    if (text.length <= maxLength) {
        return <p>{text}</p>
    }

  return (
    <div>
      {hidden ? `${text.substr(0, maxLength).trim()}...` : text}
      {hidden ? (
        <a onClick={() => setHidden(false)}>Read More</a>
      ) : (
        <a onClick={() => setHidden(true)}>Read Less</a>
      )}
    </div>
  )
}

export default Exam3


