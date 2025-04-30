import { NightwatchAPI, NightwatchBrowser } from "nightwatch";

function logInfo(textToLog:string, callback: Function = ()=>{}): NightwatchAPI {
    return app
      .perform(function() {
        console.log(textToLog);
        callback();
      })
  };


  exports.command = logInfo;