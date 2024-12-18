import React, { useRef } from 'react'
import './useref2.css'

const Useref2 = () => {

    const inputelem=useRef();
    const btnclick=()=>{
        console.log(inputelem.current);
        inputelem.current.style.background="red";
    }
    const btnclickback=()=>{
        console.log(inputelem.current);
        inputelem.current.style.background="white";
    }
  return (
    <div className="wrap">
   
        <input type="text" ref={inputelem}/>
        <button onClick={btnclick}>Click Here</button>
        <button onClick={btnclickback}>Reset</button>
    </div>
    
  )
}

export default Useref2