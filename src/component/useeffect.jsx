import React,{useEffect, useState} from 'react'

const Useeffect = () => {
    const [count, setCount]=useState(0);
    
    useEffect(()=>{
        setTimeout(()=>{
            setCount(count=>count+1)

        },2000)

    //when put [count] at the dependance, as long as count change the useEffect will be triger again
    //the reason the page not start from 0->1 is because the react will run this program once before showing the page
    },[count])


  return (
    <div>
        <h1>The page has rendered {count} times</h1>

    </div>
  )
}

export default Useeffect