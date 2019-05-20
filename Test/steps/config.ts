import * as path from "path";
import { browser, Config } from "protractor";
import { Reporter } from "../hooks/reporter";
const jsonReports = process.cwd() + "/reports/json";

export const config: Config = {
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

    onPrepare: () => {
        browser.ignoreSynchronization = true;
        browser.manage().window().maximize();
        browser.manage().timeouts().setScriptTimeout(6000000);
        Reporter.createDirectory(jsonReports);
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
        require : [ '../steps/*.js',
        path.resolve(process.cwd(), './/Test/steps/*.js'),
         ],
         removeOriginalJsonReportFile : true,
        format: "json:./reports/json/cucumber_report.json",
        strict  : true,
        dryRun  : false,
        tags    : []
      },
      onComplete: () => {
        Reporter.createHTMLReport();
    },
// };
plugins: [{
  package: require.resolve('protractor-multiple-cucumber-html-reporter-plugin'),
      options:{
      automaticallyGenerateReport: true,
      removeExistingJsonReportFile: true,
      openReportInBrowser: true,
      pageTitle : 'QUIN-C',
      reportName :'QUIN-C Test Report',
   
      //jsonOutputPath: './features',     //?featuresJsonPath 
      removeOriginalJsonReportFile: true, //! This Option will Delete Generated Json File
      //pageFooter: '<div class= "text-center"><b> Its a Footer</b></div><img src="" width="400" height="400">', 
      displayDuration:true,
      // TODO overrideStyle: 'path of css file' 
 



      }
  }],
  getPageTimeout: 30000,
  };
