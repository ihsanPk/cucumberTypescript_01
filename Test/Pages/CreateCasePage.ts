import { browser, element, by, protractor } from 'protractor'
import { IdentificationType, BasePage } from './BasePage';
const chai = require("chai").use(require("chai-as-promised"));

//data variables
const yaml = require('js-yaml');
const fs = require('fs');
let cases = yaml.safeLoad(fs.readFileSync('../testData/case.yml', 'utf8'));

const expect = chai.expect;

const Locators = {
  case_name: {
    type: IdentificationType[IdentificationType.Id],
    value:"processdatacasestbodyname"   
  },
  create_case_button: {
    type: IdentificationType[IdentificationType.Id],
    value:"processdatacasestbodycreate"   
  }

}

export class CreateCasePage extends BasePage{

  case_name = this.ElementLocator(Locators.case_name);
  create_case_button = this.ElementLocator(Locators.create_case_button);
  
  async enterCaseName(caseName: string) {
    let casenames = 'casename';  
    await this.case_name.sendKeys(cases[caseName][casenames]);      
    }
   async saveCase() {
     await this.create_case_button.click();    
     }
  
}