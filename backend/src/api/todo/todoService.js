const Todo = require('./todo')

Todo.methods(['get', 'post', 'put', 'delete'])
// get => pega elementos, post => insere elementos, 
//put => altera elementos, delete => remove o registro do banco
Todo.updateOptions({ new: true, runValidators: true }) // Responsável por aplicar validações

module.exports = Todo
