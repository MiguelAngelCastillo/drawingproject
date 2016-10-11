var canvasDiv = document.getElementById("drawingArea");
var canvas = canvasDiv.getContext('2d');
//canvas.fillStyle = "pink";
//canvas.fillRect(80, 50, 100, 100);
// 1st#, left wall; 2nd#, up and down; 3rd#, length; 4th, width;
canvas.fillStyle = "DarkOrange";
canvas.fillRect(0,0,1000,800);
//rectangle pumpkin #1
//stem
canvas.fillStyle = "brown";
canvas.fillRect(175, 485, 30, 50);
//body
canvas.beginPath();
canvas.fillStyle = "orange";
canvas.arc(190,600,85,0,2*Math.PI,true);
canvas.fill();

canvas.beginPath();
canvas.fillStyle = "orange";
canvas.arc(160,600,80,0,2*Math.PI,true);
canvas.fill();

canvas.beginPath();
canvas.fillStyle = "orange";
canvas.arc(220,600,80,0,2*Math.PI,true);
canvas.fill();

//eyes
canvas.beginPath();
canvas.fillStyle = "black";
canvas.moveTo(240,550);
canvas.lineTo(230,580);
canvas.lineTo(250,580);
canvas.fill();

canvas.beginPath();
canvas.fillStyle = "black";
canvas.moveTo(140,550);
canvas.lineTo(130,580);
canvas.lineTo(150,580);
canvas.fill();
//mouth
canvas.beginPath();
canvas.fillStyle = "black";
canvas.arc(190,620,40,0,2*Math.PI,true);
canvas.fill()
canvas.fillStyle = "orange"
canvas.fillRect(150,580,80,50);
//2nd pumpkin
//stem
canvas.fillStyle = "brown";
canvas.fillRect(455, 485, 30, 50);
//body
canvas.beginPath();
canvas.fillStyle = "orange";
canvas.arc(470,600,85,0,2*Math.PI,true);
canvas.fill();

canvas.beginPath();
canvas.fillStyle = "orange";
canvas.arc(440,600,80,0,2*Math.PI,true);
canvas.fill();

canvas.beginPath();
canvas.fillStyle = "orange";
canvas.arc(500,600,80,0,2*Math.PI,true);
canvas.fill();
//hat
canvas.beginPath();
canvas.fillStyle = "black";
canvas.moveTo(480,330);
canvas.lineTo(340,560);
canvas.lineTo(600,560);
canvas.fill();
//eyes
canvas.beginPath();
canvas.fillStyle = "black";
canvas.moveTo(515,550);
canvas.lineTo(500,580);
canvas.lineTo(530,580);
canvas.fill();

canvas.beginPath();
canvas.fillStyle = "black";
canvas.moveTo(425,550);
canvas.lineTo(440,580);
canvas.lineTo(410,580);
canvas.fill();
//mouth
canvas.beginPath();
canvas.fillStyle = "black";
canvas.arc(470,620,40,0,2*Math.PI,true);
canvas.fill()
canvas.fillStyle = "orange"
canvas.fillRect(430,580,80,50);
//3rd pumpkin
//stem
canvas.fillStyle = "brown";
canvas.fillRect(735, 485, 30, 50);
//body
canvas.beginPath();
canvas.fillStyle = "orange";
canvas.arc(750,600,85,0,2*Math.PI,true);
canvas.fill();

canvas.beginPath();
canvas.fillStyle = "orange";
canvas.arc(720,600,80,0,2*Math.PI,true);
canvas.fill();

canvas.beginPath();
canvas.fillStyle = "orange";
canvas.arc(780,600,80,0,2*Math.PI,true);
canvas.fill();
//eyes
canvas.beginPath();
canvas.fillStyle = "black";
canvas.moveTo(700,550);
canvas.lineTo(690,580);
canvas.lineTo(710,580);
canvas.fill();

canvas.beginPath();
canvas.fillStyle = "black";
canvas.moveTo(800,550);
canvas.lineTo(790,580);
canvas.lineTo(810,580);
canvas.fill();
//mouth
canvas.beginPath();
canvas.fillStyle = "black";
canvas.arc(750,620,40,0,2*Math.PI,true);
canvas.fill()
canvas.fillStyle = "orange"
canvas.fillRect(710,580,80,50);
//scarecrow
canvas.fillStyle = "DarkGrey"
canvas.fillRect(180,30,80,450);

canvas.fillStyle = "red"
canvas.fillRect(170,120,100,120);

canvas.fillStyle = "red"
canvas.fillRect(170,120,200,40);

canvas.fillStyle = "red"
canvas.fillRect(70,120,110,40);

canvas.fillStyle = "DarkBlue"
canvas.fillRect(170,200,100,240);

canvas.fillStyle = "DarkBlue"
canvas.fillRect(170,120,20,120);

canvas.fillStyle = "DarkBlue"
canvas.fillRect(250,120,20,120);

canvas.fillStyle = "black"
canvas.fillRect(215,320,10,120);
//head
canvas.beginPath();
canvas.fillStyle = "orange";
canvas.arc(220,80,60,0,2*Math.PI,true);
canvas.fill()

canvas.beginPath();
canvas.fillStyle = "orange";
canvas.arc(200,80,55,0,2*Math.PI,true);
canvas.fill()

canvas.beginPath();
canvas.fillStyle = "orange";
canvas.arc(240,80,55,0,2*Math.PI,true);
canvas.fill()
//eyes
canvas.beginPath();
canvas.fillStyle = "black";
canvas.moveTo(195,50);
canvas.lineTo(190,70);
canvas.lineTo(200,70);
canvas.fill();

canvas.beginPath();
canvas.fillStyle = "black";
canvas.moveTo(245,50);
canvas.lineTo(240,70);
canvas.lineTo(250,70);
canvas.fill();
//mouth
canvas.beginPath();
canvas.fillStyle = "black";
canvas.arc(220,105,20,0,2*Math.PI,true);
canvas.fill()
canvas.fillStyle = "orange"
canvas.fillRect(200,85,40,20);
//hands
canvas.fillStyle = "yellow"
canvas.fillRect(40,150,30,10);

canvas.fillStyle = "yellow"
canvas.fillRect(20,140,50,10);

canvas.fillStyle = "yellow"
canvas.fillRect(30,130,40,10);

canvas.fillStyle = "yellow"
canvas.fillRect(45,120,25,10);

canvas.fillStyle = "yellow"
canvas.fillRect(370,150,35,10);

canvas.fillStyle = "yellow"
canvas.fillRect(370,140,40,10);

canvas.fillStyle = "yellow"
canvas.fillRect(370,130,45,10);

canvas.fillStyle = "yellow"
canvas.fillRect(370,120,25,10);
//feet
canvas.fillStyle = "yellow"
canvas.fillRect(170,440,10,25);

canvas.fillStyle = "yellow"
canvas.fillRect(180,440,10,15);

canvas.fillStyle = "yellow"
canvas.fillRect(190,440,10,20);

canvas.fillStyle = "yellow"
canvas.fillRect(200,440,10,30);

canvas.fillStyle = "yellow"
canvas.fillRect(210,440,10,25);

canvas.fillStyle = "yellow"
canvas.fillRect(220,440,10,30);

canvas.fillStyle = "yellow"
canvas.fillRect(230,440,10,35);

canvas.fillStyle = "yellow"
canvas.fillRect(240,440,10,10);

canvas.fillStyle = "yellow"
canvas.fillRect(250,440,10,15);

canvas.fillStyle = "yellow"
canvas.fillRect(260,440,10,20);
