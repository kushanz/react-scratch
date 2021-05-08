import React, {useState,useEffect} from "react"

export default function Peoples() {
  const [count, setCount] = useState(0)

  const counterInc = () => {
    setCount(count+ 1)
  }
  useEffect(() => {
    document.title = `click Me ${count}`
  })
  return (
    <div>
      <h1>Loading Peoples</h1>
      <button onClick={counterInc}>Click Me </button>
    </div>
  ) 
}