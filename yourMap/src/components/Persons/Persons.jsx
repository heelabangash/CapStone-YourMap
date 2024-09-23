import { useState, useEffect } from "react";
import "./Persons.scss";
import Data from "../../../public/personsList.json";
import { v4 as uuid } from "uuid";
import axios from "axios";

function Persons({ currentCountry }) {
	const [contactForm, showContactForm] = useState(false);
	const addContact = () => {
		showContactForm(!contactForm);
	};
	const [data, setData] = useState(Data);

	let personExists = "";
	let listPersons = "";

	const fetchPersons = async () => {
		try {
			const response = await axios.get(`http://localhost:8080/persons`);
			setData(response.data);
			return response.data;
		} catch (err) {
			console.error("Error fetching persons", err);
			return null;
		}
	};

	const loadPersons = async () => {
		try {
			const personsDetails = await fetchPersons();
			if (personsDetails) {
				setData(personsDetails);

				personExists = personsDetails.persons.countries.find(
					(element) => element.name === currentCountry
				);

				listPersons = personExists ? personExists.persons : [];
			}
		} catch (err) {
			console.error("Error fetching persons:", err);
		}
	};

	useEffect(() => {
		loadPersons();
	}, [currentCountry]);

	const handleSubmit = async (e) => {
		e.preventDefault();
		listPersons
			? listPersons.push({ name: e.target.name.value })
			: (listPersons = [{ name: e.target.name.value }]);
		console.log(listPersons);

		let body = {
			name: currentCountry,
			persons: listPersons,
		};
		try {
			await axios.post(`http://localhost:8080/persons/`, body);
		} catch (error) {
			console.error("Error adding person:", error);
		}
		loadPersons();
	};

	listPersons = data?.persons?.countries?.find(
		(element) => element.name === currentCountry
	)?.persons;

	return (
		<>
			{data ? (
				<div className="person-list">
					<h2>
						{currentCountry
							? listPersons
								? `We're in ${currentCountry}!`
								: "Do you know anyone here?"
							: " ~ ~ Your World ~ ~"}
					</h2>
					<div className="person-list__persons">
						{currentCountry
							? listPersons
								? listPersons.map((person) => (
										<p key={uuid()} className="person">
											{person.name}
										</p>
								  ))
								: "˙◠˙"
							: ""}
					</div>

					<div className="card">
						<button onClick={addContact}>Add a contact</button>
					</div>
					{contactForm && (
						<form onSubmit={handleSubmit}>
							<label className="name-label">
								Name:
								<input type="text" name="name" />
							</label>
							<input type="submit" value="Add" />
						</form>
					)}
				</div>
			) : (
				<p>loading</p>
			)}
		</>
	);
}

export default Persons;
