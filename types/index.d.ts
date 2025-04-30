import * as NW from "nightwatch";
export {};

// merge interfaces with nightwatch types
declare module "nightwatch" {
    export interface NightwatchCustomAssertions {
        screenshotEquals(this: NW.NightwatchAPI, filename: string, tolerance?: number, callback?: Function): NW.NightwatchAPI;
    }

    export interface NightwatchCustomCommands {
        wplogin(callback?: Function): NW.NightwatchAPI;
        login(callback?: Function): NW.NightwatchAPI;
        logInfo(textToLog:string, callback?: Function): NW.NightwatchAPI
        compareScreenshot(this: NW.NightwatchAPI, filename: string, tolerance?: number, callback?: Function): NW.NightwatchAPI
    }
}