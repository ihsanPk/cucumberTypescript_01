"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var path = require("path");
var protractor_1 = require("protractor");
var reporter_1 = require("../hooks/reporter");
var jsonReports = process.cwd() + "/reports/json";
exports.config = {
    defaultTimeoutInterval: 144550000,
    seleniumAddress: "http://127.0.0.1:4444/wd/hub",
    SELENIUM_PROMISE_MANAGER: false,
    baseUrl: "https://www.google.com/",
    capabilities: {
        browserName: 'chrome'
    },
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    // framework: "custom",
    // frameworkPath: require.resolve("protractor-cucumber-framework"),
    specs: [
        "../features/*.feature",
    ],
    onPrepare: function () {
        protractor_1.browser.ignoreSynchronization = true;
        protractor_1.browser.manage().window().maximize();
        protractor_1.browser.manage().timeouts().setScriptTimeout(6000000);
        reporter_1.Reporter.createDirectory(jsonReports);
    },
    // cucumberOpts: {
    //     compiler: "ts:ts-node/register",
    //     // format: ['pretty'],
    //     require: ["../steps/*.js","../hooks/*.js"],
    //     strict: true,
    //     tags: false
    // },
    cucumberOpts: {
        // required step definitions
        compiler: [],
        require: ['../steps/*.js',
            path.resolve(process.cwd(), './/Test/steps/*.js'),
        ],
        removeOriginalJsonReportFile: true,
        format: "json:./reports/json/cucumber_report.json",
        strict: true,
        dryRun: false,
        tags: []
    },
    onComplete: function () {
        reporter_1.Reporter.createHTMLReport();
    },
    // };
    plugins: [{
            package: require.resolve('protractor-multiple-cucumber-html-reporter-plugin'),
            options: {
                automaticallyGenerateReport: true,
                removeExistingJsonReportFile: true,
                openReportInBrowser: true,
                pageTitle: 'QUIN-C',
                reportName: 'QUIN-C Test Report',
                //jsonOutputPath: './features',     //?featuresJsonPath 
                removeOriginalJsonReportFile: true,
                //pageFooter: '<div class= "text-center"><b> Its a Footer</b></div><img src="" width="400" height="400">', 
                displayDuration: true,
            }
        }],
    getPageTimeout: 30000,
};
//# sourceMappingURL=config.js.map