const sql = require("./db.js");
 
const ProdutoModel = function(produto){
    this.name = produto.nome;
    this.valor = produto.valor;
}

ProdutoModel.create = (produto, result) => {

};

ProdutoModel.findById = (produtoId, result) =>{

};
ProdutoModel.getAll = result => {

    sql.query("SELECT * FROM produtos", (err,res) => {

        if(err)
        {
            console.log("erro: ", err);
            result(null, err);
            return;
        }

        console.log("produto: ", res);
        result(null,  res);
    })
};

ProdutoModel.updateById = (produtoId, produto, result) => {

};

ProdutoModel.remove = (produtoId, result) =>{

}

ProdutoModel.removeAll = (result) =>{
    
}

module.exports = ProdutoModel;