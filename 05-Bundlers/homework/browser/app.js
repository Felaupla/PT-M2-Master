// var whiteboard = require("./whiteboard.js");
import whiteboard from "./whiteboard.js";
// var io = require("socket.io-client");
import io from "socket.io-client";
// var whiteboard = window.boardWhite;
var socket = io(window.location.origin);

socket.on("connect", function () {
  console.log("Connected!");
});

socket.on("load", function (strokes) {
  strokes.forEach(function (stroke) {
    var start = stroke.start;
    var end = stroke.end;
    var color = stroke.color;
    whiteboard.draw(start, end, color, false);
  });
});

socket.on("draw", function (start, end, color) {
  whiteboard.draw(start, end, color, false);
});

whiteboard.on("draw", function (start, end, color) {
  socket.emit("draw", start, end, color);
});
