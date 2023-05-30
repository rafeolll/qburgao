const ProdutoModel = require("../models/produtomodel");

exports.create = (req, res) =>  {}
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
exports.findById = (req, res) =>  {}
exports.update = (req, res) =>  {}
exports.delete = (req, res) =>  {}
exports.deleteAll= (req, res) =>  {}