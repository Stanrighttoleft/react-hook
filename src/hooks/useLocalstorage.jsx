import React,{useState, useEffect} from 'react'

const Uselocalstorage = (key, initialvalue) => {
    const [name, setName]=useState(
        localStorage.getItem(key)?
        localStorage.getItem(key):initialvalue
    );

    useEffect(()=>{
        localStorage.setItem(key,name)
    },[name,key])

  return [name, setName]
}

export default Uselocalstorage