'use strict';

var assert = require('assert'),
    DELAY = 5000,
    assertNoError = function(e, r) { assert(e == undefined); };

describe('Selenium suite', function(done) {
    it("has working show/hide buttons for playlists", function(done) {
        browser
            .pause(DELAY)
            .click('a[ui-sref="playlists"] span', assertNoError) // Playlists
            .pause(DELAY)
            .getCssProperty('li.songList_item', 'height', function(e, r) {
                assert(r[0].value === '15px');
            })
            .click('h4.songList_item_song_user span', assertNoError) // Show
            .pause(DELAY)
            .getCssProperty('li.songList_item', 'height', function(e, r) {
                assert(parseInt(r[0].value) > 15);
            })
            .click('h4.songList_item_song_user span', assertNoError) // Hide
            .pause(DELAY)
            .getCssProperty('li.songList_item', 'height', function(e, r) {
                assert(r[0].value === '15px');
            })
            .click('h4.songList_item_song_user span', assertNoError) // Show
            .pause(DELAY)
            .getCssProperty('li.songList_item', 'height', function(e, r) {
                assert(parseInt(r[0].value) > 15);
            })
            .call(done);
    });
});

// The code commented below is kept for future reference.

// The below "selenium-webdriver" code is supposed to switch between the
// windows and click an 'Authorize' button. However, for some reason, this
// fails with "NoSuchWindowError: no such window".

// driver.getAllWindowHandles().then(function(handles) {
//     for(var handle in handles) {
//         driver.switchTo().window(handle);
//         driver.findElement(webdriver.By.id('authorize')).click();
//     }
//     driver.switchTo().defaultContent();
// }

//===========================================================================
//===========================================================================
//===========================================================================

// Now, we're using "webdriverio" instead of "selenium-webdriver".

// var client = require('webdriverio').remote({
//     desiredCapabilities: {
//         browserName: 'chrome'
//     }
// });

//===========================================================================
// client
//     .init()
//     .pause(10000)
//     .click('a.user_logOut', function(error, result) {})
//     .pause(1000)
//     .end();
//===========================================================================

//===========================================================================
// Like test
// Assumption: The value item to be liked is not already liked!

// searchVal = 'golzar';
//
//client
// .init()
// .pause(4000)
//
// // click on the likes
// .click('a[ui-sref="favorites"] span', function(error, result) {})
// .pause(4000)
//
// //search for the searchVal variable
// .setValue('input#search', searchVal, function (err, res) {
//     console.log('setting search value.. ');
// })
//
// .addValue('input#search', 'Enter', function (err, res) {
//     console.log('Entering the search.. ');
// })
// .pause(4000)
//
// // like the first search result
// .click ('a[data-favorite-action="save"]', function(error, result) {
//      console.log('liked the first search item...');
//   //console.log('like error: ' + error);
//   //console.log('like result: ' + result);
// })
// .pause(4000)
//
// // click on the likes
// .click('a[ui-sref="favorites"] span', function(error, result) {})
// .pause(3000)
// .end();
//===========================================================================

//===========================================================================
// Dislike test
// Assumption: There is an item to be disliked!
//client
//  .init()
//  .pause(4000)
//  // click on the likes
//  .click('a[ui-sref="favorites"] span', function(error, result) {})
//  .pause(4000)
//  // disklike the first item in the likes list
//  .click('a[data-favorite-action="delete"]', function(error, result) {
//      console.log('Disliked the first item ...');
//      console.log('Dislike error: '+ error);
//      console.log('Dislike result: ' + result);
//  })
//  .pause(9000)
//  .end();
//===========================================================================

//===========================================================================
//About test
//Assumption: none
//client
//  .init()
//  .pause(4000)
//  .pause(4000)
//  // click on about
//  .click('a[ng-click="toggleAboutView()"]', function(error, result) {
//      console.log('Clicked on about ...');
//      console.log('Click error: '+ error);
//      console.log('Click result: ' + result);
//  })
//  .pause(2000)
//
//  // click on about
//  .click('a[ng-click="toggleAboutView()"]', function(error, result) {
//      console.log('Clicked on about ...');
//      console.log('Click error: '+ error);
//      console.log('Click result: ' + result);
//  })
//  .pause(2000)
//  .end();
//===========================================================================

//===========================================================================
//Stream test
//Assumption: the user follows anther user already.
//  client
//   .init()
//   .pause(4000)
//   // click on the likes
//   .click('a[ui-sref="favorites"] span', function(error, result) {
//       console.log('Went to the likes...');
//
//   })
//
//   .pause(4000)
//  // click on the Stream
//   .click('a[ui-sref="stream"] span', function(error, result) {
//       console.log('Went to the stream...');
//   })
//
//   .pause(4000)
//   //like the first stream item
//   .click ('a[data-favorite-action="save"]', function(error, result) {
//       console.log('liked the first stream item...');
//   })
//
//   .pause(4000)
//   // click on the likes again to see the added item
//   .click('a[ui-sref="favorites"] span', function(error, result) {
//           console.log('Went to the likes to see the added item...');
//   })
//
//   .pause(3000)
//   //disklike the item to go back to the previous state
//   .click('a[data-favorite-action="delete"]', function(error, result) {
//       console.log('Disliked the first item ...');
//   })
//   .pause(3000)
//   .end();
//===========================================================================

//===========================================================================
//Go back and forward test
//Assumption: none
// client
// .init()
// .pause(4000)
// // click on the likes
// .click('a[ui-sref="favorites"] span', function(error, result) {
//     console.log('Went to the likes...');
// })
//
// .pause(2000)
// // click on the Stream
// .click('a[ui-sref="stream"] span', function(error, result) {
//     console.log('Went to the stream...');
// })
//
// .pause(2000)
// //Click on back button
// .click ('li[class="windowAction_item navigationButton goBack"] i',function(error, result) {
//     console.log('Clicked the back button...');
//     console.log('error: ' + error);
//     console.log('result: ' + result);
// })
//
// .pause(2000)
// //Click on back button
// .click ('li[class="windowAction_item navigationButton goForward"] i',function(error, result) {
//     console.log('Clicked the forward button...');
// })
// .pause(2000)
// .end();
//===========================================================================

//===========================================================================
//Test Minimize button
//Assumption: none
  //client
  //.init()
  //.pause(6000)
  //// click on the minimize button
  //.click('#minimizeApp', function(error, result) {
  //    console.log('Clicked on the minimize button...');
  //    console.log('error: ' + error);
  //    console.log('result: ' + result);
  //})
  //.pause(3000)
  //.end();
//===========================================================================

//===========================================================================
//Test expand button
//Assumption: none
  // client
  //   .init()
  //   .pause(6000)
  //   // click on the maximize button
  //   .click('#expandApp', function(error, result) {
  //       console.log('Clicked on the maximize button...');
  //       console.log('error: ' + error);
  //       console.log('result: ' + result);
  //   })
  //   .pause(3000)
  //   .end();
//===========================================================================
