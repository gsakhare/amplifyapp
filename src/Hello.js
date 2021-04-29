import React, { Component } from 'react';
import './Hello.css';

class Hello extends Component{
	render(){
		return (
            <div>
            <h1>Hello World</h1>
            <h1>Welcome to React</h1>
            <p>Prop Name is {this.props.greeting}</p>
            </div>
            );
	}
}

export default Hello;