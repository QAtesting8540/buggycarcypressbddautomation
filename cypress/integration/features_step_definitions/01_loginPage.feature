@E2E_Testing @UserProfile_Testing
Feature: Buggy Cars Rating UserLogin Feature

    This is to test the functionalities of the User Login

    Background: 
    Given A user opens the website


    @Login_Testing
    Scenario: An unregistered user tries to login

    When The user types unregistered username and password and clicks Login
    Then The user error message "Invalid username/password" is displayed
    
    @Login_Testing
    Scenario: A registered user tries to login

    When The user types username and password and clicks Login
    Then The user can see that they are logged in

    