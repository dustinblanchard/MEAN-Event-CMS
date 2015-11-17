'use strict';

// Articles controller
angular.module('events').controller('EventsController', ['$scope', '$stateParams', '$location', 'Events',
  function ($scope, $stateParams, $location, Events) {

    // Create Event
    var newEvent = function(){
      // Create new Article object
      var event = new Events($scope.event);
      // Redirect after save
      event.$save(function (response) {
        $scope.submitting = false;
        $scope.formProcessing.success = true;
      }, function (errorResponse) {
        $scope.formProcessing.error = errorResponse.data.message;
      });
    };
    
    //edit event
    var editEvent = function(){
      var event = $scope.event;

      event.$update(function () {
        $scope.formProcessing.submitting = false;
        $scope.formProcessing.success = true;
      }, function (errorResponse) {
        $scope.formProcessing.error = errorResponse.data.message;
      });
    };
    
    //declare form scope
    $scope.formProcessing = {
      
    };
    
    //Submit event form
    $scope.postEvent = function (isValid) {
      $scope.error = null;
      if (!isValid) {
        $scope.$broadcast('show-errors-check-validity', 'eventForm');

        return false;
      }
      $scope.submitting = true;
      if($stateParams.eventId === 'new'){
        newEvent();
      } else {
        editEvent();
      }
    };
    
    // Delete event
    $scope.delete = function (event) {
      console.log(event);
      event.$remove();
      for (var i in $scope.events) {
        if ($scope.events[i] === event) {
          $scope.events.splice(i, 1);
        }
      }
    };
    
    // Get single event
    $scope.getEvent = function(){ 
      if($stateParams.eventId === 'new'){
        $scope.title= 'New Event';
        $scope.event = {
          startDate: new Date()
        };
      }else {
        $scope.event = Events.get({
          eventId: $stateParams.eventId
        },function(res){
          $scope.title = res.title;
        });
      }
    };

    // List events
    $scope.list = function () {
      $scope.events = Events.query();
    };
    
  }
]);
