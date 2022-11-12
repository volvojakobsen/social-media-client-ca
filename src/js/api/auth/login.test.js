import { login } from "./login";

const test_email = "andreas.jakobsen@noroff.no";
const test_password = "andyjako1234";
const bad_test_email = "example@gmail.no";
const bad_test_password = "pas";

const data = { email: test_email, password: test_password };

function fetchSuccess(status = 201, statusText = "fetch is ok") {
  return Promise.resolve({
    ok: true,
    status,
    statusText,
    json: () => Promise.resolve(data.token),
  });
}

function fetchFailure(status = 401, statusText = "this fetch failed") {
  return Promise.resolve({
    ok: false,
    status,
    statusText,
  });
}

describe("login", () => {
  it("will pass a token if given valid credentials", async () => {
    global.fetch = jest.fn(() => fetchSuccess(201, "fetch is ok"));
    await expect(login(test_email, test_password)).rejects.toThrow(data.token);
  });

  it("Returns an HTTP 401 error when provided with invalid credentials", async () => {
    global.fetch = jest.fn(() => fetchFailure(401, "Unauthorized"));
    await expect(login(bad_test_email, bad_test_password)).rejects.toThrow(
      "Unauthorized"
    );
  });
});
