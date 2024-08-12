let question = prompt("Ask me a yes or no question and I'll predict the anwser");
let length = question.length;
let fortune = Math.floor(Math.random()* length);
let numberOfFortunes = 6;
fortune = fortune % numberOfFortunes;

if (fortune === 0)
{
  alert("Definetly");
}
else if (fortune === 1)
{
  alert("Probably not");
}
else if (fortune === 2)
{
  alert("The stars are cloudy and the anwser is uncertain")
}
else if (fortune === 3)
{
  alert ("It's your lucky day") 
}
else if (fortune === 4)
{
  alert ("Not a chance")
}
else
{
  alert ("It is likely")
}
