/*Importar los modulos*/


import React from 'react';
import PokeTable from './PokeTable';
import PokeChat from './PokeChat';

export default class PokeApp extends React.Component {

	constructor(props){
		super(props);
		this.state = {messages : [] };
		this.Click = this.Click.bind(this);
	}

	Click (name) {
		let text =`${name}, ${name}!`;
		this.state.messages.push({text : text});
		let msj = this.state.messages;
		this.setState({messages : msj});
		console.log("click");
	}

	render(){

	  let pokemons = [
	      { number: 1, name: 'Bulbasaur' },
	      { number: 2, name: 'Ivysaur' },
	      { number: 3, name: 'Venusaur' }
      ]; 

      return <div className ="pokeapp">
      	<PokeTable pokemons={pokemons} Click={this.Click}/>
      	<PokeChat messages={this.state.messages}/>
      </div>
		
	}

	
}