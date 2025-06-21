let earthIsRound = true; // user input
if (earthIsRound === true) {
  console.log(" that is truth");
} else {
  console.log("you are delusional");
}

function ageChecker(age) {
  if (age >= 18) {
    return "You are eligible to get a legit licence";
  } else if (age >= 16) {
    return "You can obtain a training licence";
  } else {
    return "You are not eligile to even drive";
  }
}
console.log(ageChecker(16));

function ageChecker(age) {
  switch (true) {
    case age >= 18:
      return "You are eligible to get a legit";
    case age >= 16:
      return "You can obtain a training licence";
    default:
      return "You are not eligile to even drive";
  }
}
console.log(ageChecker(17));
