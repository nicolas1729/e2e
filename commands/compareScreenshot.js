"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function compareScreenshot(filename, tolerance, callback) {
    var self = this, screenshotPath = 'screenshots/', resultPath = screenshotPath + 'results/' + filename;
    this.saveScreenshot(resultPath, function () {
        self.assert.screenshotEquals(filename, tolerance, function (result) {
            if (typeof callback === 'function') {
                callback.call(self, result);
            }
        });
    });
    return this; // allows the command to be chained.
}
;
exports.command = compareScreenshot;
