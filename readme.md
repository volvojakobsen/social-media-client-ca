# Workflow CA

## **Test Status Badges**

[![Automated E2E Testing](https://github.com/volvojakobsen/social-media-client-ca/actions/workflows/e2e-test.yml/badge.svg)](https://github.com/volvojakobsen/social-media-client-ca/actions/workflows/e2e-test.yml)

[![Automated Unit Testing](https://github.com/volvojakobsen/social-media-client-ca/actions/workflows/unit-test.yml/badge.svg)](https://github.com/volvojakobsen/social-media-client-ca/actions/workflows/unit-test.yml)

[![Deploy static content to Pages](https://github.com/volvojakobsen/social-media-client-ca/actions/workflows/pages.yml/badge.svg)](https://github.com/volvojakobsen/social-media-client-ca/actions/workflows/pages.yml)

## **Repo Installation**

Download the repo and open project file in vsc or an other code editor.

Initialise git in the project folder.

```
git init
```

Install dependencies

```
npm i
```

Build CSS files from SASS

```
npm run build
```

To view the site using vite live server

```
npm run dev
```

Then go to url: `http://127.0.0.1:8080/` in your browser.


## **About**

This is a course assignment from noroff. the goal of the assignment is to manage workflow on a project-repo that i don't own. and make it 
run prettier, eslint, jest on commit. and configure the project for hosting using a bundler. do some unit tests and e2e-tests on pull request.

## **Tests**

### **Unit Testing, Jest**

Added the following test files;

- login.test.js
  - Tests successful login
  - Tests unsuccessful login
- logout.test.js
  - Test logout function.
- create.test.js
  - Tests successful post creation
  - Tests bad request unsuccessful post creation

To run these tests use;

```
npm run test-unit
```
### **End To End Testing, Cypress**

files for Cypress testing

- login.cy.js
  1. Tests login with valid credentials
  2. Tests login error handling with invalid email
  3. Tests login error handling with invalid password
  4. Tests login error handling with invalid password and email
- logout.cy.js
  1. Tests logout
- createPost.cy.js
  1. Tests user can create a post
  2. Tests that the user cannot post without a title
 
To run e2e tests do:

```
npm run test-e2e
```


## **Dependencies**

Dependencies used is as follows.
---

1. Prettier
2. ESlint
3. lint staged
4. Jest
5. Babel
6. Cypress
7. Bootstrap
8. SASS
9. Vite
10. husky

Github actions that is set up
---

1. Deploying to github pages
2. Running end to end testing
3. Running unit testing

