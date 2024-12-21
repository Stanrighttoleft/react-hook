import React,{useRef, useState,useEffect, useReducer} from 'react'
import { useActionState } from 'react'



const Usereducer1 = () => {
    const initialstate={count:0}
    const reducer=(state, action)=>{
        switch(action.type){
            case 'increase' : {
                return {count: state.count+1}

            }
            case 'decrease' : {
                return {count: state.count-1}

            }
            case 'input' : {
                return {count: action.payload}

            }
            default:{
                return state
            }
        }
        
    }
    const [state, dispatch]=useReducer(reducer, initialstate)
    

   
  return (

    <div>
        <button onClick={()=>dispatch({type:'decrease'})}>-1</button>
        <h1>The Valuse will be: {state.count}</h1>
        <button onClick={()=>dispatch({type:'increase'})}>+1</button>
        <br/>
        <input value={state.count}
        onChange={(e)=>dispatch({type:'input', payload:Number(e.target.value)})} type="number"/>

        
    </div>
  )
}

export default Usereducer1