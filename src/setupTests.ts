// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom";

import { server as mswServer } from "./mocks/server";
import { setupAxios } from "./services";

beforeAll(() => {
  setupAxios();
  mswServer.listen();
});
afterEach(() => mswServer.resetHandlers());
afterAll(() => mswServer.close());
