import { useState } from "react";
import "./App.css";
import { Button } from "@arin-paliwal/custom-library-button";
function App() {
  const [count, setCount] = useState(0);

  return(
    <div>
      <Button variant="primary">
        Hello World
      </Button>
    </div>
  )
}

export default App;
