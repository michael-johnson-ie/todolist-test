describe('todoList controller tests:', function() {
 
    var $compile;
    var $rootScope;
    var controller;
 
    beforeEach(function() {
            module('controllers');
            inject(function(_$rootScope_, $controller){
                scope = _$rootScope_.$new();
                controller = $controller('todoListController', {$scope: scope});
                controller.list = [
                    {task:'task 1',isDone:false},
                    {task:'task 2',isDone:true},
                    {task:'task 3',isDone:false},
                    {task:'task 4',isDone:true},
                ];
            });
    });
    it('should have a list', function() {
        var list = controller.list;
        expect(list.length).toEqual(4);
    });
    it('should be able to mark an item as done', function() {
        var task = controller.list[0];
        expect(task.isDone).toEqual(false);

        controller.setAsDone(task);

        var list = controller.list;
        expect(controller.list[0].isDone).toEqual(true);
    });
    it('should be able to add an item to a list', function() {
        controller.newTask = 'some new task';
        controller.addToList();

        var list = controller.list;

        expect(list.length).toEqual(5);
    });
    it('should not be able to add an empty item to the list', function() {
        controller.newTask = '';
        controller.addToList();

        var list = controller.list;

        expect(list.length).toEqual(4);
    });
    it('should be able to delete an item to a list', function() {
        var task = controller.list[0];
        controller.delete(task);

        var list = controller.list;
        expect(list.length).toEqual(3);
    });
    it('should throw exception if trying to delete an item that does not exist', function() {

        var task = {task:'new task', isDone:'false'};
        expect(function() {controller.delete(task)}).toThrow('[error]todoListController:delete: Item does not exist');
    });
});