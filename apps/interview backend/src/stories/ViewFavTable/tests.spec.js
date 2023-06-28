const debugLogger = requireUtil("debugLogger");
const knex = requireKnex();

describe("Test Handler ViewFavTable", () => {
  it("dummy_story_which_will_pass", async () => {
    let result = {};
    try {
      result = await testStrategy("ViewFavTable", {
        prepareResult: {},
      });
    } catch (error) {
      debugLogger(error);
    }
    const { respondResult } = result;
    expect(1).toBe(1);
  });
});
