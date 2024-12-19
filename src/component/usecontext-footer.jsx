import React, { useContext } from 'react'
import { Appcontext } from './context/appcontext'

const Usecontextfooter= () => { 

  const {phone, name}= useContext(Appcontext);
  return (
    <div>
        <h2>useContext demo footer</h2>
        <h3>Phone: {phone}</h3>
        <h3>Name: {name}</h3>
    </div>
  )
}

export default Usecontextfooter