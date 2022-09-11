
const returnFirstTwoDrivers = function(drivers){
    return drivers.slice(0, 2)
}
const returnLastTwoDrivers = function(drivers){
    return drivers.slice(2, 4)
}
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]
function createFareMultiplier(x){
    return function (fare){
        return (fare * x)
    }
    
}
const fareDoubler = function(fare){
   return createFareMultiplier(2)(fare)
}
const fareTripler = function(fare){
    return createFareMultiplier(3)(fare)
 }
 function selectDifferentDrivers(drivers, y){
    return y === returnFirstTwoDrivers ? returnFirstTwoDrivers(drivers) : (returnLastTwoDrivers(drivers))
 }