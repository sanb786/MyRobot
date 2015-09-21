console.log("starting");
var Navigatr = require("./navigator.js");
var Robot = require("./robot.js");

var nav = new Navigatr();
var toy = new Robot(nav);


toy.place(0, 0, "NORTH");
toy.move();
toy.move();
toy.turnRight();
toy.report();
console.log("End of test 1");

toy.place(1, 2, "EAST");
toy.move();
toy.move();
toy.turnLeft();
toy.move();
toy.report();


toy.place(0, 0, "NORTH");
toy.turnLeft();
toy.report();

console.log("End of test");