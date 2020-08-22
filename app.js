var app = angular.module("myapp",[]);
app.controller("contro",($scope)=>{
    $scope.owner=" 💘Ashish";
    $scope.task=[];
    $scope.addtask=function()
    {
        $scope.task.push({todoText:$scope.t,time:$scope.ti, done:false});
        $scope.t="";
        console.log();
    }

    $scope.remove = function() {
        var oldList = $scope.task;
        $scope.task = [];
        angular.forEach(oldList, function(x) {
            if (!x.done) $scope.task.push(x);
        });
    };
});