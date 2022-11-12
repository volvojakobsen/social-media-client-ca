import { logout } from "./logout";
import { save } from "../../storage/save";
import { load } from "../../storage/load";

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTE0LCJuYW1lIjoiYW5keWpha28iLCJlbWFpbCI6ImFuZHJlYXMuamFrb2JzZW5Abm9yb2ZmLm5vIiwiYXZhdGFyIjoiaHR0cHM6Ly9pLnBpY3N1bS5waG90b3MvaWQvMjM3LzIwMC8zMDAuanBnP2htYWM9VG1tUVNiU2hIejlDZFFtME5rRWp4MUR5aF9ZOTg0UjlMcE5ycHZIMkRfVSIsImJhbm5lciI6bnVsbCwiaWF0IjoxNjY3Njg2NjM5fQ.BYwkSZbCxhoOezhK4_onL-70hVwCiRs4TyoZiKVNZqw";

class LocalStorageMock {
  constructor() {
    this.store = {};
  }
  clear() {
    this.store = {};
  }
  getItem(key) {
    return this.store[key] || null;
  }
  setItem(key, value) {
    this.store[key] = String(value);
  }
  removeItem(key) {
    delete this.store[key];
  }
}

global.localStorage = new LocalStorageMock();

describe("logout", () => {
  it("removes the token from local storage", () => {
    const key = "token";
    save(key, token);
    expect(load(key)).toEqual(token);
    logout();
    expect(load(key)).toEqual(null);
  });
});
