'use strict';

angular.module('events').directive('eventItem', function(){
  return {
    replace: true,
    restrict: 'E',
    require: '^ngEvent',
    scope: {
      ngEvent: '='
    },
    templateUrl: 'modules/events/client/templates/event.client.template.html'
  };
});