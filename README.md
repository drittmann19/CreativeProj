# [Beginner AnimeJs Tutorial]

## Set Up

download via npm
```$ npm install animejs --save```

now import the library into your js file
```import anime from 'animejs/lib/anime.es.js';```

basic code setup
```
anime({
  targets: 'div',
  translateX: 250,
  rotate: '1turn',
  backgroundColor: '#FFF',
  duration: 800
});
```
Create an anime function. The only required parameter is targets which is the class or id name of the div you want to animate. The rest define how the div will animate. For example, translateX: 250 will cause the div to animate moving right 250 pixels. Now I will go over some of the common parameter of animeJs that I also used in my project.

## Properties
The main properties I used were:
```
  translateX: #(pixels) - moves div horizontally
  translateY: #(pixels) - moves div vertically
  scale: #(multplication factor) - enlarges or shrinks div evenly
  rotate: #(degree angle) - rotates div by input degree
  delay: #(milliseconds) - how long until animtion starts playing
  duration: #(milliseconds) - how long the animation lasts
  background: color(rgb or hex) - change color of div object
```
  
## KeyFrames
Keyframes allow you to set up multiple animations to occur on one object 
```
var drawRectangle = anime({
  targets: '.ball',
  keyframes:[
    {translateY: -600},
    {translateX: -700},
    {translateY: -100},
    {translateX: -100},
  ]
})
```
This code will cause the div '.ball' to move up 600px, to the left 600px, move down 500px(100 pixels above it's starting position), and to the right 600px(100 pixels to the left it's starting position). It combines all these actions into one animation. You can also add more parameters to each keyframe for more customization.
```
keyframes:[
    {translateY: -600, duration: 925, easing: 'steps(3)', background: '#2A5A64'},
    {translateX: -700, duration: 850, easing: 'steps(5)'},
    {translateY: -100, duration: 775, easing: 'steps(7)'},
  ],
```

## Play on Command
By default chart js animations play when the window is loaded. However, it is easy to change this to that the animation plays when an action has occured(like a button click). To do this add 'autoplay: false' to your anime fuction seen below.
```
var ball = anime({
  targets: '.ball',
  scale: 40,
  duration: 10000,
  autoplay: false,
});
```
Then add 'ball.play()' to your js file where ever an action is being called to start your animation. The example below starts the animation when a button is pressed.
```
document.querySelector('.button').onclick = ball.play();
```

## Additional Documentation
What I have shown and demoed is only a small part of what you can do with animeJs. Check out their full documentation website [here](https://animejs.com/documentation/#CSStransforms) to see all the possibilites of what animeJs can do.
