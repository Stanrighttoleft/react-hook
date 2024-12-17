import { useState } from 'react'
import Usestate from './component/usestate'
import Useeffect from './component/useeffect'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>

        <Usestate/>
        <Useeffect/>

        
      
        
      </div>
      
      </>
  )
}

export default App
