/*IMportar las dependencias*/


import Ract from 'react';

export default class PokeMessage extends React.Component {

	render() {
    return <li className="pokemessage">{this.props.message.text}</li>
}