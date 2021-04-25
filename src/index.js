import './main.scss';

import anime from 'animejs/lib/anime.es.js';
var React = require('react');

var sectionNum = 1;

var ball1 = anime({
  targets: '.ball',
  keyframes:[
    {translateY: 465, duration: 3000, background: '#2A5A64'},
    {translateX: 300, delay: 1000, duration: 5000, background: '#52F3A4'}
  ],
  autoplay: false,
});

var ball2 = anime({
  targets: '.ball',
  keyframes:[
    {translateY: -600, duration: 925, easing: 'steps(3)', background: '#2A5A64'},
    {translateX: -700, duration: 850, easing: 'steps(5)'},
    {translateY: -100, duration: 775, easing: 'steps(7)'},
    {translateX: -100, duration: 700, easing: 'steps(15)'},
    {translateY: -500, duration: 625, easing: 'steps(25)'},
    {translateX: -600, duration: 550, easing: 'linear'},
    {translateY: -200, duration: 475, easing: 'linear'},
    {translateX: -200, duration: 400, easing: 'linear'},
    {translateY: -425, duration: 325, easing: 'linear'},
    {translateX: -575, duration: 250, easing: 'linear'},
    {translateY: -275, duration: 175, easing: 'linear'},
    {translateX: -275, duration: 100, easing: 'easeInElastic(1, .6)'},
    {scale: 3, delay: 500, duration:2000, background: '#52F3A4'},
  ],
  // easing: 'linear',
  // duration: 4000,
  autoplay: false,
})

var ball3 = anime({
  targets: '.ball',
  keyframes:[
    {scale: .1, duration:1000, background: '#2A5A64'},
    {scale: 2, delay: 3000, duration:3000, background: '#52F3A4'}
  ],
  // easing: 'linear',
  // duration: 4000,
  autoplay: false,
});

var ball4 = anime({
  targets: '.ball',
  scale: 40,
  duration: 10000,
  background: '#000000',
  autoplay: false,
});

var droplets = anime({
  targets: '.droplet',
  scale: [
    {value: .1, duration: 500, easing: 'easeOutSine'},
    {value: 1, duration: 500, easing: 'easeInQuad'},
  ],
  delay: anime.stagger(500, {grid: [9, 4], from: 13}),
  autoplay: false
});

var particles = anime({
  targets: ['.particle1',
    '.particle2',
    '.particle3',
    '.particle4',
    '.particle5',
    '.particle6',
    '.particle7',
    '.particle8',
    '.particle9',
    '.particle10',
    '.particle11',
    '.particle12',
    '.particle13',
    '.particle14',
    '.particle15',
    '.particle16',
    '.particle17',
    '.particle18',
    '.particle19',
    '.particle20',
    '.particle21',
  ],
  translateY: -2000,
  translateX: function() {return anime.random(-2000, 2000); },
  duration: 20000,
  scale: 20,
  rotate: function() {return anime.random(500, 1000); },
  delay: 500,
  autoplay: false,
});

function animations(){
  if (sectionNum == 1) {
    explosion();
    sectionNum++;
    return;
  }
  if(sectionNum == 2){
    spiralBox();
    sectionNum++;
    return;
  }
  if(sectionNum == 3){
    ripple();
    sectionNum++;
    return;
  }
  if (sectionNum == 4){
    console.log("here");
    endTitle();
    return;
  }
}

function endTitle(){
  ball4.play();
  document.getElementsByClassName('endHead')[0].style.display = 'block';
  document.getElementsByClassName('endText')[0].style.display = 'block';
  document.getElementsByClassName('githubLink')[0].style.display = 'block';
}

function ripple(){
  document.getElementsByClassName('ball')[0].style.top = "60%";
  document.getElementsByClassName('ball')[0].style.left = "49%";
  document.getElementsByClassName('dropletBox')[0].style.visibility = 'visible';

  ball3.play();
  droplets.play();
}

function spiralBox(){
  let elem = document.querySelector('.ball');
  let rect = elem.getBoundingClientRect();
  console.log(rect.top);
  console.log(rect.left);
  document.getElementsByClassName('ball')[0].style.top = rect.top + "px";
  document.getElementsByClassName('ball')[0].style.left = rect.left + "px";
  ball2.play();
}

function explosion(){
  ball1.play();
  particles.play();
  document.getElementsByClassName('introText')[0].style.display = 'none';
  document.getElementsByClassName('instructions')[0].style.display = 'none';
}

document.querySelector('.ball').onclick = animations;


// anime({
//   targets: '.particle1 .particle2',
//   translateY: -50,
//   duration: 2000
// });
//
// anime({npm
//   targets: '.rectangle',
//   translateX: 400,
//   scale: 2,
//   backgroundColor: '#FFF',
//   rotate: '1turn',
//   duration: 1000,
//   delay: 1000
// });
//
// anime({
//   targets: '.rectangle2',
//   translateX: 200,
//   translateZ: 50,
//   skew: 100,
//   perspective: 50,
//   duration: 1000,
//   delay: 1000
// });
