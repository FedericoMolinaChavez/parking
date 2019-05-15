'use strict';
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

/**
 * user model file
 * autogenerated by mongoose-scaffold-crud
 */

var usersSchema = new Schema({
    name: 'String',
    email: 'String',
    age: 'Number',
    id: 'String'
});

module.exports = mongoose.model('users', usersSchema);