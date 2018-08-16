module.exports = data => {
  let ageAvg = 0;
  let satisfactionAvg = 0;
  let yearThreeAvg = 0;
  let ageArray = [];
  let satisfactionArray = [];
  let yearThreeArray = [];
  const reducer = (a, b) => a + b;
  let demographics = {};
  for (let i = 0; i < data.length; i++) {
    let age = data[i]["age"];
    let satisfaction = data[i]["satisfaction"];
    ageArray.push(age);
    satisfactionArray.push(satisfaction);
    ageAvg = ageArray.reduce(reducer) / ageArray.length;
    satisfactionAvg =
      satisfactionArray.reduce(reducer) / satisfactionArray.length;
    if (data[i].yearsExperience == 3) {
      let yearThree = data[i]["satisfaction"];
      yearThreeArray.push(yearThree);
      yearThreeAvg = yearThreeArray.reduce(reducer) / yearThreeArray.length;
    }
  }
  demographics.age = ageAvg.toFixed(1);
  demographics.satisfaction = satisfactionAvg.toFixed(1);
  return { demographics, yearThreeAvg };
};
