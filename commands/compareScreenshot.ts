import { NightwatchAPI } from "nightwatch";

function compareScreenshot (this: NightwatchAPI, filename:string, tolerance:number, callback:Function) {
    var self = this,
        screenshotPath = 'screenshots/',
        resultPath = screenshotPath + 'results/' + filename;

    this.saveScreenshot(resultPath, function () {
        /*self.assert.screenshotEquals(filename, tolerance, function (result: any) {
            if (typeof callback === 'function') {
                callback.call(self, result);
            }
        });*/
    });

    return this; // allows the command to be chained.
};

exports.command = compareScreenshot;