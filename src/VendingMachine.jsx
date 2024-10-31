import React from "react";
import { Link } from "react-router-dom";
import "./VendingMachine.css";

function VendingMachine() {
	return (
		<div className='VendingMachine'>
			<h1>Welcome to the Vending Machine!</h1>
			<p>Select a snack:</p>
			<ul>
				<li>
					<Link to='/chips'>Chips</Link>
				</li>
				<li>
					<Link to='/soda'>Soda</Link>
				</li>
				<li>
					<Link to='/candy'>Candy</Link>
				</li>
			</ul>
		</div>
	);
}

export default VendingMachine;
