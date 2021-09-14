// Code your solution in this file!
const returnFirstTwoDrivers = function(drivers) {
    // let i = 0;
    // while i < 2 do {
    //     return drivers[i];
    //     i++;
    // }
    return drivers.slice(0, 2);
};

const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(2, 4)
    // return drivers.slice(-2)
};

const selectingDrivers = [ returnFirstTwoDrivers, returnLastTwoDrivers ];

const createFareMultiplier = function(numInt){
    return function(cost) {
        return numInt * cost;
    }
}

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = function(drivers, returnFirstTwoDrivers) {
    return returnFirstTwoDrivers(drivers);
}