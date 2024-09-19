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

function App() {
	const coords = [{ DEU: "10.451526 51.165691" }];
	const highlighted = [
		"BRA",
		"VNM",
		"COL",
		"IDN",
		"ETH",
		"HND",
		"IND",
		"UGA",
		"MEX",
	];
	const [currentCountry, setCurrentCountry] = useState("");
	const [coord, setCoord] = useState({
		center: [0, 0],
		zoom: 1,
		currentCountry: null,
	});
	const [count, setCount] = useState(0);

	const selectCountry = (geo) => {
		// alert(geo.id);
		console.log(geo);
		console.log(geo.id);
		console.log(geo.properties.name);
		console.log(geo.geometry.coordinates);
		setCurrentCountry(geo.id);
	};

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
			<h1>Vite + React</h1>
			<div className="card">
				<button onClick={() => setCount((count) => count + 1)}>
					count is {count}
				</button>
				<p>
					Edit <code>src/App.jsx</code> and save to test HMR
				</p>
			</div>
			<p className="read-the-docs">
				Click on the Vite and React logos to learn more
			</p>
			<ComposableMap
				className="map-container"
				projectionConfig={{
					// rotate: [-10.0, -52.0, 0],
					center: [2, 46],
					scale: 1100,
				}}
			>
				{/* {console.log("something")} */}
				<Geographies className="map" geography="/features.json">
					{({ geographies }) =>
						geographies.map(
							(geo) => (
								// <div key={geo.rsmKey}>
								// console.log(geo.rsmKey) || (
								<Geography
									className={geo.id == currentCountry ? "--active" : "country"}
									key={geo.rsmKey}
									geography={geo}
									fill="#F6F0E9"
									onClick={() => selectCountry(geo)}
								/>
							)
							// {geo.id === currentCountry ? "url('#lines')" :
							// )
							// </div>
						)
					}
				</Geographies>
				{/* <Annotation
					subject={[2.3522, 48.8566]}
					dx={-90}
					dy={-30}
					connectorProps={{
						stroke: "#FF5533",
						strokeWidth: 3,
						strokeLinecap: "round",
					}}
				>
					<text x="-8" textAnchor="end" alignmentBaseline="middle" fill="#F53">
						{"Paris"}
					</text>
				</Annotation> */}
			</ComposableMap>
		</>
	);
}

export default App;
