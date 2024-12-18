import React, {useState, useMemo} from 'react'

const Usememo = () => {

    const [number, setNumber]=useState(0)
    const [counter, setCounter]=useState(0)

    function cubenum(num){
        console.log('caculation done!')
        return Math.pow(num,3)
    }
    const result=cubenum(number)
  return (
    <div>
        <input type="number" value={number} onChange={(e)=>{setNumber(e.target.value)}} />
        <h1>Cube of the number: {result}</h1>
        <button onClick={()=>{setCounter(counter+1)}}>Counter ++</button>
        <h1>Counter: {counter}</h1>
    </div>
  )
}

export default Usememo