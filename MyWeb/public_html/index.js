/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */


var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// c ~ content
var c = canvas.getContext('2d');

c.fillRect(100, 100, 100, 100);
c.fillRect(100, 300, 100, 100);
console.log(canvas);


// line
c.beginPath();