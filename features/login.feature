Feature: Logging in

Scenario: Logging in - Entering a correct password
    Given I have previously created a password
    When I enter my password correctly
    Then I should be granted access
