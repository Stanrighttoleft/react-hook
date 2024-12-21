import { useState, useCallback } from 'react'
import Usestate from './component/usestate'
import Useeffect from './component/useeffect'
import Useref1 from './component/useref1'
import Useref2 from './component/useref2'
import Usememo from './component/usememo'
import Usememo1 from './component/usememo1'
import Usecallback from './component/usecallback'
import Usecontextprofile from './component/usecontext-profile'
import Usecontextfooter from './component/usecontext-footer'
import Usereducer1 from './component/usereducer'
import Uselayouteffect from './component/uselayouteffect'


function App() {
  const [count, setCount] = useState(0);

  //set this function to useCallback, so it will not render the usecallback conponent again
  //when use useCallback, the function will save in catch, and the function will not change, so the page wont render the usecallback.jsx again
  //but if you put count into the function, when the count change, the page will get rendered. like this "const newfn=useCallback(()=>{},[])"
  const newfn=useCallback(()=>{},[])

  return (
    <>
      <div>

        <Usestate/>
        <Useeffect/>
        <Useref1/>
        <Useref2/>
        <Usememo/>
        <Usememo1/>
        <Usecallback newfn={newfn}/>

        <button onClick={()=>setCount(prev=>prev+1)}>Click Here</button>
        <p>this is the {count}</p>

        <Usecontextprofile/>
        <Usecontextfooter/>
        <Usereducer1/>
        <Uselayouteffect/>

        
      
        
      </div>
      
      </>
  )
}

export default App
