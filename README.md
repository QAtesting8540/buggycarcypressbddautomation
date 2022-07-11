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
npm test
```
To run the tests through Cypress test runner use
```sh
npx cypress open
```
## Framework Structure
![cypressBddFrameworkStructure](https://user-images.githubusercontent.com/109050601/178246024-c1d8d466-a0f4-4620-8a11-9cbb2a220a38.PNG)


Automation framework is developed in BDD page object modal using Cypress and Cumcumber.
All the tests are included in the Cypress/integration folder has features_step_definitions and pages.
The 3 (Login, registration and voting) different functionalities of the website has been included as a separate feature file.
The folders with the same names as the feature file will contain all the step definitions.

The pages folder has all 3 page objects and methods to call in the step definisitons.


Environment variables are stored in cypress.json under the "env" jObject.

## Reports
The cypress test runner will have an interactive report after the tests are completed with states and screenshots saved for each step.
The test run through the terminal will display the results in the terminal as well as provide a html report and cucumber-html report with screenshots of failures in .../reports/index.html, /reports/cucumber-htmlreport.html. 

![multipleCucumberHtmlDashboardReport](https://user-images.githubusercontent.com/109050601/178177309-78f4f379-87c8-4850-af29-e1bf193db1b0.PNG)

![pageregistrationscenarios](https://user-images.githubusercontent.com/109050601/178177340-40188f97-4a55-4f93-b73d-d6afb9f4cac6.PNG)

![pageregistrationscenarios-page1](https://user-images.githubusercontent.com/109050601/178177356-5fc44039-0cdd-4152-aeb5-29914e4b65f3.PNG)



