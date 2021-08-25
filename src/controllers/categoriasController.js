// Define a utilização do model cliente e a dependência http-status
const Categorias = require('../models/categoria');
const status = require('http-status');
 
// Cria o método Insert, obtendo os dados da request
exports.Insert = (req, res, next) => {
    const nome_categoria = req.body.nome_categoria;
    const descricao_categoria = req.body.descricao_categoria;
    const ativo_categoria = req.body.ativo_categoria;
 
    // Popula cada um dos campos do model com os campos recebido na request
    Categorias.create({
        nome_categoria: nome_categoria,
        descricao_categoria: descricao_categoria,
        ativo_categoria: ativo_categoria,
    })
        //then = registra o que queremos que aconteca quando a Promise for resolvida
        .then(categorias => {
            if (categorias) {
                res.status(status.OK).send(categorias);
            } else {
                res.status(status.NOT_FOUND).send();
            }
        })
        //catch = registra o que queremos que aconteca quando a Promise falhar
        .catch(error => next(error));
};
 
exports.SelectAll = (req, res, next) => {
    Categorias.findAll()
        .then(categorias => {
            if (categorias) {
                res.status(status.OK).send(categorias);
            }
        })
        .catch(error => next(error));
}
 
exports.SelectDetail = (req, res, next) => {
    const id_categoria = req.params.id_categoria;
 
    Categorias.findByPk(id_categoria)
        .then(categorias => {
            if (categorias) {
                res.status(status.OK).send(categorias);
            } else {
                res.status(status.NOT_FOUND).send();
            }
        })
        .catch(error => next(error));
};

exports.Update = (req, res, next) => {
    const id_categoria = req.params.id_categoria;
    const nome_categoria = req.body.nome_categoria;
    const descricao_categoria = req.body.descricao_categoria;
    const ativo_categoria = req.body.ativo_categoria;
 
    Produtos.findByPk(id_categoria)
        .then(categorias => {
            if (categorias) {
                categorias.update({
                    nome_categoria: nome_categoria,
                    descricao_categoria: descricao_categoria,
                    ativo_categoria: ativo_categoria,
                },
                    {
                        where: { id_categoria: id_categoria }
                    })
                    .then(() => {
                        res.status(status.OK).send();
                    })
                    .catch(error => next(error));
            } else {
                res.status(status.NOT_FOUND).send();
            }
        })
        .catch(error => next(error));
};
 
exports.Delete = (req, res, next) => {
    const id_categoria = req.params.id_categoria;
 
    Categorias.findByPk(id_categoria)
        .then(categorias => {
            if (categorias) {
                categorias.destroy({
                    where: { id_categoria: id_categoria }
                })
                    .then(() => {
                        res.status(status.OK).send();
                    })
                    .catch(error => next(error));
            }
            else {
                res.status(status.NOT_FOUND).send();
            }
        })
        .catch(error => next(error));
};

