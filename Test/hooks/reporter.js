"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var reporter = require("cucumber-html-reporter");
var fs = require("fs");
var mkdirp = require("mkdirp");
var path = require("path");
var jsonReports = path.join(process.cwd(), "/reports/json");
var htmlReports = path.join(process.cwd(), "/reports/html");
var targetJson = jsonReports + "/cucumber_report.json";
var cucumberReporterOptions = {
    jsonFile: targetJson,
    output: htmlReports + "/cucumber_reporter.html",
    reportSuiteAsScenarios: true,
    theme: "bootstrap",
};
var Reporter = /** @class */ (function () {
    function Reporter() {
    }
    Reporter.createDirectory = function (dir) {
        if (!fs.existsSync(dir)) {
            mkdirp.sync(dir);
        }
    };
    Reporter.createHTMLReport = function () {
        try {
            reporter.generate(cucumberReporterOptions); // invoke cucumber-html-reporter
        }
        catch (err) {
            if (err) {
                throw new Error("Failed to save cucumber test results to json file.");
            }
        }
    };
    return Reporter;
}());
exports.Reporter = Reporter;
//# sourceMappingURL=reporter.js.map