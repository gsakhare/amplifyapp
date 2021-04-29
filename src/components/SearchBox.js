import React from 'react';

const SearchBox = ({searchChange}) => {
	return(
		<div className='pa2'>
		  <input className='pa2 ba b--white bg-lightest-green' type='search' placeholder='Search Employee' onChange={searchChange} />
		</div>
		);
}

export default SearchBox;