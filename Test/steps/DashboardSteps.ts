import { Given, Then, When } from "cucumber";
// import { HomePage } from '../pages/homePage';
// import { expect } from 'chai';
import { browser,element,by } from "protractor";
import { DashboardPage } from "../Pages/DashboardPage";
import { when } from "q";
import { LoginPage } from "../Pages/LoginPage";

//data variables


  


const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;
const loginPage = new LoginPage();
const login: LoginPage = new LoginPage();
const dashboard = new DashboardPage();
// const login: LoginPage = new LoginPage();


Given(/^I clicked on process data$/,{timeout: 5 * 500000}, async() => {
    await dashboard.clickProcessData();
 
});


Then(/^I loged out$/, { timeout: 3 * 50000 }, async() => {
    await loginPage.logOut();
  });


