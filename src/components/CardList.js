import React from 'react';
import Card from './Card';
const CardList = ({ robots }) => {
	return (
	<div>
		{
    		robots.map((user, i) => {
				return ( 
		 			<Card
		  				key={i}
		  				id={robots[i].id} 
		  				name={robots[i].name} 
		  				email={robots[i].email} 
		  				/>
		 			);
				})
    	}
    </div>
    );
}

// about key : it's a special key!in react virtual DOM keeps trash of what our cards are ! but without
// having something called a key prop if some of these cards get deleted react won't know which one and it ll have to change
// the entire DOM vs if it had a key prop that says 'oh this one gets moved i can just move it from the DOM, remember it when u use the loop'

export default CardList;

