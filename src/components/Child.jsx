import React from 'react'
import { useState } from 'react';

const Child = ({changeUser }) => {
    const [inputName, setInputName] = useState("");
    const [inputSalary, setInputSalary] = useState("");
    const [inputLocation, setInputLocation] = useState("");
   const changeFun = () => {
      changeUser(inputName, inputSalary, inputLocation);
    };

  return (
    <div className="update-form">
        <h3>Update User Information</h3>
            Name: <input type="text" value={inputName} onChange={(e) => setInputName(e.target.value)} />
            <br />
            Salary: <input type="text" value={inputSalary} onChange={(e) => setInputSalary(e.target.value)} />
            <br />
            Location: <input type="text" value={inputLocation} onChange={(e) => setInputLocation(e.target.value)} />
            <br />
            <button onClick={changeFun}>Update User</button>
            <br />
            
    </div>
  )
}

export default Child