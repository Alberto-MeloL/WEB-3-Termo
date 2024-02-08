import Sequelize from 'sequelize';

const sequelize = new Sequelize('tarefas', 'root', 'root1', {
    host: 'localhost',
    dialect: 'mysql',
})

export default {
    sequelize: sequelize,
    Sequelize: Sequelize,
}

try {
    sequelize.authenticate();
    console.log('Conexão bem sucedida.')
} catch (error) {
    console.error('Erro na conexão', error)
}