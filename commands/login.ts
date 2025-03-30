import { NightwatchAPI, NightwatchBrowser } from "nightwatch";

export function wplogin (app: NightwatchAPI,  callback: Function) {
    return app
        .url('https://github.com/login')
        .clearValue('#login_field')
        .setValue('#login_field', 'nightwatch')
        .clearValue('#password')
        .setValue('#password', 'testpassword')
        .waitForElementVisible('[value=\'Sign in\']')
}