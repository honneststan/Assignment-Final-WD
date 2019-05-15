var customName = document.getElementById('customname');
var randomize = document.querySelector('.randomize');
var story = document.querySelector('.story');

function randomValueFromArray(array){
  return array[Math.floor(Math.random()*array.length)];
}

// store the string into varible and arrays
var storyText = "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day."
var insertX = ["Willy the Goblin", "Big Daddy", "Father Christmas"];
var insertY = ["the soup kitchen", "Disneyland", "the White House"];
var insertZ = ["spontaneously combusted", "melted into a puddle on the sidewalk", "turned into a slug and crawled away"];


randomize.addEventListener('click', result);

function result() {
//store the string of storyText in new variable newStory
  var newStory = storyText;
  // call the 3 arrays and store then in xItem, yItem and zItem respectively
  var xItem = randomValueFromArray(insertX);
  var yItem = randomValueFromArray(insertY);
  var zItem = randomValueFromArray(insertZ);
  // replace the certain words in newStory with the values containing variable
  newStory = newStory.replace(/:insertx:/g, xItem);
  newStory = newStory.replace(/:insertx:/g, xItem);
  newStory = newStory.replace(/:inserty:/g, yItem);
  newStory = newStory.replace(/:insertz:/g, zItem);


  if(customName.value !== '') {
    var name = customName.value;
    newStory = newStory.replace(/Bob/g, name);
  }

  if(document.getElementById("uk").checked) {
    //convert pound into stone if 'uk' radio is clicked
    var weight = Math.round(300/14) + " stone";
    //convert fahrenheit into centigrade if 'uk' radio is clicked
    var temperature =  Math.round((94-32)*5/9 )+ " centigrade";
    //replace the original values of 'us' to the converted values in 'uk'
    newStory = newStory.replace(/94 fahrenheit/g, temperature);
    newStory = newStory.replace(/300 pounds/g, weight);
  }
// add the story into the paragraph
  story.textContent =newStory ;
  story.style.visibility = 'visible';

}
