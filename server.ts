import { configDotenv } from "dotenv";
configDotenv(); // --- DOTENV INIT, MOVE IT ELSEWHERE BUT DONT REMOVE IT

import express, { Express } from "express";


const app:Express = express();
const port:string = process.env["SERVER_PORT"]!;





app.listen(port, () => {
	console.log(`Listening on port ${port}`);
});