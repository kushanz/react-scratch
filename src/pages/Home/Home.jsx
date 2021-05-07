import React, {useState} from "react";

export default function Home() {
  const [count,setCount] = useState(0)
  const [name,setName] = useState({fname:"",lname:""})
  const incr = () => {
    setCount(count+1)
  }
  return (
    <div>
      <h2>This is Home page</h2>
      <h2>{ count }</h2>
      <button onClick={incr}>Content</button>
      <p>
        <input type='text' value={name.fname} onChange={e => setName({...name,fname:e.target.value})} /> 
        <input type='text' value={name.lname} onChange={e => setName({...name,lname:e.target.value})} /> 
      </p>
      <p>{JSON.stringify(name)}</p>
    </div>
  )
}