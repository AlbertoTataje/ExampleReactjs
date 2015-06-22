
//importar los modulos 

import React from 'react';
import PokeMessage from './PokeMessage';

export default class PokeMessage extends React.Component {
	render(){
	 return <ul className="pokechat">
        {
        this.props.messages.map((message) => {
          return <PokeMessage message={message} />
        });
        }
    </ul>
	}
}
