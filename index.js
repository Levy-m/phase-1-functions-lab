// Code your solution in this file!
function distanceFromHqInBlocks(block) {
    const hqLocation = 42;
    return Math.abs(block - hqLocation)
}

function distanceFromHqInFeet(feet) {
      const foot = distanceFromHqInBlocks(feet)
    return foot * 264;
}
function distanceTravelledInFeet(start, destination) {
    const blocksTravelled = Math.abs(start - destination)
    return blocksTravelled * 264;
}
function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination) 

  if ( distance <= 400 ) {
    return 0;
 } else if (distance > 400 && distance <= 2000) {
     return (distance - 400) * 0.02;
 } else if (distance > 2000 && distance <= 2500) {
     return 25;
 } else {
     return 'cannot travel that far'
 }

}
