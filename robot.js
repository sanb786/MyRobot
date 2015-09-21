var method = Robot.prototype;

function Robot(nav) {
    this._nav = nav;
}

method.place = function (x, y, direction) {
    this._nav.setPosition(x, y, direction);
}

method.move = function () {
    this._nav.move();
}

method.turnLeft = function () {
    this._nav.setDirection("LEFT");
}

method.turnRight = function () {
    this._nav.setDirection("RIGHT");
}


method.report = function () {
    console.log("X axis :  " + this._nav.xAxis.getAxis());
    console.log("Y axis :  " + this._nav.yAxis.getAxis());
    console.log("Direction :  " + this._nav.getCurrentDirection());
}

module.exports = Robot;