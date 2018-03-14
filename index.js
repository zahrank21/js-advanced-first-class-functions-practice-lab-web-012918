// Code your solution in this file!

const callback = function(el, i, arr){
  console.log(el.name)
}
function logDriverNames(drivers){
  drivers.forEach(callback);
}

function logDriversByHometown(drivers, location){

  drivers.forEach(function (driver){
    if (driver.hometown === location){
      console.log(driver.name)
    }
  })
}

function driversByRevenue(drivers){
  return drivers.slice().sort(function(driver1, driver2){
    return driver1.revenue - driver2.revenue;
  })
}

function driversByName(drivers){
  return drivers.slice().sort(function(driver1, driver2){
    return driver1.name.localeCompare(driver2.name)
  })
}

function totalRevenue(drivers){
  return drivers.reduce(function (total, driver){
    return driver.revenue + total;
  },0)
}

function averageRevenue(drivers){
  return totalRevenue(drivers) / drivers.length;
}
