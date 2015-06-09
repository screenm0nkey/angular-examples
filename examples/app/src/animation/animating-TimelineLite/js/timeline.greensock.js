angular.module('website', ['ngAnimate'])
    .controller('MainCtrl', function ($scope) {
        $scope.slides = [
            {bg: 'images/bg3.jpg', avatar: 'images/john.png', title: 'John Lindquist', subtitle: 'The Godfather'},
            {bg: 'images/bg1.jpg', avatar: 'images/joel.png', title: 'Joel Hooks', subtitle: 'The Hustler'},
            {bg: 'images/bg2.jpg', avatar: 'images/lukas.png', title: 'Lukas Ruebbelke', subtitle: 'The Cleaner'}
        ];

        $scope.direction = 'left';
        $scope.currentIndex = 0;

        $scope.setCurrentSlideIndex = function (index) {
            $scope.direction = (index > $scope.currentIndex) ? 'left' : 'right';
            $scope.currentIndex = index;
        };

        $scope.isCurrentSlideIndex = function (index) {
            return $scope.currentIndex === index;
        };
    })
    .animation('.slide-animation', function () {
        return {
            // current visible slide moved off screen
            beforeAddClass: function (element, className, done) {
                if (className == 'ng-hide') {
                    var scope = element.scope(),
                        finishPoint = element.parent().width();

                    if (scope.direction !== 'right') finishPoint = -finishPoint;

                    TweenLite.to(element, 0.5, {
                        left: finishPoint,
                        ease: Ease.easeInOut, onComplete: done
                    });
                }
                else {
                    done();
                }
            },
            // new slide will be come in and be displayed
            removeClass: function (element, className, done) {
                if (className == 'ng-hide') {
                    var scope = element.scope(),
                        startPoint = element.parent().width(),
                        timeline = new TimelineLite();

                    if (scope.direction === 'right') startPoint = -startPoint;

                    timeline
                        .fromTo(element, 0.5, {left: startPoint}, {left: 0, ease: Ease.easeInOut, onComplete: done})
                        .fromTo(element.find('.title'), 0.5, {left: -200, alpha: 0}, {
                            left: 0,
                            alpha: 1,
                            ease: Ease.easeInOut
                        })
                        .fromTo(element.find('.subtitle'), 0.5, {left: -200, alpha: 0}, {
                            left: 0,
                            alpha: 1,
                            ease: Ease.easeInOut
                        })
                        .fromTo(element.find('.avatar'), 0.5, {left: 800, alpha: 0}, {
                            left: 300,
                            alpha: 1,
                            ease: Ease.easeInOut
                        });
                }
                else {
                    done();
                }
            }
        };
    }); 