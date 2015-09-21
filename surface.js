var method = Surface.prototype;
var xMin = 0, yMin = 0;
var xMax = 5, yMax = 5;

function Surface(unit) {
	this.axis = unit;
}

method.increment = function () {
	if (this.axis < xMax && this.axis < yMax) {
		this.axis++;
	}
}

method.decrement = function () {
	if (this.axis > xMin && this.axis > yMin) {
		this.axis--;
	}
}

method.getAxis = function () {
	return this.axis;
}

module.exports = Surface;