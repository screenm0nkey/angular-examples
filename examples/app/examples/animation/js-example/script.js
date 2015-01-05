// Code goes here

var app=angular.module('coursesApp',['ngRoute','ngAnimate','courseAnimations']);

app.config(function($routeProvider){
  
  $routeProvider.when('/',{
    templateUrl:'home.html',
    controller:'HomeCtrl'
  })
  .when('/course/:id',{
    templateUrl:'course.html',
    controller:'ViewCourseCtrl'
  });
  
});

app.factory('coursesDataSvc', function($http){

  var courses;

  function getAllCourses(){
    var prom = $http.get('courses.json');
    prom.success(function (resp) {
      courses = resp;
    });
    return prom;
  }


  function getCourse(id){
    var filtered = _.filter(courses, function(c){
      return c.id === id;
    });
    return filtered[0];
  }
  
  return {
    getAllCourses:getAllCourses,
    getCourse:getCourse
  };
});

app.controller('HomeCtrl', function($scope, coursesDataSvc){
  coursesDataSvc.getAllCourses().success(function (resp) {
    $scope.courses=resp;
  });
});

app.controller('ViewCourseCtrl',function($scope, $routeParams, coursesDataSvc){
  if ($routeParams.id) {
    $scope.course = coursesDataSvc.getCourse(parseInt($routeParams.id));
  }
  else{
    $scope.course = coursesDataSvc.getCourse(1);
  }
});

app.directive('courseDetails', function($animate){
  return {
    scope: true,
    templateUrl:'courseDetails.html',
    link: function(scope, elem){
      scope.viewDetails = true;
      elem.find('button').bind('click', function(){
        // $animate.addClass triggers an event on the element which invokes any methods named 'beforeAddClass()'
        // which are assigned to the element using app.animation(element)
        $animate.addClass(elem, "switching", function done(){
          // this is called when the 'beforeAddClass()' function invokes the done() callback
          scope.viewDetails = !scope.viewDetails;
          scope.$apply();
          // $animate.addClass triggers the 'removeClass' callback
          $animate.removeClass(elem, "switching");
        });
      });
    }
  };
});