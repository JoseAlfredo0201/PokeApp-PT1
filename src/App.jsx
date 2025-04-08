import { use, useEffect, useState } from 'react'
import "./App.css";
import Actions from "./game/buttons/Actions.jsx";
import Pad from "./game/buttons/Pad.jsx";
import StartSelect from "./game/buttons/StartSelect.jsx";
import Screen from "./game/screen.jsx";
function App() {
  const [pokemones, setPokemones] = useState([]);

  const Base_URL = "https://pokeapi.co/api/v2/";

const getPokemones = async() => {
  const res =  await fetch(`${Base_URL}pokemon?limit=10`);
  const data = await res.json();
  console.log(data);
  const pokemonsDetails = await getDetails(data.results);
  setPokemones(pokemonsDetails);
}

const getDetails = async (results) => {
    const res = await Promise.all(results.map((result) => fetch(result.url)));
    const data = await Promise.all(res.map(gato => gato.json()) );
    return data;
}

const handlePress = (direction) => {
  console.log(direction);
}

  useEffect(() => {
    getPokemones();
  }
    , []);



  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {/* container game */}
        <div
          style={{ width: "420px", height: "600px", border: "2px solid black", borderRadius: "5px 5px 35px 10px"}}
        >
          {/* container screen */}
          <Screen pokemones = {pokemones} />
          {/* container buttons */} 
          <div style ={{display: "flex", justifyContent: "space-around"}}>
            <Pad handlePress = {handlePress}/>
            <StartSelect />
            {/* A B buttons */}
            <Actions />
          </div>
            
        </div>
      </div>
    </>
  );
}

export default App;
