'use strict';

 /**
 * current controller file * autogenerated by mongoose-scaffold-crud **/

var currents = require('express').Router(),
    Model = require('../models/model-currents.js');

currents.get('/', function(req, res) {
    Model.find(function(err, currents){
        if (req.accepts('html', 'json') === 'json') {
            if(err) {
                return res.json(500, {
                    message: 'Error getting currents.'
                });
            }
            return res.json(currents);
        } else {
            if(err) {
                return res.send('500: Internal Server Error', 500);
            }
        return res.render('currents/index', {currents: currents});
        }
    });
});

currents.post('/', function(req, res) {
    var current = new Model({
        'id': req.body['id'],
        'placa': req.body['placa'],
        // TODO: generate Date parser.,
        'payment': (req.body['payment']) ? (req.body['payment'] === 'true') : false,
        // TODO: generate Date parser.,
        'idParqueadero': req.body['idParqueadero']
    });
    current.save(function(err, current){
        if (req.accepts('html', 'json') === 'json') {
            if(err) {
                return res.json(500, {
                    message: 'Error saving item.',
                    error: err
                });
            }
            return res.json({
                message: 'saved',
                _id: current._id
            });
        } else {
            if(err) {
                return res.send('500: Internal Server Error', 500);
            }
            return res.render('currents/edit', {current: current});
        }
    });
});

currents.get('/:id', function(req, res) {
    var id = req.params.id;
    Model.findOne({_id: id}, function(err, current){
        if (req.accepts('html', 'json') === 'json') {
            if(err) {
                return res.json(500, {
                    message: 'Error getting current.'
                });
            }
            if(!current) {
                return res.json(404, {
                    message: 'No such current.'
                });
            }
            return res.json(current);
        } else {
            if(err) {
                return res.send('500: Internal Server Error', 500);
            }
            if(!current) {
                return res.end('No such current');
            }
            return res.render('currents/edit', {current: current, flash: 'Created.'});
        }
    });
});

currents.put('/:id', function(req, res) {
    var id = req.params.id;
    Model.findOne({_id: id}, function(err, current){
        if (req.accepts('html', 'json') === 'json') {
            if(err) {
                return res.json(500, {
                    message: 'Error saving current',
                    error: err
                });
            }
            if(!current) {
                return res.json(404, {
                    message: 'No such current'
                });
            }
            current['id'] = req.body['id'] ? req.body['id'] : current['id'];
            current['placa'] = req.body['placa'] ? req.body['placa'] : current['placa'];
            // TODO: generate Date parser.
            current['payment'] = (req.body['payment']) ? (req.body['payment'] === 'true') : current['payment']
            // TODO: generate Date parser.
            current['idParqueadero'] = req.body['idParqueadero'] ? req.body['idParqueadero'] : current['idParqueadero'];
            current.save(function(err, current){
                if(err) {
                    return res.json(500, {
                        message: 'Error getting current.'
                    });
                }
                if(!current) {
                    return res.json(404, {
                        message: 'No such current'
                    });
                }
                return res.json(current);
            });
        } else {
            if(err) {
                return res.send('500: Internal Server Error', 500);
            }
            if(!current) {
                return res.end('No such current');
            }
            current['id'] = req.body['id'] ? req.body['id'] : current['id'];
            current['placa'] = req.body['placa'] ? req.body['placa'] : current['placa'];
            // TODO: generate Date parser.
            current['payment'] = (req.body['payment']) ? (req.body['payment'] === 'true') : current['payment']
            // TODO: generate Date parser.
            current['idParqueadero'] = req.body['idParqueadero'] ? req.body['idParqueadero'] : current['idParqueadero'];
            current.save(function(err, current){
                if(err) {
                    return res.send('500: Internal Server Error', 500);
                }
                if(!current) {
                    return res.end('No such current');
                }
                return res.render('currents/edit', {current: current, flash: 'Saved.'});
            });
        }
    });
});

currents.delete('/:id', function(req, res) {
    var id = req.params.id;
    Model.findOne({_id: id}, function(err, current){
        if (req.accepts('html', 'json') === 'json') {
            if(err) {
                return res.json(500, {
                    message: 'Error getting current.'
                });
            }
            if(!current) {
                return res.json(404, {
                    message: 'No such current'
                });
            }
            return res.json(current);
        } else {
            if(err) {
                return res.send('500: Internal Server Error', 500);
            }
            if(!current) {
                return res.end('No such current');
            }
            return res.render('index', {flash: 'Item deleted.'});
        }
    });
});

module.exports = currents;