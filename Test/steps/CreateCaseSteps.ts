import { Given, Then, When } from "cucumber";
// import { HomePage } from '../pages/homePage';
// import { expect } from 'chai';
import { browser,element,by } from "protractor";
import { CreateCasePage } from "../Pages/CreateCasePage";
import { when } from "q";
import { create } from "domain";

//data variables

  


const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;
const createCase = new CreateCasePage();


When(/^I entered case name "(.*?)"$/,{timeout: 7 * 500000}, async(caseText) => {
  await createCase.enterCaseName(caseText);
  await createCase.saveCase();
});





