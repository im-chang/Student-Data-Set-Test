// const data = require("../lib/data.json");
const processData = require("../src/process-data");
describe("Process Data", () => {
  let processedData;
  let mockData = [
    {
      name: "Miss Jermain Waters",
      age: 31,
      yearsExperience: 3,
      satisfaction: 2,
      project1: "pass",
      project2: "fail",
      project3: "fail",
      project4: "pass"
    },
    {
      name: "Juliana Runte",
      age: 42,
      yearsExperience: 3,
      satisfaction: 2,
      project1: "fail",
      project2: "fail",
      project3: "fail",
      project4: "pass"
    },
    {
      name: "Emmalee Daugherty",
      age: 25,
      yearsExperience: 2,
      satisfaction: 4,
      project1: "fail",
      project2: "pass",
      project3: "pass",
      project4: "fail"
    }
  ];
  beforeEach(() => {
    processedData = processData(mockData);
  });

  describe("Shape of processed data", () => {
    it("Should generate an object with 3 keys", () => {
      expect(Object.keys(processedData)).toEqual([
        "projects, experience, demographics"
      ]);
    });
  });
  describe("Projects", () => {
    it("should create an object for each project", () => {
      expect(Object.keys(processedData.projects)).toEqual([
        "project1",
        "project2",
        "project3",
        "project4"
      ]);
    });
    it("should calculate the average satisfaction for passing students", () => {});
    it("should calculate the average satisfaction for failed students", () => {});
  });
  describe("Experience", () => {
    it("should return average satisfaction for all years of experience present in the data", () => {
      expect(processedData.experience).toEqual({
        "2": { satisfaction: 4 },
        "3": { satisfaction: 2 }
      });
    });
  });
  describe("Demographics", () => {
    it("should return average age and satisfaction for the cohort", () => {
      expect(processedData.demographics.satisfaction).toEqual("2.7");
      expect(processedData.demographics.age).toEqual("32.7");
    });
  });
});
