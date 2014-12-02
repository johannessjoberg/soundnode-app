'use strict';

var enableSelenium = false;

if(enableSelenium) {
    describe('Selenium suite', function() {
        var client = require('webdriverio').remote({
            desiredCapabilities: {
                browserName: 'chrome'
            }
        });

        client
            .init()
            .pause(10000);

        it("has a working expand button", function() {
            client
                // click on the maximize button
                .click('#expandApp', function(error, result) {
                    // TODO: Assess that the section is expanded.

                    // console.log('Clicked on the maximize button...');
                    // console.log('error: ' + error);
                    // console.log('result: ' + result);

                    // expect(sectionExpanded).toBe(true);
                })
                .pause(3000)
                .end();
        });
    });
}
