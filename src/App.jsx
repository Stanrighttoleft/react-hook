import { useState } from 'react'
import Usestate from './component/usestate'
import Useeffect from './component/useeffect'
import Useref1 from './component/useref1'
import Useref2 from './component/useref2'
import Usememo from './component/usememo'
import Usememo1 from './component/usememo1'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>

        <Usestate/>
        <Useeffect/>
        <Useref1/>
        <Useref2/>
        <Usememo/>
        <Usememo1/>

        
      
        
      </div>
      
      </>
  )
}

export default App
