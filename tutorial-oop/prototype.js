let Vehicle={
    throttle:function(vehicleName) {
        console.log(vehicleName+" throttle");
    },

    break:function(vehicleName) {
        console.log(vehicleName+" break");
    },

    numberOfSeats:0

};

let Bus={
    CompanyName: "Flixbus"
}
Bus.__proto__=Vehicle;

let Car={
    whosCar:"Daughter's car"
}
Car.__proto__=Vehicle;

Car.throttle("car");
Bus.throttle("bus");