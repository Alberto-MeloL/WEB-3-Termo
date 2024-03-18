import sequelize from "sequelize";
import express from "express";
import cors from "cors";
import database from "./database.js";//importa as confgurações do banco

const PORT = 3000;
const app = express();

app.use(cors());


app.get("/", (req,res) => {
    // database.query("CREATE DATABASE pizzaria ", (error, results) => {
    //     if (error) {
    //         throw error;
    //     }
    //     // res.json(results.rows);
    // });

    res.send('Hello World!')
});


app.listen(PORT, () => {
console.log(`Servidor rodando em: http://localhost:${PORT}...`);
})