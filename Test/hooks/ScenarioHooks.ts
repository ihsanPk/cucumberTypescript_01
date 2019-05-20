// // import { defineSupportCode } from "cucumber";
// // import { async } from "q";
// // import { Console } from "@angular/core/src/console";

// // defineSupportCode(({ registerHandler }) => {
// //   registerHandler('BeforeFeature', async() => {
// //     Console.log('Executing Before handler');
// //   })
  
// // })
// import {defineSupportCode} from 'cucumber';
// import { browser } from 'protractor';

// // const {defineSupportCode} = require('cucumber');

// defineSupportCode(function ({After}) {
//     After(function (scenario, callback) {
//         // registerListener(JsonFormatter);
//         console.log('scenario', scenario);
//     });
// });

// defineSupportCode(function ({After}) {
//     After(function (scenario, callback) {
//         console.log('scenario', scenario);
//     });
    
// });
// defineSupportCode(function ({After}) {

//     After(function (scenario) {
//         var world = this;
//         if (scenario.isFailed()) {
//             return browser.takeScreenshot().then(function (screenShot) {
//                 // screenShot is a base-64 encoded PNG
//                 world.attach(screenShot, 'image/png');
//             });
//         }
//     });
// });
// // defineSupportCode(function ({After}) {

// //     After(function (scenario) {
// //         var world = this;
// //         if (scenario.isFailed()) {
// //             return browser.takeScreenshot().then(function (screenShot) {
// //                 // screenShot is a base-64 encoded PNG
// //                 world.attach(screenShot, 'image/png');
// //             });
// //         }
// //   });
// // });


const { BeforeAll, After, AfterAll, Status } = require("cucumber");
import * as fs from "fs";
import { browser } from "protractor";
import { config } from "../steps/config";

BeforeAll({timeout: 100 * 1000}, async () => {
    await browser.get(config.baseUrl);
});

After(async function(scenario) {
    if (scenario.result.status === Status.FAILED) {
        // screenShot is a base-64 encoded PNG
         const screenShot = await browser.takeScreenshot();
         this.attach(screenShot, "reports/png");
    }
});

AfterAll({timeout: 100 * 1000}, async () => {
    await browser.quit();
});
