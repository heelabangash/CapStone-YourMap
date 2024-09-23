import { useState } from "react";
import "./Map.scss";
import {
	ComposableMap,
	Geographies,
	Annotation,
	Geography,
	ZoomableGroup,
} from "react-simple-maps";
import reactLogo from "../../assets/react.svg";
import viteLogo from "/vite.svg";

function Map({ currentCountry, setCurrentCountry }) {
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
	const [hoverCountry, setHoverCountry] = useState("");
	const [coord, setCoord] = useState({
		center: [18, 10],
		zoom: 1.7,
	});
	const [people, selectPeople] = useState(["Alicia, Katarina, Tami"]);
	const [flag, setFlag] = useState(false);
	const selectCountry = (geo) => {
		// alert(geo.id);
		// console.log(geo);
		// console.log(geo);
		// console.log(geo.properties.name);
		// console.log(geo.geometry.coordinates);
		setCurrentCountry(geo.properties.name);
		// console.log(flag);
		// alert(geo.properties.name);
		flag
			? selectPeople(["Justin, Henry, Emma"])
			: selectPeople(["Jenani, Mingxia, Heela"]);
		setFlag(!flag);
		if (geo.id == "BRA" || geo.id == "AUS") {
			selectPeople(["none"]);
		}
	};
	const showCountry = (geo) => setHoverCountry(geo.properties.name);
	const hideCountry = () => setHoverCountry("");

	return (
		<>
			<div className="map">
				<div className="map__options">
					<div className="title">
						<div className="logos">
							<a href="https://vitejs.dev" target="_blank">
								<img src={viteLogo} className="logo" alt="Vite logo" />
							</a>
							<a href="https://react.dev" target="_blank">
								<img src={reactLogo} className="logo react" alt="React logo" />
							</a>
						</div>
						<h1 className="app-logo">yourMap</h1>
					</div>
					<div className="map__buttons">
						<button
							onClick={() =>
								setCoord({
									center: [18, 10],
									zoom: 1.7,
								})
							}
						>
							{"Recenter"}
						</button>
						<button onClick={() => setCurrentCountry("")}>
							{currentCountry
								? `You're in ${currentCountry}!`
								: "Welcome! Click here anytime to deselect"}
						</button>
						{hoverCountry && (
							<button className="country-label">{hoverCountry}</button>
						)}
					</div>
				</div>
				<ComposableMap
					className="map__container"
					projection="geoEqualEarth"
					projectionConfig={{
						// rotate: [-10.0, -52.0, 0],
						// center: [2, 46],
						scale: 150,
					}}
				>
					<ZoomableGroup
						center={coord.center}
						zoom={coord.zoom}
						onMoveEnd={({ coordinates, zoom }) => {
							console.log(coordinates, zoom);
							setCoord({ center: coordinates, zoom: zoom });
						}}
					>
						<Geographies className="map" geography="/features.json">
							{({ geographies }) =>
								geographies.map(
									(geo) => (
										// <div key={geo.rsmKey}>
										// console.log(geo.rsmKey) || (
										<Geography
											className={
												geo.properties.name == currentCountry
													? "--active"
													: "country"
											}
											key={geo.rsmKey}
											geography={geo}
											fill="#F6F0E9"
											onClick={() => selectCountry(geo)}
											onMouseEnter={() => showCountry(geo)}
											onMouseLeave={() => hideCountry()}
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
					</ZoomableGroup>
				</ComposableMap>
			</div>
			{people[0] == "none" ? (
				<h2> ˙◠˙</h2>
			) : (
				<>
					<h2>We're here!</h2>{" "}
					<ul>
						{people.map((person, key) => (
							<div key={key}>{person}</div>
						))}
					</ul>
				</>
			)}
			<div className="card">
				<button onClick={() => setCurrentCountry("")}>Add a contact</button>
			</div>
		</>
	);
}

export default Map;
