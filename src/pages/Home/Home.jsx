import React, {useState} from "react";

export default function Home() {
  const [count,setCount] = useState(0)
  const [name,setName] = useState({fname:"",lname:""})
  const [items, setItems] = useState([])
  const incr = () => {
    setCount(count+1)
  }

  const addItems = () => {
    setItems([...items,{
      id: items.length,
      title: "item"+items.length
    }])
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
      <hr />
      <button onClick={addItems}>Add Items</button>
      <ul>
        {items.map(item => (
          <li key={item.id}>{item.title}</li>
  ))}
      </ul>
      {/* <pre>{JSON.stringify(items)}</pre> */}
    </div>
  )
}