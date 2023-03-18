// useState with an object.

import React, { useState } from 'react'

const Exam7 = () => {
    const [name, setName] = useState({ firstName:'', lastName: ''})

  return (
    <div>
      <form>
        <input 
        type='text'
        value={name.firstName}
        onChange={(e) => setName({...name, firstName: e.target.value})}
        />

        <input 
        type='text'
        value={name.lastName}
        onChange={(e) => setName({...name, lastName: e.target.value})}
        />

        <h1>Your firstname is: {name.firstName}</h1>
        <h1>Your lastname is: {name.lastName}</h1>

      </form>
    </div>
  )
}

export default Exam7
