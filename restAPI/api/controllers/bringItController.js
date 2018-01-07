'use strict';


var mongoose = require('mongoose'),
    User = mongoose.model('Users'),
    AppEvent = mongoose.model('Events');


/**
 * Function to list all users existing in database
 * @param req
 * @param res
 */
exports.list_all_users = function (req, res) {
    User.find({}, function (err, user) {
        if (err)
            res.status(500).send(err);
        res.json(user);
    });
};

/**
 * Function to list all events existing in database
 * @param req
 * @param res
 */
exports.list_all_events = function (req, res) {
    AppEvent.find({}, function (err, event) {
        if (err)
            res.status(500).send(err);
        res.json(event);
    });
};


/**
 * Function to create an user in database
 * @param req
 * @param res
 */
exports.create_a_user = function (req, res) {
    var new_user = new User(req.body);

    new_user.save(function (err, user) {
        if (err)
            res.status(500).send(err);
        res.json(user);
    });
};
/**
 * Function to create an event in database
 * @param req
 * @param res
 */
exports.create_an_event = function (req, res) {
    var new_event = new AppEvent(req.body);

    new_event.save(function (err, event) {
        if (err)
            res.status(500).send(err);
        console.log('send response');
        console.log(event)
        res.send(event);
    });
};

exports.login = function (req, res) {
    var email = req.body.email;
    var password = req.body.password;

    User.findOne().where('email').equals(email).exec((error, user) => {
        if (error)
            res.status(500).send(error);
        // test a matching password
        user.comparePassword(password, (errorInComparePassword, isMatch) => {
            if (errorInComparePassword) 
                res.status(500).send(errorInComparePassword);

            console.log(password, isMatch);
            //TODO Implement credentials
            res.status(200).send(user);
        });
    })
}

/**
 * Function to get user in database with given uuid
 * @param req
 * @param res
 */
exports.read_a_user = function (req, res) {
    BringItEvent.findOne().where('uuid').equals(req.params.uuid).exec(function (err, event) {
        if (err)
            res.status(500).send(err);
        res.send(event);
    });
};

/**
 * Function to get event in database with given uuid
 * @param req
 * @param res
 */
exports.read_an_event = function (req, res) {
    AppEvent.findOne().where('_id').equals(req.params.id).exec(function (err, event) {
        if (err)
            res.status(500).send(err);
        res.send(event);
    });
};

/**
 * Function to update user in database
 * @param req
 * @param res
 */
exports.update_a_user = function (req, res) {
    User.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}, function (err, user) {
        if (err) {
            console.log(err);
            res.status(500).send(err);
        }
        res.json(user);
    });
};

/**
 * Function to update event in database
 * @param req
 * @param res
 */
exports.update_an_event = function (req, res) {
    AppEvent.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}, (err, event) => {
        if (err) {
            console.log(err);
            res.status(500).send(err);
        }
        
        res.json(event);
    });
};

/**
 * Function to remove user from database
 * @param req
 * @param res
 */
exports.delete_a_user = function (req, res) {
    User.remove({
        _id: req.params.uuid
    }, function (err, user) {
        if (err)
            res.status(500).send(err);
        res.json({message: 'User successfully deleted'});
    });
};

/**
 * Function to remove user from database
 * @param req
 * @param res
 */
exports.delete_an_event = function (req, res) {
    AppEvent.remove({
        _id: req.params.uuid
    }, function (err, event) {
        if (err)
            res.status(500).send(err);
        res.json({message: 'Event successfully deleted'});
    });
};

exports.list_all_events_from_one_user = function (req, res) {
    AppEvent.find().where('hostId').equals(req.params.id).exec(function (err, events) {
        if (err) {
            console.log(err);
            res.status(500).send(err);
        }
        res.send(events);
    })
}