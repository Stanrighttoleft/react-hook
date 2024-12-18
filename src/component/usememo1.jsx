import React, {useState, useMemo} from 'react'

/*
fix the problem that evertime the counter or something change the page will be rendered and the other function will run again. useMemo can fix this problem.

*/

const Usememo1 = () => {

    const [number, setNumber]=useState(0)
    const [counter, setCounter]=useState(0)

    function cubenum(num){
        console.log('caculation done!')
        return Math.pow(num,3)
    }
    const result=useMemo(()=>{return cubenum(number)},[number])
    //can be reduce as const result=useMemo(()=>return cubenum(number),[number])
  return (
    <div>
        <input type="number" value={number} onChange={(e)=>{setNumber(e.target.value)}} />
        <h1>Cube of the number: {result}</h1>
        <button onClick={()=>{setCounter(counter+1)}}>Counter ++</button>
        <h1>Counter: {counter}</h1>
    </div>
  )
}

export default Usememo1