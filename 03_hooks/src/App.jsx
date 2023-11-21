import { useState } from 'react'

function App() {
  let [count, setCounter] = useState(15);

  const addValue = () => {
    if(count===20)return;
    count = count + 1;
    setCounter(count);
  }
  
  const removeValue = () => {
    if(count===0)return;
    count = count - 1;
    setCounter(count);
  }

  return (
    <>
      <h1>Chai aur React</h1>
      <h2>count value: {count}</h2>
      <button onClick={addValue}>Add Value {count}</button>
      <br />
      <button onClick={removeValue}>Remove Value {count}</button>
      <p>Your Count value is {count}</p>
    </>
  )
}

export default App
