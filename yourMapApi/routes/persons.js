import data from "../data/personsListStarter.json" with {type: "json"};

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

const postPersons = async (_req, res) => {
    const personsPath = "\data\\personsList.json";
	try {
        let newPerson = "";
        console.log("got here at least");
	} catch (err) {
		console.error(err.message);
		res
			.status(500)
			.send(
				`Weren't able to fetch persons: ${err}`
			);
	}
};

router.route("/").get(getAllPersons).post(postPersons);

export default router;
