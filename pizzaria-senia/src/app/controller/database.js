import pkg from "pg";

const {Pool} = pkg;
//gerencia as conexões
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'pizzaria',
    password: 'postgres1',
    port: 5432,
});

export default pool;