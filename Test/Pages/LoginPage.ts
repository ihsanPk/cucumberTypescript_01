import { browser, element, by, protractor } from 'protractor'
import { IdentificationType, BasePage } from './BasePage';
const chai = require("chai").use(require("chai-as-promised"));

//data variables
const yaml = require('js-yaml');
const fs = require('fs');
let cred = yaml.safeLoad(fs.readFileSync('../testData/users.yml', 'utf8'));

const expect = chai.expect;

const Locators = {
  usernameField: {
    type: IdentificationType[IdentificationType.Name],
    value:"Username"   
  },
  passwordField: {
    type: IdentificationType[IdentificationType.Name],
    value:"Password"   
  },
  loginButton: {
    type: IdentificationType[IdentificationType.Id],
    value:"submit_button"   
  }, 
  logoutButton: {
    type: IdentificationType[IdentificationType.Id],
    value:"logoutbutton"   
  }


}

export class LoginPage extends BasePage{

  usernameField = this.ElementLocator(Locators.usernameField);
  passwordField = this.ElementLocator(Locators.passwordField);
  loginButton = this.ElementLocator(Locators.loginButton);
  logoutbutton = this.ElementLocator(Locators.logoutButton);
  
  async OpenBrowser(url: string) {
    browser.ignoreSynchronization = true;
    await browser.get(url);
    
  }
  async enterUserName(name: string){ 
    let userName = 'username';  
    await this.usernameField.sendKeys(cred[name][userName]);  		
  }
  async enterPassword(passwordText: string){
    let pass = 'password';  
    await this.passwordField.sendKeys(cred[passwordText][pass]);
  }
  async clickLoginButton(){
     await this.loginButton.click();
     var until = protractor.ExpectedConditions;
	   await browser.wait(until.presenceOf(element(by.id('desktop'))), 500000000, 'Element taking too long to appear in the DOM');
     browser.ignoreSynchronization = false;
     await browser.wait(until.presenceOf(element(by.id('desktop_body'))), 70000000, 'Element taking too long to appear in the DOM');
    //  desktop_body
  }
   logOut(){
       this.logoutbutton.click();  
    }
  
}
