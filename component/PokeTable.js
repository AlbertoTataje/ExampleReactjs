import React from 'react';
import PokeRow from './PokeRow';

export default class PokeTable extends React.Component {
 
 constructor(props){
  super(props);
 }

  render() {

    return <ul className="poketable">
      {
        this.props.pokemons.map ( (pokemon) => {
          
          return <PokeRow 
                  key= {pokemon.number}
                  name={pokemon.name} 
                  number={pokemon.number} 
                  click = {this.props.Click} />
        })
      }
    </ul>
  }
}
//click funcion recuperada de PokeApp y pasada a PokeRow