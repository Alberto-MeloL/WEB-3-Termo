import banco from "./banco.js";

const Tarefa = banco.sequelize.define('tarefa', {
    nome:{
        type: banco.Sequelize.STRING,
        unique: true
    },
    observacoes:{
        type: banco.Sequelize.STRING,
        allowNull: false,
    }
})


Tarefa.sync().then(() => {
    console.log('Tabela criada com sucesso.');
}).catch(error => {
    console.error('Erro na criação da tabela', error);
});

export default Tarefa;