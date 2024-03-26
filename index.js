const scuberHeadquaters = 42;
function distanceFromHqInBlocks(number) {
  let distanceFromHqInBlocks = Math.abs(number - scuberHeadquaters);
  return distanceFromHqInBlocks;
}

function distanceFromHqInFeet(distance) {
  let distancefeet = distanceFromHqInBlocks(distance) * 264;

  return distancefeet;
}

function distanceTravelledInFeet(start, endpoint) {
  let distancefeet = Math.abs(endpoint - start) * 264;
  return distancefeet;
}

function calculatesFarePrice(start, destination){
  let distanceinfeet = distanceTravelledInFeet(start, destination);
  let fare;
  if (distanceinfeet < 400) {
    console.log("'gives customers a free sample'");
    fare = 0;
  } else if (distanceinfeet > 400 && distanceinfeet < 2000) {
    fare = ((distanceinfeet - 400) * 2) / 100;
  } else if (distanceinfeet > 2000 && distanceinfeet <= 2500) {
    fare = 25;
  } else if (distanceinfeet > 2500) {
    fare = "cannot travel that far";
  }
  return fare;
}
