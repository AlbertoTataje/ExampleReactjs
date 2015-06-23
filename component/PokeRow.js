/**importar modulos y dependencias*/

import React from 'react'
import PokeAvatar from './PokeAvatar'

export default class PokeRow extends React.Component {

	onClick (ev){
		//funcion pasada x el Poketable 
		this.props.click.call (null, this.props.name);
	}

  render() {
    return <li className="pokerow"  onClick ={this.onClick.bind(this)} >
      <PokeAvatar number={this.props.number} />
      {this.props.name}
    </li>
  }
}

//onClick ={this.onClick.bind(this)}    para llamar al metodo click
