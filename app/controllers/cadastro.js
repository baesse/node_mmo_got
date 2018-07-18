module.exports.cadastro=function(application,req,res){
    res.render('cadastro',{errors:{},dadosform:{}});
}
module.exports.cadastrar=function(application,req,res){
    var dadosform=req.body
    req.assert('nome','Nome não pode ser vázio').notEmpty()
    req.assert('usuario','Usuario não pode ser vazio').notEmpty()
    req.assert('senha','Senha não pode ser vazia').notEmpty()
    req.assert('casa','Casa não pode ser vázia').notEmpty()
    var errors=req.validationErrors()
    if(errors){
        res.render('cadastro',{errors:errors,dadosform:dadosform})
        return
    }
    res.send('cadastrado');
}