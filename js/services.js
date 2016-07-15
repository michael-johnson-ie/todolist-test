angular.module("services")

.factory("todoListService", [function()
{
    return {
        getList: function()
        {
            return [
                {task:'Make a sandwich', isDone: false},
                {task:'Devour that sandwich', isDone: false},
                {task:'Write some tests', isDone: true},
                {task:'Eat and hydrate before dev meeting', isDone: false}
            ];
        }
    }
}]);