var Surface = require("./surface.js");

var method = Navigatr.prototype;

function Navigatr() {
    this.xAxis;
    this.yAxis;
    this.direction;
}

method.setPosition = function (x, y, direction) {
    this.xAxis = new Surface(x);
    this.yAxis = new Surface(y);
    this.direction = direction;
}

method.getCurrentDirection = function () {
    return this.direction;
}

method.move = function () {
    switch (this.direction) {
        case "EAST":
            this.xAxis.increment();
            break;
        case "WEST":
            this.xAxis.decrement();
            break;
        case "NORTH":
            this.yAxis.increment();
            break;
        case "SOUTH":
            this.yAxis.decrement();
            break;
    }
}

method.setDirection = function (dir) {
    switch (this.direction) {
        case "EAST":
            this.direction = (dir === "LEFT") ? "NORTH" : "SOUTH";
            break;
        case "WEST":
            this.direction = (dir === "LEFT") ? "SOUTH" : "NORTH";
            break;
        case "NORTH":
            this.direction = (dir === "LEFT") ? "WEST" : "EAST";
            break;
        case "SOUTH":
            this.direction = (dir === "LEFT") ? "EAST" : "WEST";
            break;
    }
}

module.exports = Navigatr;