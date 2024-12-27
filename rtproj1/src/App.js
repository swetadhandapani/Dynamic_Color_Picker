import Square from './Square'
import Input from './Input'
import { useState } from 'react'

function App() {
  const [colorValue, setColorValue] = useState('')
  const [hexValue, setHexValue] = useState('')
  const [isDarkText, setIsDarkText] = useState(true)


  return(
    <div className="App">
      <Square 
        colorValue={colorValue} 
        hexValue={hexValue}  
        isDarkText={isDarkText} 
      />
      <Input 
        colorValue={colorValue} 
        setHexValue={setHexValue} 
        isDarkText={isDarkText} 
        setColorValue={setColorValue}
        setIsDarkText={setIsDarkText}
      />
  
    </div>
  );
}

export default App;
