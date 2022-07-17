const inventory = newInventory();
move(inventory).to(0, 0);

//*added grass/sky perameters
// function tile(url, left, bottom, width, height) {
//   for (let h = 0; h < height; h++) {
//     for (let w = 0; w < width; w++) {
//       newImage(url, left + w * 100, bottom + h * 100);
//     }
//   }
// }
//direction of character will change, keep track with a variable 'let direction = null;'
//also keep track of current position with x/y variables
const character = newImage("assets/green-character/static.gif");
//*delete this logic and instead use the withArrowKeys function
let direction = null;
let x = 100;
let y = 250;
//'Call moveCharacter every millisecond'
// move(character).withArrowKeys(100, 250);
move(character).to(100, 250);
// move(character).withArrowKeys(100, 250);

//use 'if' statement to invoke N,S,E,W movements w/ X,Y axis
//use 'setInterval to repeat 'callback' function
// setInterval(moveCharacter, 1);
// setInterval(function () {
function moveCharacter() {
  if (direction === "west") {
    x = x - 1;
  }
  if (direction === "north") {
    y = y + 1;
  }
  if (direction === "east") {
    x = x + 1;
  }
  if (direction === "south") {
    y = y - 1;
  }
  character.style.left = x + "px";
  character.style.bottom = y + "px";
}

// document.addEventListener("keydown", function (e) {
//   if (e.repeat) return;

//   if (e.key === "ArrowLeft") {
//     direction = "west";
//   }
//   if (e.key === "ArrowUp") {
//     direction = "north";
//   }
//   if (e.key === "ArrowRight") {
//     direction = "east";
//   }
//   if (e.key === "ArrowDown") {
//     direction = "south";
//   }
// });

// document.addEventListener("keyup", function (e) {
//   direction = null;
// });

//*'sky' and 'grass' horizon
// let horizon = window.innerHeight / 1.75;
// let heightOfSky = window.innerHeight - horizon;
// let heightOfGrass = horizon;
//*added 'tile' for grass and sky
// tile("assets/sky.png", 0, horizon, window.innerWidth / 100, heightOfSky / 100);
// tile("assets/grass.png", 0, 0, window.innerWidth / 100, heightOfGrass / 100);

move(newImage("assets/tree.png")).to(200, 450);
move(newImage("assets/pillar.png")).to(350, 250);
move(newImage("assets/pine-tree.png")).to(450350);
move(newImage("assets/crate.png")).to(150, 350);
move(newImage("assets/well.png")).to(500, 575);
move(newItem("assets/sword.png")).to(500, 555);
move(newItem("assets/shield.png")).to(165, 335);
move(newItem("assets/staff.png")).to(600, 250);
//added 'sky' and 'grass' url
// move(newImage("assets/sky.png")).to(100);
// move(newImage("assets/grass.png")).to(100);
