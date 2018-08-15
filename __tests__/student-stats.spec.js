const StudentStats = require("../src/student-stats");
describe("Students Stats", () => {
  let statsMachine, processedData;
  beforeEach(() => {
    statsMachine = new StudentStats("../lib/data.json");
    processedData = {
      projects : {
        "project1": {
          passed: { number: 10, satisfaction: 10 },
          failed: { number: 10, satisfaction: 10 }
        }
      },
      experience: {
        1: { satisfaction: 10 },
        2: { satisfaction: 10 },
        3: { satisfaction: 10 }
      },
      demographics: {
        averageAge: 10,
        satisfaction: 10
      }
    };
  });

  it("Should load the JSON", () => {
    expect(statsMachine.data).toBeDefined();
    expect(statsMachine.data[0].name).toEqual("Miss Jermain Waters");
  });

  describe("Query project query by name", () => {
    describe("When project name does not exists", () => {
      it("Should throw an error", () => {
        expect(() => statsMachine.getProjectByName("aaa")).toThrow(
          "Invalid Project Provided"
        );
      });
    });

    describe("When project name exists", () => {
      it("Should return the correct stats", () => {
        expect(statsMachine.getProjectByName("project1")).toEqual(
          processedData.projects["project1"]
        );
      });
    });
  });
});
