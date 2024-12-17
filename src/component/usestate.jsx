import {React,useState} from 'react'
import './usestate.css'


const Usestate = () => {

    const [car, setCar]=useState({
        brand: "Ferrari",
        model:"Roma",
        year:"2023",
        color:"red"
    });  
    

    const [count, setCount]=useState(0);

    const changecolor=()=>{
        setCar((car)=>{
            return{...car, color:"blue"}
        })
    }
    const changered=()=>{
        setCar((car)=>{
            return{...car, color:"red"}
        })
    }
    const countnumber=()=>{
        setCount(count+1)
    }
    const reset=()=>{
        setCount(0);
    }
  return (

    
    <div>
        <h1>My {car.brand}</h1>
        <h2>It is {car.color} {car.model} from {car.year}</h2>
        <h3>You have pressed {count} times</h3>
        <div className="colorbutton">
            <button onClick={()=>{changecolor(); countnumber()}}>Blue</button>
            <button onClick={reset}>Reset</button>   

            <button onClick={()=>{changered();countnumber()}}>Red</button>
                 
        </div>
       
        
    </div>
  )
}

export default Usestate