const mongoose = require('mongoose')
mongoose.Promise = global.Promise  //Serve apenas para "tirar" a mensagem de advertência
module.exports = mongoose.connect('mongodb://localhost/todo') // Cria/direciona o banco todo

