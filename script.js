// STUFF i CAN USE FOR ANIMATION TRANSITIONS:
// transitionend
// animationstart
// animationend

// this.style.animation 

window.addEventListener("load", function(){

let player = document.getElementById("player");
let playButton = document.getElementById("play-button");
let scrollables = document.querySelectorAll(".scrollable");
let paralaxables = document.querySelectorAll(".paralax-able");

playButton.scrollables = scrollables;
playButton.paralaxables = paralaxables;

playButton.addEventListener("click", () => { animationScript1(scrollables, paralaxables)});


function animationScript1(scrollables, paralaxables) {
  playButton.classList.add("invisible");
  player.classList.add("player-walk");
  player.classList.remove("player");

  player.addEventListener("animationend", () => { animationScript2(scrollables, paralaxables)});
}

function animationScript2(scrollables, paralaxables) {

 player.classList.add("player-test");
 player.classList.remove("player-walk");
 player.addEventListener("animationend", animationScript3);


 for (let i = 0; i < scrollables.length; i++){
  let scrollable = scrollables[i];
  scroll(scrollable);
 }
 for (let i = 0; i < paralaxables.length; i++){
  let paralaxable = paralaxables[i];
  paralax(paralaxable);
 }
 function scroll(scrollable) {
 scrollable.keyframes = [{
  transform: "translate(0em, 0em)"
 },
 {
  transform: "translate(-48em, 0em)"
 },
];

let animationProperties = {
  duration: 2000,
  iterations: 1,
};

 
 scrollable.animate(scrollable.keyframes, animationProperties);
}
function paralax(paralaxable) {
  paralaxable.keyframes = [{
    transform: "translate(0em, 0em)"
   },
   {
    transform: "translate(-24em, 0em)"
   },
  ];
  let animationProperties = {
    duration: 2000,
    iterations: 1,
  };

  paralaxable.animate(paralaxable.keyframes, animationProperties);
}
  }
function animationScript3() {
   
  let scrollables = document.querySelectorAll(".scrollable");
  let paralaxables = document.querySelectorAll(".paralax-able");
  for (let i = 0; i < scrollables.length; i++){
    let scrollable = scrollables[i];
    scroll(scrollable);
  }
  for (let i = 0; i < paralaxables.length; i++){
    let paralaxable = paralaxables[i];
    paralax(paralaxable);
  }
  function scroll(scrollable) {
  scrollable.keyframes = [{
  transform: "translate(-48em, 0em)"
  },
  {
  transform: "translate(-96em, 0em)"
  },
  ];
   
  let animationProperties = {
    duration: 2000,
    iterations: 1,
  };
   
    
  scrollable.animate(scrollable.keyframes, animationProperties);
  }
  function paralax(paralaxable) {
    paralaxable.keyframes = [{
    transform: "translate(-24em, 0em)"
    },
    {
    transform: "translate(-48em, 0em)"
    },
    ];
    let animationProperties = {
    duration: 2000,
    iterations: 1,
    };
   
     paralaxable.animate(paralaxable.keyframes, animationProperties);
   }
     }  


 
    
    
 

});