'use strict';

// Articles controller
angular.module('events').controller('EventsController', ['$scope', '$stateParams', '$location', 'Events',
  function ($scope, $stateParams, $location, Events) {
/*
    // Create new Article
    $scope.create = function (isValid) {
      $scope.error = null;

      if (!isValid) {
        $scope.$broadcast('show-errors-check-validity', 'articleForm');

        return false;
      }

      // Create new Article object
      var article = new Articles({
        title: this.title,
        content: this.content
      });

      // Redirect after save
      article.$save(function (response) {
        $location.path('articles/' + response._id);

        // Clear form fields
        $scope.title = '';
        $scope.content = '';
      }, function (errorResponse) {
        $scope.error = errorResponse.data.message;
      });
    };
*/
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
    
    $scope.getEvent = function(event){ 
      Events.get({
        eventId: event._id
      },function(res){
        console.log(res);
      });
    };
/*
    // Update existing Article
    $scope.update = function (isValid) {
      $scope.error = null;

      if (!isValid) {
        $scope.$broadcast('show-errors-check-validity', 'articleForm');

        return false;
      }

      var article = $scope.article;

      article.$update(function () {
        $location.path('articles/' + article._id);
      }, function (errorResponse) {
        $scope.error = errorResponse.data.message;
      });
    };
    */
    // List events
    $scope.list = function () {
      $scope.events = Events.query();
    };
    /*
    // Find existing Article
    $scope.findOne = function () {
      $scope.article = Articles.get({
        articleId: $stateParams.articleId
      });
    };
    */
  }
]);
