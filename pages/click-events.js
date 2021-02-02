import { useState } from 'react';
const clickEvents = () => {

  const handleClickOne = () => {
    console.log("hello ninjas");
  }
  const handleClickTwo = (e) => {
    console.log("hello ninjas", e); //
  }
  const handleClickThree = (e) => {
    console.log("hello ninjas", e.timeStamp);
  }


  const [name, setName] = useState('mario');
  const [age, setAge] = useState(25);
  const handleClickFour = () => {
    setName('luigi')
    setAge(30)
  }
  const handleClickAgain = (name, e) => {
    console.log('hello ' + name, e.target);
  }

  return (
    <div>
      <h1>Click Events</h1>

      <button onClick={handleClickOne}>Click me</button><br /><br />
      <button onClick={handleClickTwo}>Click me</button><br /><br />
      <button onClick={handleClickThree}>Click me</button><br /><br />
      <p>{name} is {age} years old</p>
      <button onClick={handleClickFour}>Click me</button><br /><br />
      <button onClick={(e) => handleClickAgain('mario', e)}>Click me again</button>
    </div>
  );
}

export default clickEvents;