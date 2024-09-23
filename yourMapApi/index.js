import express from "express";
import cors from "cors";

import personRoutes from "./routes/persons.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded());

app.use("/persons", personRoutes);

app.listen(8080, function () {
	console.log("Listening on 8080");
});
