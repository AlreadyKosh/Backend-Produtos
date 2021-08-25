const Sequelize = require('sequelize');
 
const sequelize = require('../database/database.js');
 
const Categorias = sequelize.define("categorias", {
    id_categoria: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
    },
    nome_categoria: {
        allowNull: false,
        type: Sequelize.STRING(100),
        validate: {
            len: [3, 100]
        }
    },

    descricao_categoria:{
        allowNull: false,
        type: Sequelize.STRING(300),
        validate: {
            len: [3, 300]
        }
    },
    ativo_categoria: {
        allowNull: false,
        type: Sequelize.BOOLEAN(),
        defaultValue: true
    }
});
 
module.exports = Categorias;
