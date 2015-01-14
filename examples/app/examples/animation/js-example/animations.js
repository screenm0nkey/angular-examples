var courseAppAnimations = angular.module('courseAnimations', ['ngAnimate']);

/* this controls the animation for ng-view or loading views */
courseAppAnimations.animation('.view-slide-in', function () {
    return {
        enter: function (element, done) {
            console.log(".view-slide-in entering...", element);
            element.css({
                opacity: 0.2,
                position: "relative",
                top: $(window).height(),
            }).animate({
                top: 0,
                left: 0,
                opacity: 1
            }, 1000, done);
        }
    };
});

/* ng-repeat. leave and enter are triggered when filtering. move triggered when ordering list */
courseAppAnimations.animation('.repeat-animation', function () {
    return {
        enter: function (element, done) {
            console.log(".repeat-animation entering...", element);
            var width = element.width();
            element.css({
                position: 'relative',
                left: -10,
                opacity: 0
            });
            element.animate({
                left: 0,
                opacity: 1
            }, done);
        },

        leave: function (element, done) {
            console.log(".repeat-animation leave...", element);
            element.css({
                position: 'relative',
                left: 0,
                opacity: 1
            });
            element.animate({
                left: -10,
                opacity: 0
            }, done);
        },

        move: function (element, done) {
            console.log(".repeat-animation move...", element);
            try {
                element.css({
                    left: "2px",
                    opacity: 0.5
                });
                element.animate({
                    left: "0px",
                    opacity: 1
                }, done);
            }
            catch (e) {
                debugger
            }
        }
    };
});

/* ng-hide */
courseAppAnimations.animation('.hide-animation', function () {
    return {
        beforeAddClass: function (element, className, done) {
            console.log(".hide-animation beforeAddClass...", element);
            if (className == 'ng-hide') {
                element.animate({
                    opacity: 0
                }, 500, done);
            }
            else {
                done();
            }
        },
        removeClass: function (element, className, done) {
            console.log(".hide-animation removeClass...", element);
            if (className == 'ng-hide') {
                element.css('opacity', 0);
                element.animate({
                    opacity: 1
                }, 500, done);
            }
            else {
                done();
            }
        }
    };
});

/* ng-class animations */
courseAppAnimations.animation('.det-anim-js', function () {
    return {
        beforeAddClass: function (element, className, done) {
            console.log('.det-anim-js beforeAddClass', element)
            if (className == 'switching') {
                element.animate({
                    opacity: 0
                }, 500, function () {
                    element.css({opacity: 1});
                    element.find('.thumbnail').css({
                        backgroundColor: 'red'
                    });
                    setTimeout(done, 100)
                });
            }
            else {
                done();
            }
        },
        removeClass: function (element, className, done) {
            console.log('.det-anim-js removeClass', element)
            element.find('.thumbnail').css({
                backgroundColor: '#DBDBDB'
            });
            done();
        }
    }
});
