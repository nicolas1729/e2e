"use strict";
module.exports = {
    'Demo test Google': function (client) {
        console.log("toti");
        client
            .url('https://www.google.com')
            .pause(10000)
            .waitForElementVisible('body', 3000)
            .assert.title('Google')
            .assert.visible('input[type=text]')
            .setValue('input[type=text]', 'rembrandt van rijn')
            .setValue('input[type=text]', client.Keys.ENTER) // press Enter to search
            .pause(1000)
            .assert.containsText('#rso a:first-child', 'Rembrandt — Wikipédia', 'got french wikipedia website because of GeoLoc IP, you may get something different')
            .end();
    }
};
