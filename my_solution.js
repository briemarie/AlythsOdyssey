 // U3.W7: Design your own Code Combat Mission

// This is a solo challenge

/* Your mission description:
Overall mission: Have Warrior Princess climb a mountain to gain magical powers, then defeat her enemies in a battle.
Goals: Climb Magical Mountain, Destroy enemies
Characters: Main: Warrior Princess, Referred to: Faeries, Monks, Enemies
Objects: Warrior Princess, Crystal Castle, Faerie Forest, Magical Mountain, Bloody Battle Lands
Functions:  1. Prompt/alert until Magical Mountain is chosen
            2. Climb mountain (this will be the triangle challenge to simulate a mountain that was climbed)
            3. Alert "You now have magical powers!" Prompt "Where do you want to go next?" - Get user to go to Bloody Battle Lands
            4. Defeat enemies (this will be a math function of reducing numbers 2 by 2 until none are left)
            5. Alert "Your kingdom is now free!" Prompt "Where do you want to go now?" Allow to choose Castle, Forest, or Mountain. */

/* Pseudocode

var warriorPrincess = {
};

var crystalCastle = {
};

var faerieForest = {
};

var magicalMountain = {
};

var bloodyBattleLands = {
};

var game_open = prompt("Where would you like to go first?")
if, if, if, if until Magic Mountain is chosen.

function(climbMountain) {
while steps <= 20
  console.log("*" * steps);
};

console.log("That was quite the climb! The Magic Monks at the top have given you all the powers you will need to defeat your enemies!")

var next_level = prompt("Where would you like to go now?")
if, if, if until Battle Lands is chosen.

function(destroyEnemies) {
  enemies = 20
while enemies > 0
  console.log("Good job you killed 2 enemies, but you still have", enemies, "more to go!")
}

console.log("Your kingdom has been saved!")

var retirement = prompt("Now that everyone has been saved, you can go anywhere you desire. Where would you like to go?")
if, if, if until Forest or Mountain is chosen.*/


// Initial Code

var warriorPrincess = {
  name: "Princess Alyth",
  home: crystalCastle,
  clothing: "dress of thick fog",
  hair: "spider web silk covered with drops of dew",
  eyes: "moons",
  powers: "being a princess"
};

var crystalCastle = {
  location: "Toronto",
  homeOf: warriorPrincess
};

var faerieForest = {
  location: "Ireland",
  inhabitants: "Faeries",
  powers: "gives inhabitants a life of eternal dancing and joy"
};

var magicalMountain = {
  location: "Tibet",
  inhabitants: "Magic Monks",
  powers: ["siddha of mind-reading", "siddha of clairvoyance", "siddha of levitation", "siddha of superhuman strength", "siddha of eternal life"]
};

var bloodyBattleLands = {
  location: "Everywhere",
  inhabitants: "20 various enemies of the enlightened"
};

var game_open = prompt("Where would you like to go first?", "");
while (game_open !== "Magical Mountain") {
if (game_open == "Crystal Castle")
  alert("You can not go back to the castle until all your people are safe!");
  var game_open = prompt("Where would you like to go first?", "");
if (game_open == "Bloody Battle Lands")
  alert("But you don't have any magic powers yet!");
  var game_open = prompt("Where would you like to go first?", "");
if (game_open == "Faerie Forest")
  alert("You must save your people before you can dance in victory!");
  var game_open = prompt("Where would you like to go first?", "");
};
if (game_open == "Magical Mountain")
  alert("Yes! Let's go get some siddha powers!");


function climbMountain(levels) {
for (var levels = "*"; levels.length <=20; levels += "*")
  console.log(levels);
};
climbMountain();


console.log("Wow,that was quite the climb,", warriorPrincess.name,". The Magic Monks at the top have given you all the powers you will need to defeat your enemies!");
warriorPrincess.powers = magicalMountain.powers;
console.log(warriorPrincess.name, "you now have the following powers:", warriorPrincess.powers);

var next_level = prompt("Where would you like to go now?", "");
while (next_level !== "Bloody Battle Lands") {
if (next_level == "Crystal Castle")
  alert("You can not go back to the castle until all your people are safe!");
  var next_level = prompt("Where would you like to go now?", "");
if (next_level == "Faerie Forest")
  alert("You must save your people before you can dance in victory!");
  var next_level = prompt("Where would you like to go now?", "");
};
if (next_level == "Bloody Battle Lands")
  alert("Yes! Let's go destroy the darkness!");


console.log(warriorPrincess.name,"you have 20 enemies to defeat! Start the battle!");

function destroyEnemies(enemies) {
  for (var enemies = 18; enemies > 0; enemies -= 2)
    console.log("Good job you killed 2 enemies, but you still have", enemies, "more to go!");
  if (enemies == 0)
    alert("Way to go! All your enemies have been defeated!");
};
destroyEnemies();

console.log(warriorPrincess.name,"your kingdom has been saved!");

var retirement = prompt("Now that everyone has been saved, you can go anywhere you desire. Where would you like to go?", "");
while (retirement == "Crystal Castle") {
  alert("You can go home if you really want to, but it's going to be boring!");
  var retirement = prompt("Where would you really like to go?", "");
};
if (retirement == "Faerie Forest")
  alert("Dancing sounds like a wonderful way to spend the rest of your life!");
  warriorPrincess.home = faerieForest
if (retirement == "Magical Mountain")
  alert("Eternal meditation with the monks sounds like a glorious way to spend the rest of your life!");
  warriorPrincess.home = magicalMountain

  console.log(warriorPrincess.name, "may you live the rest of your life in", warriorPrincess.home.location, "in bliss and peace!")




/* Refactored Code
I attempted to refactor my prompt/alert sections of code, but was unsuccesful at getting the results I wanted. I do not like that I repeat the prompt variable multiple times, but in trying to refactor it to be directly under the while, it continuously prompts. If I try to just call the variable that the prompt is named, it will not pop up at all. As far as my functions go, I don't see any necessary refactoring. I already use the shortest loop (for), and the functions are clear and well named, in my opinion.



Reflection:
This was such a fun challenge! I found it fairly easy as well, since all week we did various other challenges that involved making variables and objects and creating little programs. I did find it was a bit more of a challenge trying to get my two functions to be functions instead of just statements that output what I wanted them to, but once I realized that the expressions themselves were going to be the same, just that the function would get named in the beginning and then called at the end, it made sense what I was going. The longest task in the challenge though was getting all my prompt and alert statements to come out properly, and I didn't end up with as DRY of code as I had initially coded it to be, but this solution is the only one I could get to work for every option and sequence of inputed option choice.I do plan on adding graphics to my little game, and I'm not sure if I know how to get things to move, but I want there to at least be visuals of all the different places and my warrior princess in the background when all the prompts and stuff are coming up. (On Monday 11/3 I created a HTML page to hold my graphics- http://briemarie.github.io/warriorprincess.html*/
