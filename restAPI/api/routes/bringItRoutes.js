'use strict';
module.exports = function (app) {
    var bringIt = require('../controllers/bringItController');

    // Bring it Routes
    app.route('/login')
        .post(bringIt.login);

    app.route('/users')
        .get(bringIt.list_all_users)
        .post(bringIt.create_a_user);


    app.route('/users/:userUuid')
        .get(bringIt.read_a_user)
        .put(bringIt.update_a_user)
        .delete(bringIt.delete_a_user);

    app.route('/events')
        .get(bringIt.list_all_events)
        .post(bringIt.create_an_event);

    app.route('/users/:id/events')
        .get(bringIt.list_all_events_from_one_user)


    app.route('/events/:id')
        .get(bringIt.read_an_event)
        .put(bringIt.update_an_event)
        .delete(bringIt.delete_an_event);

};