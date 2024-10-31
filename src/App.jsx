import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import VendingMachine from "./VendingMachine";
import Chips from "./Chips";
import Soda from "./Soda";
import Candy from "./Candy";

function App() {
	return (
		<div className='App'>
			<Routes>
				<Route path='/' element={<VendingMachine />} />
				<Route path='/chips' element={<Chips />} />
				<Route path='/soda' element={<Soda />} />
				<Route path='/candy' element={<Candy />} />
			</Routes>
		</div>
	);
}

export default App;
