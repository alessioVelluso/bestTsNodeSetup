// --- Folder not required if you're not using DB

import { initModels } from "./init-models"; // --- It's required to run the .sh script in this folder
import { Sequelize } from "sequelize";


const sequelize = new Sequelize(process.env["URI_CONNECTION"]!);
const models = initModels(sequelize);


export default models;