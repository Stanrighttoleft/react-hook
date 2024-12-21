import React,{useEffect, useState} from 'react'
import Uselocalstorage from '../hooks/useLocalstorage'

const Custom = () => {

    const [name, setName]=Uselocalstorage('username','')
    const [id, setId]=Uselocalstorage('userid','')

    
  return (
    <div>
        <input type="text" placeholder="Enter your name" value={name} onChange={(e)=>setName(e.target.value)}/>
        <h2>Hello, {name}!</h2>

        <input type="text" placeholder="Enter your name" value={id} onChange={(e)=>setId(e.target.value)}/>
        <h2>Your ID: {id}</h2>

    </div>
  )
}

export default Custom