import sequelize from "sequelize";
import express from "express";
import cors from "cors";
import database from "./database.js";//importa as confgurações do banco
import pool from "./database.js";

const PORT = 3000;
const app = express();

app.use(cors());
app.use(express.json());


app.get("/", (req,res) => {
    // database.query("CREATE DATABASE pizzaria ", (error, results) => {
    //     if (error) {
    //         throw error;
    //     }
    //     // res.json(results.rows);
    // });

    res.send('Hello World!')
});

app.post("/cadastro", async (req, res) => {

const {nome, email, telefone, endereco, senha} = req.body;

try {
    const resultado = await pool.query(
        'INSERT INTO tbl_cliente (nome_cliente, email_cliente, telefone_cliente, endereco_cliente, senha_cliente) VALUES ($1, $2, $3, $4, $5) RETURNING *',
        [nome, email, telefone, endereco, senha]
    )
    res.status(201).json(resultado.rows[0])
} catch (error) {
    res.json(500).send("Erro ao cadastrar o cliente")
    console.error("Não foi possível cadastrar", error)
}

});


app.listen(PORT, () => {
console.log(`Servidor rodando em: http://localhost:${PORT}...`);
})