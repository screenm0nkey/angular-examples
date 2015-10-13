function getRegularArray(size){
    var res = [];
    for(var i=0;i<size;i++){
        res.push({
            text: i,
            size: ~~(Math.random()*100 + 50)
        });
    }
    console.log(res)
    return res;
}


function appController($scope, $location){
    $scope.items = {
        collection: getRegularArray(1000)
    };
    $scope.$root.arraySize = 1000;
    $scope.switchCollection = function(){
        var parsed = parseInt($scope.newArray.size, 10);
        if(!isNaN(parsed)){
            $scope.$root.arraySize = parsed;
            $scope.items = {
                collection: getRegularArray(parsed)
            };
        }
    };
    $scope.getDomElementsDesc = function(){
        var arr = [];
        var elems = document.querySelectorAll('.item-element.well');
        elems = Array.prototype.slice.call(elems);
        elems.forEach(function(item){
            arr.push(item.innerHTML.trim());
        });
        return arr;
    }
    $scope.newArray = {};
    $scope.inputKeyDown = function(e){
        if(e.keyCode == 13)
            $scope.switchCollection();
    };

    $scope.outerArray = getRegularArray(2);
    $scope.thirdArray = getRegularArray(30);

    $scope.$watch(function(){
        return $location.search();
    }, function(obj){
        if(obj.tab)
            $scope.tab = obj.tab + '';
    }, true);

    $scope.$watch('tab', function(tab){
        $location.search({tab: tab});
    });
}

function PerfController($scope){
    function getArray(size){
        var arr = [];
        for(var i=0;i<size;i++){
            arr.push({
                a: '',
                b: ''
            })
        }
        return arr;
    }
    $scope.$watch('arraySize', function(s){
        $scope.bar = getArray(+s);
    });
    var interval = setInterval(function interval(){
        var t1 = Date.now();
        $scope.$digest();
        $scope.digestDuration = (Date.now() - t1);
    }, 1000);
    $scope.$on('$destroy', function(){
        clearInterval(interval);
    });
}

angular.module('app', ['vs-repeat'])
    .controller('appController', appController)
    .controller('PerfController', PerfController);