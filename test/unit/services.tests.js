describe('services test', function(){
        beforeEach(module('services'));

        it('returns a populated list', inject(function(todoListService){ //parameter name = service name
            expect( todoListService.getList().length ).toBeGreaterThan(0);
        }))
});