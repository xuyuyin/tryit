import './css/addImg.css'
let smallImg = document.createElement('img');
// 必须 require 进来 
smallImg.src = require('../images/ab.png');
document.body.appendChild(smallImg);

let bigImg = document.createElement('img');
bigImg.src = require('../images/cc.png');
document.body.appendChild(bigImg);