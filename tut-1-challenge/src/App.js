
import { useState } from 'react';
import './App.css';
import Square from './Square';
import { Input } from './Input';

function App() {
  const [colorName, setcolorName] = useState('')
  const [hexValue, sethexValue] = useState('')
  const [isDarkText, setisDarkText] = useState(true)


  return (
    <main className="App">
        <Square 
          colorName={colorName}
          hexValue={hexValue}
          isDarkText={isDarkText}
          />
        <Input 
          colorName={colorName}
          setcolorName={setcolorName}
          isDarkText={isDarkText}
          setisDarkText={setisDarkText}
          sethexValue={sethexValue}
          />
    </main>
  );
}

export default App;
