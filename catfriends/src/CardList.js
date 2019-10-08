import React from 'react';
import Card from './Card';

const CardList = ({cats}) => {
	return(

				<div>
					<Card id={cats[0].id} name={cats[0].name} email={cats[0].email}/>
				</div>	

	);
}

export default CardList;