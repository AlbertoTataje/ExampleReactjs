/*Importar los modulos*/


import React from 'react';

export default class PokeApp extends React.Component {

	constructor(props){
		super(props);
	}

	render(){

	  var pokemons = [
	      { number: 1, name: 'Bulbasaur' },
	      { number: 2, name: 'Ivysaur' },
	      { number: 3, name: 'Venusaur' }
      ]; 

      return <div className ="pokeapp">
      	<pokeTable pokemons={pokemons}/>
      </div>
		
	}
}