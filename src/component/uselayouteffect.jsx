import React,{useLayoutEffect, useEffect} from 'react'

const Uselayouteffect = () => {

    useEffect(()=>{
        console.log('Message from useeffect');
    },[])

    useLayoutEffect(()=>{
        console.log('Message from useLayoutEffect');
    },[])

  return (
    <div>
      <h2>Test Message</h2>
        

    </div>
  )
}

export default Uselayouteffect