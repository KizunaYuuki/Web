/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */


var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// c ~ content
var c = canvas.getContext('2d');

c.fillStyle = 'rgba(255, 0, 0, 0.1)';
c.fillRect(100, 100, 100, 100);
c.fillStyle = 'rgba(0, 255, 0, 0.1)';
c.fillRect(400, 100, 100, 100);
c.fillStyle = 'rgba(0, 0, 255, 0.1)';
c.fillRect(300, 300, 100, 100);
console.log(canvas);


// line
c.beginPath();
c.moveTo(50, 300);
c.lineTo(300, 100);
c.lineTo(400, 300);
c.strokeStyle = "#fa34a3";
c.stroke();