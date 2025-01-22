import GameSavingLoader from "../GameSavingLoader";

test("Load testing", async () => {
  let data = await GameSavingLoader.load();
  let result = JSON.parse(data);

  expect(result).toHaveProperty("id");
  expect(result).toHaveProperty("created");
  expect(result).toHaveProperty("userInfo");
  expect(result).toHaveProperty("userInfo.id");
  expect(result).toHaveProperty("userInfo.name");
  expect(result).toHaveProperty("userInfo.level");
  expect(result).toHaveProperty("userInfo.points");
});
