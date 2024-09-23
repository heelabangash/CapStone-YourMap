import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import {
	ComposableMap,
	Geographies,
	Annotation,
	Geography,
} from "react-simple-maps";
import Map from "./components/Map/Map";
function App() {
	// const coords = [{ DEU: "10.451526 51.165691" }];
	// const highlighted = [
	// 	"BRA",
	// 	"VNM",
	// 	"COL",
	// 	"IDN",
	// 	"ETH",
	// 	"HND",
	// 	"IND",
	// 	"UGA",
	// 	"MEX",
	// ];
	// const [currentCountry, setCurrentCountry] = useState("");
	// const [hoverCountry, setHoverCountry] = useState("");

	// const [coord, setCoord] = useState({
	// 	center: [0, 0],
	// 	zoom: 1,
	// 	currentCountry: null,
	// });
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
	// const showCountry = (geo) => setHoverCountry(geo.properties.name);
	// const hideCountry = () => setHoverCountry("");

	return (
		<>
			<div>
				<a href="https://vitejs.dev" target="_blank">
					<img src={viteLogo} className="logo" alt="Vite logo" />
				</a>
				<a href="https://react.dev" target="_blank">
					<img src={reactLogo} className="logo react" alt="React logo" />
				</a>
			</div>
			<h1 className="logo">yourMap</h1>

			<Map></Map>
			<div className="card">placeholder navbar</div>
		</>
	);
}

export default App;
