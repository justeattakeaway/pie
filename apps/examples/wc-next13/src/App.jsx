import './App.css'
import { PieButton } from "@justeattakeaway/pie-webc/react/button.js";
import '@justeattakeaway/pie-css';

function App() {
  return (
      <>
          <div className="App">
              <PieButton size='large'>WC Button in NextJS!</PieButton>
              <PieButton variant='secondary'>WC Button in NextJS!</PieButton>
              <PieButton disabled>WC Button in NextJS!</PieButton>
          </div>
      </>
  )
}

export default App
