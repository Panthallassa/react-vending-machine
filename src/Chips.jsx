import React from "react";
import { Link } from "react-router-dom";
import "./Snack.css";

function Chips() {
	return (
		<div className='Snack'>
			<h1>Chips</h1>
			<p>Crunchy and salty, perfect for a snack!</p>
			<Link to='/'>Go back</Link>
		</div>
	);
}

export default Chips;
