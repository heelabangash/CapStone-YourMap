import { useState } from "react";
import "./Persons.scss";
import Data from "../../../public/personsList.json";
import { v4 as uuid } from "uuid";

function Persons({ currentCountry }) {
	const [contactForm, showContactForm] = useState(false);
	const addContact = () => {
		showContactForm(!contactForm);
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(e.target.name.value);
		//add person to json here
	};

	let personExists = Data.persons.countries.find(
		(element) => element.name == currentCountry
	);
	let listPersons = "";
	personExists ? (listPersons = personExists.persons) : (listPersons = "");

	return (
		<div className="person-list">
			<h2>
				{currentCountry
					? personExists
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
				<button onClick={() => addContact()}>Add a contact</button>
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
	);
}

export default Persons;
