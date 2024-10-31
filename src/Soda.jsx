import React from "react";
import { Link } from "react-router-dom";
import "./Snack.css";

function Soda() {
	return (
		<div className='Snack'>
			<h1>Soda</h1>
			<p>Refreshing and fizzy! Enjoy a cold soda.</p>
			<Link to='/'>Go back</Link>
		</div>
	);
}

export default Soda;
