import './App.css';
import Navigation from './Navigation';
import { NextUIProvider } from "@nextui-org/react";


function App() {
  return (
    <NextUIProvider>

      <div className="poppins-regular App">
        <Navigation />
      </div>
    </NextUIProvider>
  );
}

export default App;
