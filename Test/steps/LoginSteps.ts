import { Given, Then, When } from "cucumber";
// import { expect } from 'chai';
import { browser,element,by } from "protractor";
import { LoginPage } from "../Pages/LoginPage";
import { when } from "q";

//data variables
const yaml = require('js-yaml');
const fs = require('fs');
let cred = yaml.safeLoad(fs.readFileSync('../testData/users.yml', 'utf8'));

const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;
const loginPage = new LoginPage();
const login: LoginPage = new LoginPage();


Given(/^I am on "(.*?)" page$/,{timeout: 5 * 5000}, async(text) => {
  try {
    await loginPage.OpenBrowser(text);
  }
  catch(e) {
    console.log(e);
  }

});

When(/^Login to QuinC with "(.*?)"$/,{timeout: 11 * 50000000}, async(text) => {
  await loginPage.enterUserName(text);
  await loginPage.enterPassword(text);
  await loginPage.clickLoginButton();
}); 
When(/^I log out$/,{timeout: 7 * 500000}, async() => {
  await loginPage.logOut();
});





