import React from "react";
import { Link } from "react-router-dom";
import "./Snack.css";

function Candy() {
	return (
		<div className='Snack'>
			<h1>Candy</h1>
			<p>Sweet and delicious! A tasty treat awaits.</p>
			<Link to='/'>Go back</Link>
		</div>
	);
}

export default Candy;
