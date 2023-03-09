
import { useState } from 'react';
import './App.css';
import Clickers from './Component/Clickers';
import Navbar from './Component/Navbar';
import Button from './Component6/Button';
import Input from './Component6/Input';
import Users from './Component6/Users';
import FetchUserData from './Component7/FetchUserData';
import PokemonList from './Component7/PokemonList';
import Searchapp from './Component8/Searchapp';
import Storiesurl from './Component8/Storiesurl';
import { SearchBox } from './Component9/SearchBox';

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
   {/* <Users /> */}

   {/* <FetchUserData /> */}

   {/* <PokemonList /> */}


   {/* 09/03/23 */}

   {/* <Searchapp /> */}

    {/* Pending <Storiesurl /> */}

     <SearchBox requestSearch={console.log} />

    </div>
  );
}

export default App;
