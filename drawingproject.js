var canvasDiv = document.getElementById("drawingArea");
var canvas = canvasDiv.getContext('2d');

canvas.fillStyle = "pink";
//canvas.fillRect(80, 50, 100, 100);
// 1st#, left wall; 2nd#, up and down; 3rd#, length; 4th, width;

canvas.beginPath();
canvas.fillStyle = "orange";
canvas.arc(250,600,85,0,2*Math.PI,true);
canvas.fill();

canvas.beginPath();
canvas.fillStyle = "orange";
canvas.arc(220,600,80,0,2*Math.PI,true);
canvas.fill();

canvas.beginPath();
canvas.fillStyle = "orange";
canvas.arc(280,600,80,0,2*Math.PI,true);
canvas.fill();

canvas.beginPath();
canvas.fillStyle = "black";
canvas.moveTo(200,122);
canvas.lineTo(220,126);
canvas.lineTo(200,130);
canvas.fill();
