// // Box width
// var bw = 400;
// // Box height
// var bh = 400;
// // Padding
// var p = 0;

var canvas = document.getElementById("canvas1");
var context = canvas.getContext("2d");
// function drawBoard(){
//     for (var x = 0; x <= bw; x += 5) {
//         context.moveTo(0.5 + x + p, p);
//         context.lineTo(0.5 + x + p, bh + p);
//     }

//     for (var x = 0; x <= bh; x += 5) {
//         context.moveTo(p, 0.5 + x + p);
//         context.lineTo(bw + p, 0.5 + x + p);
//     }
//     context.strokeStyle = "pink";
//     context.stroke();
// }

// drawBoard();

// context.strokeStyle = "black";


// // context.beginPath();

// // context.moveTo(20, 10);
// // context.lineTo(20, 80);
// // context.lineTo(180, 40);
// // context.lineTo(180, 80);

// context.rotate(Math.PI / 2);
// context.translate()


// context.stroke();


context.imageSmoothingEnabled = false;

context.lineWidth = 1;
// 0.5
context.strokeStyle = "red";
context.beginPath();
context.moveTo(20,  20.5);
context.lineTo(80,  20.5);
context.stroke();

context.strokeStyle = "blue";
context.beginPath();
context.moveTo(40,  20.5);
context.lineTo(100, 20.5);
context.stroke();
// 0
context.strokeStyle = "red";
context.beginPath();
context.moveTo(20,  30);
context.lineTo(80,  30);
context.stroke();

context.strokeStyle = "blue";
context.beginPath();
context.moveTo(40,  30);
context.lineTo(100, 30);
context.stroke();

// context.lineWidth = 20;
// context.strokeStyle = "purple";
// context.beginPath();
// context.moveTo(20, 40);
// context.lineTo(100, 40);
// context.stroke();



/*
context.strokeStyle = "black";
context.save ();
context.beginPath();
context.moveTo (20, 20); 
context.strokeStyle = "red";
context.lineTo (100,20);
context.strokestyle = "green";
context.stroke();
context. lineTo (60,80);
context.strokeStyle = "blue";
context.stroke(); 
context. restore();
context .beginPath();
context .moveTo (60, 80); 
context. lineTo (20,20); 
context.stroke();
context.strokeStyle = "purple";
*/






















// context.beginPath();
// context.moveTo(0, 0);
// context.lineTo(20, 20);
// context.stroke()

/*
context.beginPath();
context.save();

context.scale(2, 2);
context.translate(0, 5)
context.rotate(Math.PI / 2);
context.translate(0, 10);
context.scale(2, 2)
context.rotate(Math.PI / 2)
context.moveTo(-10, 0);

context.restore();
context.rotate(-Math.PI / 2);
context.scale(-2, -2);
context.rotate(-Math.PI / 2);
context.lineTo(5, 10);
context.stroke();
context.beginPath();
context.arc(5, 10, 2, 0, Math.PI * 2, true);
context.stroke();
context.closePath();
*/


// context.strokeStyle = "black";



