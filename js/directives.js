angular.module("directives")

.directive("todoList", ['todoListService', function(todoListService)
{
    return {
        restrict:"A",
        scope: true,
        controller: 'todoListController',
        controllerAs: 'tlc',
        bindToController: true,
        link: function(scope, element, attr, ctrl) {
            ctrl.list = todoListService.getList();
        }
    }
}]);