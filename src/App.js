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

        <Car 
           car_id={2}
           brand="BMW"
           serie="320i"
           origin="German"
           price={80000.00}          
        />     
        <Car 
           car_id={3}
           brand="Mercedes-Benz"
           serie="c180"
           origin="German"
           price={90000.00}          
        />

        <Car 
           car_id={4}
           brand="Volvo"
           serie="s60"
           origin="Sweden"
           price={78000.00}          
        />  
    </div>
  );
}

export default App;
