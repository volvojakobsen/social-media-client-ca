import { createPost } from "./create";

const title = "jest-test";
const tags = "taggg";
const URL =
  "https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/homepage/families-gallery/2022/04_12/family_chooser_tecnica_m.png";
const body = "lorem ipsum";

const response = { title: title, tags: tags, media: URL, body: body };

const fetchSuccess = () => {
  return Promise.resolve({
    ok: true,
    status: 200,
    statusText: "OK",
    json: () => Promise.resolve({ ...response }),
  });
};

const fetchFail = () => {
  return Promise.resolve({
    ok: false,
    status: 404,
    statusText: "no response",
  });
};

describe("Create posts", () => {
  it("Returns a response when given valid inputs", async () => {
    global.fetch = jest.fn(() => fetchSuccess());
    const item = await createPost(title, tags, URL, body);
    expect(item).toEqual(response);
    expect(item.media).toMatch(/.(jpg|jpeg|png|gif)/);
    expect(item.title).toBeDefined();
  });

  it("fails to fetch and returns 'no response'", async () => {
    global.fetch = jest.fn(() => fetchFail());
    await expect(createPost()).rejects.toThrow("no response");
  });
});
