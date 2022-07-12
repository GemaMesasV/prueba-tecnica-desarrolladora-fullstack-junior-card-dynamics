import '../styles/App.scss';
import React, {useState, useCallback} from "react";
import {throttle} from "lodash";


function App() {

const [food, setFood] = useState("");
const [beers, setBeers] = useState([]);




const fetchApi = (comida) => {
	if (comida) {
		fetch(`https://api.punkapi.com/v2/beers?food=${comida}`)
  .then(response => response.json())
  .then(data => setBeers(data));
	}
}

const throttleFetch = useCallback(throttle(fetchApi, 1000, {leading: false}), [])

const handleInput = (e) => {
  setFood(e.target.value)
	throttleFetch(e.target.value)
}

console.log(beers);

  return (
    <div>
      <h1>Buscador de comida</h1>
      <input type="text" value={food} onChange={handleInput}/>
			<ul>
				{beers.map(beer => (
					<li>
						<div>{beer.name}</div>
						<img src={beer.image_url || "https://user-images.githubusercontent.com/24848110/33519396-7e56363c-d79d-11e7-969b-09782f5ccbab.png"}/>
					</li>
				))}
			</ul>
    </div>
  );
}

export default App;