```bash
OrangeHRM Playwright Automation
│
├── Login
│   ├── valid login
│   ├── invalid login
│   └── logout
│
├── PIM
│   ├── employee search
│   ├── employee details
│   ├── add employee
│   ├── edit employee
│   └── delete employee
│
├── Employee List
│   └── pagination
│
├── Admin
│   ├── user search
│   └── add user
│
└── Data-driven
    └── login / employee test data
```


TC01 Successful login test and logout
TC02 Unsuccesful login test
TC03 Data driven login test
TC04 Add new employee test and delete

TC05 Edit employee test and delete
Ez már folyamatban van.

TC06 Add new employee with details test and delete

- Csekkold, hogy minden részlet megvan-e az oldalon.
- Other Id: this.otherIdInput = page.locator("//label[normalize-space()='Other Id']//..//following-sibling::div/input");
  Driver's License Number: ide lehet kell egy \ az aposztróf elé: this.driverSLicenseNumberInput = page.locator("//label[normalize-space()="Driver's License Number"]//..//following-sibling::div/input");
  License Expiry Date: this.licenseExpiryDateInput = page.locator("//label[normalize-space()='License Expiry Date']//..//following-sibling::div//input");
  Nationality: this.nationaliryDropdownMenu = page.locator("//label[normalize-space()='Nationality']//..//following-sibling::div[normalize-space()='-- Select --']");
  Hungarian-t ki kéne választani.
  Marital Status: this.maritalStatusDropdownMenu = page.locator("//label[normalize-space()='Marital Status']//..//following-sibling::div[normalize-space()='-- Select --']");
  Ki kéne választani valamit a legördülő mezőből.
  Date of Birth: this.dateOfBirthInput = page.locator("//label[normalize-space()='Date of Birth']//..//following-sibling::div//input");
  Gender:
  Male: this.genderMaleRadioButton = page.locator("//input[@value='1']");
  Female: this.genderFemaleRadioButton = page.locator("//input[@value='2']");
  Requred Save: this.requiredSaveButton = page.locator("//p[contains(normalize-space(),' Required')]//following-sibling::button[normalize-space()='Save']");

Adj neki az Admin részen admin role-t.
this.adminButtonInSideBar = page.locator("//span[normalize-space()='Admin']");

AdminPage:
Add new admin: this.addNewAdmin = page.locator("//button[normalize-space()='Add']");

User Role: this.userRoleDropdownMenu = page.locator("//label[normalize-space()='User Role']//..//following-sibling::div[normalize-space()='-- Select --']");
Employee Name: this.addNewAdmin = page.locator("//label[normalize-space()='Employee Name']//..//following-sibling::div//input");
Status: this.statusDropdownMenu = page.locator("//label[normalize-space()='Status']//..//following-sibling::div[normalize-space()='-- Select --']");
Username: this.usernameInput = page.locator("//label[normalize-space()='Username']//..//following-sibling::div//input");
Password: this.passwordInput = page.locator("//label[normalize-space()='Password']//..//following-sibling::div//input");
Confirm Password: this.confirmPasswordInput = page.locator("//label[normalize-space()='Confirm Password']//..//following-sibling::div//input");
Requred Save: this.requiredSaveButton = page.locator("//p[contains(normalize-space(),' Required')]//following-sibling::button[normalize-space()='Save']");

Utána lépj be az új felhasználóval és menj a My Info részre.
My Info: this.myInfoButtonInSideBar = page.locator("//span[normalize-space()='My Info']");
Ugyanazok a lokátorok, mint fentebb.

TC07 Export full employee list from all pages to xlsx

TC08 Add new employee and give admin role test and delete it

- Lépj be vele és csekkold, hogy bal oldalt megjelennek-e a menüpontok.

TC09 Add new employee and give ESS user role test and delete it

- Lépj be vele és csekkold, hogy bal oldalt nem jelennik meg az admin meg PIM opció.

TC10 Bulky employee registration test and delete