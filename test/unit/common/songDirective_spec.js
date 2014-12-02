/*not testable
'use strict';

describe('Unit: songDirective', function() {
  var ele, scope;
  // Load our app
  beforeEach(module('myApp')); beforeEach(inject(function($compile, $rootScope) {
    scope = $rootScope;
    ele = angular.element(
      '<span song data-song-url="url" data-song-thumbnail="imgurl" data-song-title="title" data-song-user="user"></span>'
    );
    $compile(ele)(scope);
    scope.$apply();
  }));

  it('should display the welcome text', function() {
    scope.$apply(function() {
      scope.url = "url";
      scope.thumbnail = "thumb";
      scope.title = "title";
      scope.usert = "user";
    });
    expect(
      ele.html()
    ).toContain("Notification message");
  });
});
*/
