import { browser, element, by } from 'protractor'

export enum IdentificationType {
  Id,
  Name,
  Css,
  Xpath,
  LinkText
}

export class BasePage {

  ElementLocator(obj) {
    switch (obj.type) {
      case IdentificationType[IdentificationType.Xpath]:
        return element(by.xpath(obj.value));
      case IdentificationType[IdentificationType.Css]:
        return element(by.css(obj.value));
      case IdentificationType[IdentificationType.Id]:
        return element(by.id(obj.value));
      case IdentificationType[IdentificationType.LinkText]:
        return element(by.linkText(obj.value));
      case IdentificationType[IdentificationType.Name]:
        return element(by.name(obj.value));
      
      default:
        break;

    }
    
  }

}