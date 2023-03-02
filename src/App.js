import logo from './logo.svg';
import './App.css';

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
