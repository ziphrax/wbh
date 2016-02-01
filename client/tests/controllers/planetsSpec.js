describe('PlanetListCtrl', function(){

  beforeEach(module('wbhClient'));

  it('should create "planets" model with 3 planets', inject(function($controller) {
    var scope = {},
        ctrl = $controller('PlanetListCtrl', {$scope:scope});

    expect(scope.planets.length).toBe(3);
  }));

});
