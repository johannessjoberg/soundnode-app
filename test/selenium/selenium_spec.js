'use strict';

var assert = require('assert');

describe('Selenium suite', function(done) {
    it("has a working expand button", function(done) {
        browser
            .pause(5000)
            // Click on the maximize button.
            .click('#expandApp', function(error, result) {
                // TODO: Assess that the section is expanded.

                // console.log('Clicked on the maximize button...');
                // console.log('error: ' + error);
                // console.log('result: ' + result);

                // expect(sectionExpanded).toBe(true);
            })
            .call(done);
    });
});
