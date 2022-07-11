# BUGGYCARSRATING
## _Santhi Varikuppala_

This framework is to test the functionalities of https://buggy.justtestit.org/
The tools used for this framework include:
- Javascript
- NodeJS
- Visual Studio Code
The installed packages in node module are:
- Cypress
- Cucumber
- cypress-mochawesome-reporter
- multiple-cucumber-html-reporter

## Setup
#### Prerequisites
-- Must have NodeJS installed.
-- Must have Visual Studio Code installed.

## Installation
Install the node modules through the VS Code Terminal
```sh
npm install
npm update
```

To run the tests there are two ways. To run the tests through the terminal use
```sh
npx cypress run
```
To run the tests through Cypress test runner use
```sh
npm run test
```
## Framework Structure
![cypreeFrameworkStructure](https://user-images.githubusercontent.com/109050601/178176044-17a2d3c7-2207-48e4-bf78-3334e94cd8e1.PNG)


https://github.com/QAtesting8540/buggycarcypressbddautomation/blob/main/cypreeFrameworkStructure.PNG

All the tests are included in the Cypress/integration folder as feature files.
The 3 different functionalities of the website has been included as a separate feature file.
The folders with the same names as the feature file will contain all the step definitions.

The pages folder has all 3 page objects and methods to call in the step definisitons.


Environment variables are stored in cypress.json under the "env" jObject.

## Reports
The cypress test runner will have an interactive report after the tests are completed with states and screenshots saved for each step.
The test run through the terminal will display the results in the terminal as well as provide a html report and cucumber-html report with screenshots of failures in .../reports/index.html, /reports/cucumber-htmlreport.html. 



