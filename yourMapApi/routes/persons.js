import data from "../data/personsList.json" with {type: "json"};

import express from "express";
import * as fs from "fs";
import { v4 as uuidv4 } from "uuid";

const router = express.Router();



const getAllPersons = async (_req, res) => {
	try {
        let persons = data;
        res.json(data);
	} catch (err) {
		console.error(err.message);
		res
			.status(500)
			.send(
				`Weren't able to fetch persons: ${err}`
			);
	}
};

const postPersons =  async (req, res) => {
    const personsPath = "\data\\personsList.json";
	let body = req.body;
    console.log("body.persons:  ", body.persons);
    console.log("body.names:  ", body.name);


    try {
        
        let newData ="";
        newData = data;
        console.log("++++++++++++++++++++++++++++")

        data.persons.countries.forEach((country)=> console.log(country.name));
        console.log("++++++++++++++++++++++++++++")

        data.persons.countries.find(country=> country.name === body.name)? newData.persons.countries[data.persons.countries.findIndex(country=> country.name === body.name)] = body: newData.persons.countries.push(body);
        console.log("++++++++++++++++++++++++++++")
        // console.log(newData)

        // newData.persons.countries.push(body):
        // newData.persons.countries[data.persons.countries.findIndex(country=> country.name == body.country)] = body.new;
        console.log ("newdata ",JSON.stringify(newData, null, 4));

        fs.writeFileSync(personsPath, JSON.stringify(newData));
        console.log('JSON data saved to file successfully.');
	} catch (err) {
		console.error(err.message);
		res
			.status(500)
			.send(
				`Weren't able to write Person data: ${err}`
			);
	}
};

router.route("/").get(getAllPersons).post(postPersons);

export default router;
