// logging-in.steps.js

const { loadFeature, defineFeature } = require('jest-cucumber');

const feature = loadFeature('../features/login.feature');

defineFeature(feature, (test) => {
  let passwordValidator = false;
  let accessGranted = false;

  beforeEach(() => {
    passwordValidator = false;
  });

  test('Entering a correct password', ({ given, when, then }) => {
    given('I have previously created a password', () => {
      passwordValidator = true;
    });

    when('I enter my password correctly', () => {
      accessGranted = passwordValidator;
    });

    then('I should be granted access', () => {
      expect(accessGranted).toBe(true);
    });
  });
});