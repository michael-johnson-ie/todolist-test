describe('todoListDirectives', function() {
 
    var $rootScope;
 
    beforeEach(function() {
        module('directives');
        inject(function(_$rootScope_){
            $rootScope = _$rootScope_;
        });
    });

    it('should see if 5 equals 5', function() {
        
        var test = 5;
 
        expect(test).toEqual(5);
    });
});