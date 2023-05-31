const ProdutoModel = require("../models/produtomodel");

exports.create = (req, res) =>  {
    if (!req.body.nome || !req.body.valor){
        res.status(400).send({
            message:" conteudo do corpo da requisição vazia"
        });
    } else {
        const produto = new ProdutoModel({
            nome: req.body.nome,
            valor: req.body.valor
        });

        ProdutoModel.create(produto, (err,data) => {
            if (err){
                res.status(500).send({
                    message: err.message || "Ocorrreu um erro ao inserir os dados"
                });
            } else{
                res.send(data);
            }
        })
    }

}
exports.findAll = (req, res) =>  {
    ProdutoModel.getAll((err, data) => 
    {
        if(err){
            res.status(500).send({
                message: err.message || "Ocorreu um erro deconhecido!"
            })
        }else{
            res.send(data);
        }

    })
}
exports.findById = (req, res) =>  {
    ProdutoModel.findById(req.params.produtoId, (err,data) => {
        if (err){
            if(err.type =="not_found"){
                res.status(404).send({
                    message: "Produto Não encontrado. ID"+req.params.produtoId
                });
            } else{
                res.status(500).send({
                    message: "Erro ao retornar o produto com ID: "+req.params.produtoId
                });
            }
        }else {
            res.send(data);
        }
    })
}
exports.update = (req, res) =>  {}
exports.delete = (req, res) =>  {}
exports.deleteAll= (req, res) =>  {}