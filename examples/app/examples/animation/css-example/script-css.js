// Code goes here

var app=angular.module('coursesApp',['ngRoute','ngAnimate']);

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
    console.log($routeParams.id);
    $scope.course = coursesDataSvc.getCourse(parseInt($routeParams.id));
  }
  else{
    $scope.course = coursesDataSvc.getCourse(1);
  }
});