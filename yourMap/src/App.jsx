import { useState } from "react";
import "./App.scss";

import Map from "./components/Map/Map";
import Persons from "./components/Persons/Persons";

function App() {
	const [currentCountry, setCurrentCountry] = useState("");

	// const [people, selectPeople] = useState(["Alicia, Katarina, Tami"]);
	// const [flag, setFlag] = useState(false);
	// const selectCountry = (geo) => {
	// 	// alert(geo.id);
	// 	// console.log(geo);
	// 	console.log(geo);
	// 	console.log(geo.properties.name);
	// 	// console.log(geo.geometry.coordinates);
	// 	setCurrentCountry(geo.properties.name);
	// 	console.log(flag);
	// 	// alert(geo.properties.name);
	// 	flag
	// 		? selectPeople(["Justin, Henry, Emma"])
	// 		: selectPeople(["Jenani, Mingxia, Heela"]);
	// 	setFlag(!flag);
	// 	if (geo.id == "BRA" || geo.id == "AUS") {
	// 		selectPeople(["none"]);
	// 	}
	// };

	return (
		<>
			<Map
				className="map-container"
				currentCountry={currentCountry}
				setCurrentCountry={setCurrentCountry}
			></Map>
			<Persons currentCountry={currentCountry}></Persons>
			{/* <div className="card">placeholder navbar</div> */}
		</>
	);
}

export default App;
