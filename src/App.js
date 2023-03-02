import React from 'react'
import Car from './components/Car';

function App() {
  return (
    <div className="App">
        <h1>Props in React</h1>

        <Car 
           car_id={1}
           brand="Toyota"
           serie="Corrola"
           origin="Japan"
           price={60000.00}          
        />
     
    </div>
  );
}

export default App;
