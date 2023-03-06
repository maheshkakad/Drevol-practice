
import { useState } from 'react';
import './App.css';
import Clickers from './Component/Clickers';
import Navbar from './Component/Navbar';
import Button from './Component6/Button';
import Input from './Component6/Input';
import Users from './Component6/Users';

function App() {

  const [showDiv , setShowDiv ] = useState("");

  let a = 5;
  let b = 5;
  return (
    <div className="App">
      {/* <Navbar />
        <h1>mahesh</h1>
        <h4>parent</h4>

        <h3 data-testid="mytestid"> hello there</h3>

         <div title="sum">{a+b}</div>


         //Clickers

         <Clickers /> */}
  
   {/* <Input showDiv={showDiv} />

   <Button /> */}
   <Users />

    </div>
  );
}

export default App;
