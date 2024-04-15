import express from "express";
import cors from "cors";
import pool from "./database.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { time } from "console";
const saltRounds = 10;

const PORT = 3000;
const app = express();

app.use(cors());
app.use(express.json());

//rota de teste
app.get("/", (req, res) => {
  res.send("Hello World!");
});

//adiconar um histótico de pedido
//fazer o hash da senha
app.post("/cadastro", async (req, res) => {
  const { nome, email, telefone, endereco, senha } = req.body;
  const senhaHash = await bcrypt.hash(senha, saltRounds);

  console.log(req.body);
  try {
    const resultado = await pool.query(
      //erro de digitação colocar no log
      //erros de multiplas respostas
      "INSERT INTO tbl_clientes (nome_cliente, email_cliente, telefone_cliente, endereco_cliente, senha_cliente) VALUES ($1, $2, $3, $4, $5) RETURNING *",
      [nome, email, telefone, endereco, senhaHash]
    );
    res.status(201).json(resultado.rows[0]);
  } catch (error) {
    res.status(500).send("Erro ao cadastrar o cliente");
    console.error("Não foi possível cadastrar", error);
  }
});


//rota para realizar o login
const SECRETE_KEY = 'abcdteste';
app.post("/login", async (req, res) => {
  //recebendo dados
  const { email, senha } = req.body;
  console.log("Login, requisição", req.body);

  try {
    const query =
      "SELECT email_cliente, senha_cliente FROM tbl_clientes WHERE email_cliente = $1";

    const resultado = await pool.query(query, [email]);

    //verifica se algum usuário foi encontrado
    if (resultado.rows.length > 0) {
      const user = resultado.rows[0];

      const senha_valida = await bcrypt.compare(senha, user.senha_cliente);

if (senha_valida) {
const tokenData = {
  email: user.email_cliente
};

//gerando o token
const token = jwt.sign(tokenData, SECRETE_KEY, {expiresIn: '1m'});
res.status(200).json({message: "Login realizado com sucesso.", token: token});

}

    } else {
      res.status(404).json({ message: "Usuário não encontrado!" });
    }
  } catch (error) {
    console.log("Erro ao realizar o login", error);
  }
});


//rota para ser realizada a avaliação
app.post("/avaliar", async (req, res) => {
  const { avaliacao } = req.body; //obtendo a avaliação do cliente
  console.log("Aaliação do cliente", req.body);

  const query = "INSERT INTO tbl_feedbacks (qntd_estrelas, id_cliente) VALUES ($1, $2)";
  try {
    const resultado = await pool.query(query, [avaliacao, 1]);

    //resposta
    res.status(200).json({ message: "Avaliação bem sucedida!" });
  } catch (error) {
    console.error("Erro ao avaliar", error);
  }
});


//rota para realizar o pedido
app.post("/realizar-pedido", async (req, res) => {

  const {udCliente, nomeProduto, qntdProduto, subTotal} = req.body;
  console.log("Requisição do pedido", req.body);

  const queryPedido = "INSERT INTO tbl_pedidos ()"
  try {

  } catch (error) {
console.error("Erro ao realizar pedido", error);
  }
});
app.listen(PORT, () => {
  console.log(`Servidor rodando em: http://localhost:${PORT}...`);
});
