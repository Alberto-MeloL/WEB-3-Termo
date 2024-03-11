import { Sequelize } from "sequelize";

class BancoDeDados{
    private static instancia: Sequelize;//DEFININDO a instancia do Sequelize


    public static async inicializarBD(): Promise<void>{
        this.instancia = new Sequelize('BancoJS', 'root', 'postgres1', {
            host: 'localhost',
            dialect: 'postgres',
        });

        try {
            await this.instancia.authenticate();
            console.log('Conexão estabelecida com sucesso!');
        } catch (error) {
            console.error('Falha ao conectar com o banco de dados: ', error);
        }
    }

    public static getInstancia(): Sequelize{
        if (!this.instancia) {
            this.inicializarBD();
        }
        return this.instancia
    }
}

export {BancoDeDados, Sequelize}; 
