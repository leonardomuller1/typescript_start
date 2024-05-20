"use strict";
const id = 10;
const curso = "FSC";
const isPublished = true;
let id2;
const numbers = [1, 23, 2, 432];
const strings = ["a", "b", "c"];
const booleans = [true, false];
const anyValues = [1, 23, "t234", true];
const employee = [1, "Leonardo", true];
const employees = [
    [1, "134", true],
    [5, "oi", false],
];
const uid = "5";
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));
const direction1 = Direction.Up;
console.log(direction1);
const cid = 1;
const custormerId = cid;
const custormerIds = [1, 2, 3];
const sum = (num1, num2) => {
    return num1 + num2;
};
const printMessage = (message) => {
    console.log(message);
};
