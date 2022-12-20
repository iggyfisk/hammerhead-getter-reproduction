# Getter bug reproduction

* Run `yarn install`
* Run `yarn start`
* Open http://127.0.0.1:1234, the text should read "foo"
* In a new terminal, run `yarn test`
* The text reads "undefined" when accessed via testcafe.

When running in testcafe, the private class member is undefined in getters/setters. (The setter reproduction can be viewed in the console)
