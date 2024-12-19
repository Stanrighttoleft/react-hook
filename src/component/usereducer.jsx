import React,{useRef, useState,useEffect, useReducer} from 'react'
import { useActionState } from 'react'



const Usereducer = () => {
    const initialstate={count:0}
    const reducer=(state, action)=>{
        return {count:state.count+1}
    }
    
    const [state, dispatch]=useReducer(reducer, initialstate)

   
  return (

    <div>
        <button onClick={()=>dispatch()}>-1</button>
        <h1>The Valuse will be: {state.count}</h1>
        <button onClick={()=>dispatch()}>+1</button>
        
    </div>
  )
}

export default Usereducer