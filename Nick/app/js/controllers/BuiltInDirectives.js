no. we'use strict';

window.eventsApp = angular.module('eventsApp', ['ngRoute', 'ngResource']);

eventsApp.controller('EventController',
    function EventController($scope) {

        $scope.snippet = '<span style="color:red">hi there</span>';
        $scope.boolValue = false;
        $scope.mystyle = {color:'red'};
        $scope.myclass = "blue";
        $scope.buttonDisabled = true;
        $scope.mylist = [1,2,3];
        $scope.event = {
            name: 'Angular Boot Camp',
            date: '1/1/2013',
            time: '10:30 am',
            location: {
                address: 'Google Headquarters',
                city: 'Mountain View',
                province: 'CA'
            },
            imageUrl: '/img/profile.jpg',
            sessions: [
                {
                    name: 'Directives Masterclass',
                    creatorName: 'Bob Smith',
                    duration: '1 hr',
                    level: 'Advanced',
                    abstract: 'In this sesison you will learn the ins and',
                    upVoteCount: 0
                },
                {
                    name: 'Scopes for fun and profit',
                    creatorName: 'John Doe',
                    duration: '30 mins',
                    level: 'Introductory',
                    abstract: 'This session will take a closer look at scopes.',
                    upVoteCount: 0
                },
            ]
        }

        $scope.upVoteSession = function(session) {
            session.upVoteCount++;
        };

        $scope.downVoteSession = function(session) {
            session.upVoteCount--;
        };
    }
);