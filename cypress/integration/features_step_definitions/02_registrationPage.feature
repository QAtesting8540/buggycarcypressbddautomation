@E2E_Testing @Registation_Testing
Feature: Buggy Car Rating User story Page registration
As a visitor
I want to be able to register in the website
So that I can vote for a sport car

Background: 
    Given A new user opens the website

@Registration_Testing
    Scenario: A new user enters password without uppercase
        
    When The user clicks on the Register button
    And The user enters password without uppercase and clicks Submit
    Then The user error message "InvalidPasswordException: Password did not conform with policy: Password must have uppercase characters" is displayed

@Registration_Testing
    Scenario: A new user enters password without lowercase
    
    When The user clicks on the Register button
    And The user enters password without lowecase and clicks Submit
    Then The user error message "InvalidPasswordException: Password did not conform with policy: Password must have lowercase characters" is displayed

@Registration_Testing
    Scenario: A new user enters password without special character
    
    When The user clicks on the Register button
    And The user enters password without special characters and clicks Submit
    Then The user error message "InvalidPasswordException: Password did not conform with policy: Password must have symbol characters" is displayed

@Registration_Testing
    Scenario: A new user enters password without numeric value
    
    When The user clicks on the Register button
    And The user enters password without numeric value and clicks Submit
    Then The user error message "InvalidPasswordException: Password did not conform with policy: Password must have numeric characters" is displayed    

@Registration_Testing
    Scenario: A new user enters password lessthan 8 characters
    
    When The user clicks on the Register button
    And The user enters password lessthan 8 characters and clicks Submit
    Then The user error message "InvalidPasswordException: Password did not conform with policy: Password not long enough" is displayed

@Registration_Testing
    Scenario: A new user registers a new account and edits account details
    
    When The user clicks on the Register button
    And The user enters all the details required and clicks Submit
    Then The user Registration is successful
    
@Registration_Testing
    Scenario: A user can register only once 
    
    When The user clicks on the Register button
    And The user enters existing user details required and clicks Submit
    Then The user error message "UsernameExistsException: User already exists" is displayed
        