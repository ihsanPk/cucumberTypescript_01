import { browser, element, by, protractor } from 'protractor'
import { IdentificationType, BasePage } from './BasePage';
const chai = require("chai").use(require("chai-as-promised"));

//data variables


const expect = chai.expect;

const Locators = {
   adminIcon: {
    type: IdentificationType[IdentificationType.Id],
    value:"desktopiconroles"   
  },
  processDataIcon: {
    type: IdentificationType[IdentificationType.Id],
    value:"processdata_icon"   
  },
  processDataWindow: {
    type: IdentificationType[IdentificationType.Id],
    value:"processingoptions"   
  }

}

export class DashboardPage extends BasePage{

  adminIcon = this.ElementLocator(Locators.adminIcon);
  processDataIcon = this.ElementLocator(Locators.processDataIcon);
  async clickOnAdmin() {
    await this.adminIcon.click();   
  }
  async clickProcessData() {
    await this.processDataIcon.click();   
    await expect(this.processDataIcon.isPresent()).to.eventually.equal(true);
    
  }
    
  
}
