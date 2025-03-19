import React, { useState } from 'react'
import Child from './Child.jsx';
import './Lab3.css';

const Lab3 = () => {
  const [name, setName] = useState("n1");
  const [salary, setSalary] = useState(0);
  const [location, setLocation] = useState("l1");
  const changeUser = (n, s, l) => {
    setName(n);
    setSalary(s);
    setLocation(l);
  };

  return (
    <div>
      <div className="user-info">
        <h3>User Information</h3>
        Name: {name} <br />
        Salary: {salary}
        <br />
        Location: {location}
      </div>
      <br /><br /><br />
      <Child changeUser={changeUser}/>
    </div>
  )
}

export default Lab3