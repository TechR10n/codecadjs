/**
 * Created by ryan on 7/6/15.
 */
console.log("Hello");
console.log("Ryan".length);
//confirm("I feel awesome")
//prompt("What is Ubuntu?")
console.log("thisstrssssssing".length > 10)

if("RyanHammang".length >= 7)
{
    console.log("You have a long name")
}
else
{
    console.log("You have a short name")
}

console.log("Batman".substring(0,3));

console.log("January".substring(0,3));
console.log("Melbourne is great".substring(0,12));
console.log("Hamburgers".substring(3,10));


confirm("I am ready to play");
var age = prompt("What is your age?")

if(age < 13)
{
    console.log("You can play, but it's not our fault")
}
else
{
    console.log("Awesome. Let's play now!")
}

console.log("You are at a Justin Bieber concert, and you hear this lyric 'Lace my shoes off, start racing.'");
console.log("Suddenly, Bieber stops and says, 'Who wants to race me?'");
userAnswer = prompt("Do you want to race Bieber on stage?");
if(userAnswer === "yes")
{
    console.log("You and Bieber start racing. It's neck and neck! You win by a shoelace")
}
else
{
    console.log("Oh no! Bieber shakes his head and sings 'I set a pace, so I can race without pacing.'")
}

feedback = prompt("Rate my game from 0 to 10")
if(feedback > 8)
{
    console.log("Thank you! We should race at the next concert!")
}
else
{
    console.log("I'll keep practicing coding and racing.")
}