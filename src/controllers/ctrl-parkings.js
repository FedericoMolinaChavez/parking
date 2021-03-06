'use strict';

 /**
 * parking controller file * autogenerated by mongoose-scaffold-crud **/

var parkings = require('express').Router(),
    Model = require('../models/model-parkings.js');

parkings.get('/', function(req, res) {
    Model.find(function(err, parkings){
        if (req.accepts('html', 'json') === 'json') {
            if(err) {
                return res.json(500, {
                    message: 'Error getting parkings.'
                });
            }
            return res.json(parkings);
        } else {
            if(err) {
                return res.send('500: Internal Server Error', 500);
            }
        return res.render('parkings/index', {parkings: parkings});
        }
    });
});

parkings.post('/', function(req, res) {
    var parking = new Model({
        'name': req.body['name'],
        'id': req.body['id'],
        'account': req.body['account'],
        'monthlyMoney': req.body['monthlyMoney']
    });
    parking.save(function(err, parking){
        if (req.accepts('html', 'json') === 'json') {
            if(err) {
                return res.json(500, {
                    message: 'Error saving item.',
                    error: err
                });
            }
            return res.json({
                message: 'saved',
                _id: parking._id
            });
        } else {
            if(err) {
                return res.send('500: Internal Server Error', 500);
            }
            return res.render('parkings/edit', {parking: parking});
        }
    });
});

parkings.get('/:id', function(req, res) {
    var id = req.params.id;
    Model.findOne({_id: id}, function(err, parking){
        if (req.accepts('html', 'json') === 'json') {
            if(err) {
                return res.json(500, {
                    message: 'Error getting parking.'
                });
            }
            if(!parking) {
                return res.json(404, {
                    message: 'No such parking.'
                });
            }
            return res.json(parking);
        } else {
            if(err) {
                return res.send('500: Internal Server Error', 500);
            }
            if(!parking) {
                return res.end('No such parking');
            }
            return res.render('parkings/edit', {parking: parking, flash: 'Created.'});
        }
    });
});

parkings.put('/:id', function(req, res) {
    var id = req.params.id;
    Model.findOne({_id: id}, function(err, parking){
        if (req.accepts('html', 'json') === 'json') {
            if(err) {
                return res.json(500, {
                    message: 'Error saving parking',
                    error: err
                });
            }
            if(!parking) {
                return res.json(404, {
                    message: 'No such parking'
                });
            }
            parking['name'] = req.body['name'] ? req.body['name'] : parking['name'];
            parking['id'] = req.body['id'] ? req.body['id'] : parking['id'];
            parking['account'] = req.body['account'] ? req.body['account'] : parking['account'];
            parking['monthlyMoney'] = req.body['monthlyMoney'] ? req.body['monthlyMoney'] : parking['monthlyMoney'];
            parking.save(function(err, parking){
                if(err) {
                    return res.json(500, {
                        message: 'Error getting parking.'
                    });
                }
                if(!parking) {
                    return res.json(404, {
                        message: 'No such parking'
                    });
                }
                return res.json(parking);
            });
        } else {
            if(err) {
                return res.send('500: Internal Server Error', 500);
            }
            if(!parking) {
                return res.end('No such parking');
            }
            parking['name'] = req.body['name'] ? req.body['name'] : parking['name'];
            parking['id'] = req.body['id'] ? req.body['id'] : parking['id'];
            parking['account'] = req.body['account'] ? req.body['account'] : parking['account'];
            parking['monthlyMoney'] = req.body['monthlyMoney'] ? req.body['monthlyMoney'] : parking['monthlyMoney'];
            parking.save(function(err, parking){
                if(err) {
                    return res.send('500: Internal Server Error', 500);
                }
                if(!parking) {
                    return res.end('No such parking');
                }
                return res.render('parkings/edit', {parking: parking, flash: 'Saved.'});
            });
        }
    });
});

parkings.delete('/:id', function(req, res) {
    var id = req.params.id;
    Model.findOne({_id: id}, function(err, parking){
        if (req.accepts('html', 'json') === 'json') {
            if(err) {
                return res.json(500, {
                    message: 'Error getting parking.'
                });
            }
            if(!parking) {
                return res.json(404, {
                    message: 'No such parking'
                });
            }
            return res.json(parking);
        } else {
            if(err) {
                return res.send('500: Internal Server Error', 500);
            }
            if(!parking) {
                return res.end('No such parking');
            }
            return res.render('index', {flash: 'Item deleted.'});
        }
    });
});

module.exports = parkings;