# orangehrm
 OrangeHRM


<!--TODO create only 10-12 pc tests.-->


![Playwright Tests](https://github.com/Nagraggini/orangehrm/actions/workflows/playwright.yml/badge.svg)


# OrangeHRM Automation Framework

Automated UI test suite for the OrangeHRM application, designed to demonstrate proficiency in modern test automation practices.

Tested web application: https://opensource-demo.orangehrmlive.com/

## Tech Stack

- Test framework: Playwright
- Language: TypeScript
- Design pattern: Page Object Model (POM)
- Scope: Automated UI testing

## Key Features

- End-to-end testing of the appointment booking workflow
- Cross-browser testing with Chromium, Firefox, and WebKit
- Parallel test execution to optimize CI/CD pipeline performance
- Clean and maintainable test architecture using the Page Object Model

## Test Report

<!--TODO Allure Report -->

## Prerequisites

- Node.js (latest LTS version)
- npm (included with Node.js)

## Installation

Install the project dependencies and required Playwright browsers:

```bash
npm install
npx playwright install
npm install dotenv
```

## Running the Tests

Run all tests:

```bash
npx playwright test
```

Run tests in headed mode:

```bash
npx playwright test --headed
```

Open the Playwright HTML report:

```bash
npx playwright show-report
```
