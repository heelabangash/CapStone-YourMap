import { useState } from "react";
import "./Map.scss";
import {
	ComposableMap,
	Geographies,
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
	const selectCountry = (geo) => {
		setCurrentCountry(geo.properties.name);
		// flag
		// 	? selectPeople(["Justin, Henry, Emma"])
		// 	: selectPeople(["Jenani, Mingxia, Heela"]);
		// setFlag(!flag);
		// if (geo.id == "BRA" || geo.id == "AUS") {
		// 	selectPeople(["none"]);
		// }
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
						scale: 150,
					}}
				>
					<ZoomableGroup
						center={coord.center}
						zoom={coord.zoom}
						onMoveEnd={({ coordinates, zoom }) => {
							setCoord({ center: coordinates, zoom: zoom });
						}}
					>
						<Geographies className="map" geography="/features.json">
							{({ geographies }) =>
								geographies.map((geo) => (
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
								))
							}
						</Geographies>
					</ZoomableGroup>
				</ComposableMap>
			</div>
		</>
	);
}

export default Map;
