import React from 'react';

const Scroll = (props) => {
	return (
		<div style={{ overflowY: 'scroll', border: '1px solid black', height: '800px'}}> 
	 	{props.children} 
	 	 </div>
	 	 );// before we were able to wrap lowercase components like h1 h2 ! but with children we can wrap also components like Scroll 
};// when we use css in a js file we use {{}} and instead of overflow-y in css we use overflowY
// and now we are able to scroll down and our SearchBox is still present all the way long
export default Scroll;