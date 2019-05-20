"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
var IdentificationType;
(function (IdentificationType) {
    IdentificationType[IdentificationType["Id"] = 0] = "Id";
    IdentificationType[IdentificationType["Name"] = 1] = "Name";
    IdentificationType[IdentificationType["Css"] = 2] = "Css";
    IdentificationType[IdentificationType["Xpath"] = 3] = "Xpath";
    IdentificationType[IdentificationType["LinkText"] = 4] = "LinkText";
})(IdentificationType = exports.IdentificationType || (exports.IdentificationType = {}));
var BasePage = /** @class */ (function () {
    function BasePage() {
    }
    BasePage.prototype.ElementLocator = function (obj) {
        switch (obj.type) {
            case IdentificationType[IdentificationType.Xpath]:
                return protractor_1.element(protractor_1.by.xpath(obj.value));
            case IdentificationType[IdentificationType.Css]:
                return protractor_1.element(protractor_1.by.css(obj.value));
            case IdentificationType[IdentificationType.Id]:
                return protractor_1.element(protractor_1.by.id(obj.value));
            case IdentificationType[IdentificationType.LinkText]:
                return protractor_1.element(protractor_1.by.linkText(obj.value));
            case IdentificationType[IdentificationType.Name]:
                return protractor_1.element(protractor_1.by.name(obj.value));
            default:
                break;
        }
    };
    return BasePage;
}());
exports.BasePage = BasePage;
//# sourceMappingURL=BasePage.js.map