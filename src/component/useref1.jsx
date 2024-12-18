import React,{useRef, useState,useEffect} from 'react'
import './useref1.css'

const Useref1 = () => {
    const [value,setValue]=useState(0)
    const count=useRef(0);

    useEffect(()=>{
        count.current=count.current+1;
       
    });
  return (

    <div>
        <button onClick={()=>{setValue(prev=>prev-1)}}>-1</button>
        <h1>Render count: {count.current}</h1>
        <h1>The Valuse will be: {value}</h1>
        <button onClick={()=>{setValue(prev=>prev+1)}}>+1</button>
        
    </div>
  )
}

export default Useref1