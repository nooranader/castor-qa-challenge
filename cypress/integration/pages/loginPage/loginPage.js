/// <reference types="Cypress" />
var elements = require("./elements");

export default class LoginPage {
  login() {
    cy.visit("/"); //gets the url cinfiguration in cypress.json
    cy.get(elements.LOGINPAGE.EMAIL_FIELD).type(Cypress.env("username")); //gets value from env configuration in cypress.json
    cy.get(elements.LOGINPAGE.PASSWORD_FIELD).type(Cypress.env("password"));
    cy.get(elements.LOGINPAGE.LOGIN_BUTTON).click();
  }
}
