import '../styles/App.scss';
import "../styles/Reset.scss";
import "../styles/Main.scss";

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
      <h1 className='title'>Buscador de combinaciones para encontrar la combinación culinaria perfecta</h1>
	  <h2 className='subtitle'>Edición: Cerveza y comida</h2>
	  <p className='explanation'>Busca aquí tu comida (en inglés) y te mostraremos cuales son las cervezas que mejor le acompañan.</p>
      <div className='search-section'>
		<input className='search-section__input' type="text" placeholder="Por ejemplo: sushi" value={food} onChange={handleInput}/>
			<ul className='search-section__list'>
				{beers.map(beer => (
					<li className='search-section__list-item' key={beer.id}>
						<div>{beer.name}</div>
						<img className='img' src={beer.image_url || require('../images/not-found.png')} alt="Imagen no encontrada"/>
					</li>
				))}
			</ul>
			</div>
			<p className='explanation'>Y recuerda... Si bebes ¡no conduzcas!</p>
    </div>
  );
}

export default App;