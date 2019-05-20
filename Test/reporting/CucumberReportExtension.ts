import * as fs from 'fs'
import {mkdirp} from 'mkdirp'
import * as report from 'cucumber-html-reporter'
const Cucumber = require('cucumber')

export class CucumberReportExtension{
    jsonDir=process.cwd+"/reports/json";
htmlDir=process.cwd+"/reports/html";
jsonFile=this.jsonDir+"/cucumber_report.json";

private cucumberReporterOptions={
        theme: 'bootstrap',
        jsonFile: this.jsonFile,  //'test/report/cucumber_report.json',
        output: this.htmlDir+'/cucumber_report.html',
        reportSuiteAsScenarios: true,
        launchReport: true,
        metadata: {
            "App Version":"0.3.2",
            "Test Environment": "STAGING",
            "Browser": "Chrome  54.0.2840.98",
            "Platform": "Windows 10",
            "Parallel": "Scenarios",
            "Executed": "Remote"
        }
    };
private CreateReportFile(dirName, fileName, fileContent){
//Check if directory exists
 if(!fs.existsSync(dirName))
 mkdirp.sync(dirName);
 try{
 fs.writeFileSync(fileName, fileContent);
 }
 catch(message){
 console.log("Failed to create File/Directory:"+message)
 }

}
private GenerateCucumberReport(cucumberReportOption){
	report.generate(cucumberReportOption);
  }	
  JsonFormatter = new Cucumber.JsonFormatter({
    log: jLog=>{
    this.CreateReportFile(this.jsonDir, this.jsonFile,jLog);
    this.GenerateCucumberReport(this.cucumberReporterOptions);
        }
    });
}
export let JsonFormatter = new CucumberReportExtension().JsonFormatter;