'use strict';

/**
 * Module dependencies.
 */
var events = require('../controllers/events.server.controller');

module.exports = function (app) {
  // Articles collection routes
  app.route('/api/events').all()
    .get(events.list)
    .post(events.create);

  // Single article routes
  app.route('/api/events/:eventId').all()
    .get(events.read)
    .put(events.update)
    .delete(events.delete);

  // Finish by binding the article middleware
  app.param('eventId', events.eventByID);
};
