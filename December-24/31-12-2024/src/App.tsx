import { useState } from 'react'
import './App.css'
import { Button } from '@arin-paliwal/component-library-storybook'

function App() {
  const [count, setCount] = useState(0)

  return(
    <Button
    variant='primary'
    >
      Hello
    </Button>
    )
}

export default App
