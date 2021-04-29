import React from 'react';

const Card = (props) => {
	return(
		<div className ='bg-light-blue dib br2 pa2 ma2 grow bw2 shadow-5 card'>
		<img alt='robots' src={`https://robohash.org/${props.id}?50x50`} />	
			<div >			
			<h4>{props.name}</h4>
			<p>{props.email}</p>
			</div>
		</div>
		);
}

export default Card;