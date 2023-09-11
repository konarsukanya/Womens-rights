/* .js files add interaction to your website */
var factList = [
  "1 in 3 women around the world experience violence.",
  "Around 650 million women across the globe were married before the age of 18.",
  "71% of all human trafficking involves women and girls – mainly for sexual exploitation.",
  "Over 200 million women and girls in 30 countries have undergone female genital mutilation."];
  
var fact = document.getElementById("fact");
var myButton = document.getElementById("myButton");
var count = 0;

myButton.addEventListener("click", displayFact);

function displayFact () {
 fact.innerHTML = factList[count];
  count++;
  if (count == factList.length) {
    count = 0;
  }
  
}