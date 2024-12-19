import React, {useState} from 'react'

const Usecallback = () => {

    

    console.log("Header Render")
  return (
    <div>
        
        <h2>Header</h2>
    </div>
  )
}
//this used to stop this componet to keep render when use some hook in the App.jsx file.
export default React.memo(Usecallback)