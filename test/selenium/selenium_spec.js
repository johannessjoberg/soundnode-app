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
