angular.module("controllers")

.controller('todoListController', ['$scope', function($scope)
{
    var tlc = this;

    tlc.list = [];
    tlc.newTask = '';

    tlc.addToList = function() {
        if(tlc.newTask) {
            tlc.list.push({task:tlc.newTask, isDone:false});
            tlc.newTask = '';
        }
    }
    tlc.delete = function(item) {
        var index = tlc.list.indexOf(item);
        if(index > -1) {
            tlc.list.splice(index, 1);
        }
        else {
            throw('[error]todoListController:delete: Item does not exist');
        }
    }
    tlc.setAsDone = function(item) {
        item.isDone = true;
    }
}]);