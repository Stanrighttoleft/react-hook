import React, { useContext } from 'react'
import { Appcontext } from './context/appcontext'

const Usecontextcontact = () => {

    const {phone, name}=useContext(Appcontext)
  return (
    <div>
        <h2>usecontext demo contact</h2>
        <h3>Phone: {phone}</h3>
        <h3>Name: {name}</h3>


    </div>
  )
}

export default Usecontextcontact