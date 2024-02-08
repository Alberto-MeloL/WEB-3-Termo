import banco from "./banco.js";

const Tarefa = banco.sequelize.define('tarefa', {
    nome:{
        type: banco.Sequelize.STRING,
        unique: true
    },
    observacoes:{
        type: banco.Sequelize.TEXT,
        allowNull: false,
    }
})


try {
   Tarefa.sync();  
} catch (error) {
    console.error('Erro na criação da tabela', error)
}

export default Tarefa;