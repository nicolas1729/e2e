import * as NW from "nightwatch";
export {};

// merge interfaces with nightwatch types
declare module "nightwatch" {
    export interface NightwatchCustomAssertions {
        screenshotEquals(this: NW.NightwatchBrowser, filename: string, tolerance?: number, callback?: Function): NW.NightwatchBrowser;
    }

    export interface NightwatchCustomCommands {
        wplogin(this: NW.NightwatchBrowser, callback?: Function): NW.NightwatchBrowser;
        login(this: NW.NightwatchBrowser, callback?: Function): NW.NightwatchBrowser;
        compareScreenshot(this: NW.NightwatchBrowser, filename: string, tolerance?: number, callback?: Function): NW.NightwatchBrowser
    }
}