var expect = require("chai").expect;
var Navigatr = require("./navigator.js");
var Robot = require("./robot.js");

describe('testRobot', function () {

  it('Move', function () {
    var nav = new Navigatr();
    var toy = new Robot(nav);
    toy.place(1, 2, "EAST");
    toy.move();
    toy.move();
    toy.turnLeft();
    toy.move();
    expect(nav.xAxis.getAxis()).to.equal(3);
  });
});