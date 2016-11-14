var restful = require('node-restful');
var mongoose = require('mongoose');

var User = mongoose.Schema({
        password: 'string',
        nombre: 'string',
        apellido: 'string'
    });

module.exports = restful.model('User', User);