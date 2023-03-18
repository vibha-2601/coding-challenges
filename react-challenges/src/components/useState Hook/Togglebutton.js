import React, {useState} from 'react';

const Togglebutton = () => {
    const [isOn, setIsOn] = useState(false);

    const handleToggle = () => {
        setIsOn(!isOn);
    }

  return (
    <div>
      <button onClick={handleToggle}>{isOn ? "ON" : "OFF"}</button>
    </div>
  )
}

export default Togglebutton
