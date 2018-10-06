// add some helpful assertions
import "jest-dom/extend-expect";

// this is basically: afterEach(cleanup)
import "react-testing-library/cleanup-after-each";

// mocking fetch in test cases`
global.fetch = require("jest-fetch-mock");
