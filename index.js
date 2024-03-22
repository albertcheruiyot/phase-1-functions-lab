// Code your solution in this file!
 let pickupLocation, start, destination;

 function distanceFromHqInBlocks(pickupLocation) {
    //returns the number of blocks given a value
    const headquarters = 42;
    return Math.abs(pickupLocation-headquarters);
  }
  function distanceFromHqInFeet(pickupLocation) {
    let blocks = distanceFromHqInBlocks(pickupLocation);
    // call the distanceFromHqInBlocks function from inside the distanceFromHqInFeet function,
    // passing the argument from distanceFromHqInFeet into distanceFromHqInBlocks
    // the return value of distanceFromHqInBlocks can then be used to calculate feet
    return blocks * 264;
  }
  function distanceTravelledInFeet(start, destination) {
    //returns the number of feet traveled
    let distanceBlocks = Math.abs(destination-start);
    return distanceBlocks * 264;
  }
  function calculatesFarePrice(start, destination) {
    //returns the fare for the customer
    let distance = distanceTravelledInFeet(start, destination);
    if (distance <= 400) {
        return 0;
      } else if (distance > 400 && distance <= 2000) {
        return (distance-400) * 0.02;
      } else if (distance>2000 && distance<=2500) {
        return 25;
      } else if(distance>2500){
        return "cannot travel that far";
      }
  }

  console.log(distanceFromHqInBlocks(50));
  console.log(distanceFromHqInFeet(50));
  console.log(distanceTravelledInFeet(34,38));
  console.log(calculatesFarePrice(34,38));