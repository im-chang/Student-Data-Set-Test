module.exports = data => {
  let ageAvg = 0;
  let satisfactionAvg = 0;
  let yearThreeAvg = 0;
  let ageArray = [];
  let satisfactionArray = [];
  let experience = {};
  // let yearThreeArray = [];
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
    yearsOfExp = data[i].yearsExperience;
    if (experience[yearsOfExp] === undefined) {
      experience[yearsOfExp] = { satisfaction: data[i].satisfaction };
    } else {
      current = experience[yearsOfExp].satisfaction;
      experience[yearsOfExp] = {
        satisfaction: (current + data[i].satisfaction) / 2
      };
    }
  }

  // if (experience[yearsOfExp] === undefined) {
  //   // yearThree = data[i]["satisfaction"];
  //   // yearThreeArray.push(yearThree);
  //   // yearThreeAvg = yearThreeArray.reduce(reducer) / yearThreeArray.length;
  // } else {
  //   current = experience[yearsOfExp];
  //   experience[yearsOfExp] = (current + data[i].satisfaction) / 2;
  // }
  // console.log(experience, "yearsofexps");
  demographics.age = ageAvg.toFixed(1);
  demographics.satisfaction = satisfactionAvg.toFixed(1);
  return { demographics, experience };
};
