'use strict';

// Setting up route
angular.module('events').config(['$stateProvider',
  function ($stateProvider) {
    // Articles state routing
    $stateProvider
      .state('events', {
        abstract: true,
        url: '/',
        template: '<ui-view/>'
      })
      .state('events.list', {
        url: '',
        templateUrl: 'modules/events/client/views/list-events.client.view.html'
      })
      .state('events.edit', {
        url: ':eventId/edit',
        templateUrl: 'modules/events/client/views/edit-event.client.view.html'
      });
  }
]);
