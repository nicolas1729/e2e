import { NightwatchAPI } from "nightwatch";

function login (callback: Function) {
    return app
        .url('https://github.com/login')
        .clearValue('#login_field')
        .setValue('#login_field', 'nightwatch')
        .clearValue('#password')
        .setValue('#password', 'testpassword')
        .waitForElementVisible('[value=\'Sign in\']')
}

exports.command = login;