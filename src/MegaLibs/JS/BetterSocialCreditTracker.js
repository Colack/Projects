// define the variables
function kyle () {
var likes = 0;
var comment = "Soo social credit mode";


// (purpose) When clicked decreases the likes by one
// (function) Uses the Counter Pattern with Event to subtract one from the likes variable
// sets the text on the screen to display the new amount of likes
// plays a sound when clicked
onEvent("downButton", "click", function() {
  likes = likes - 1;
  setText("likeCounterOutput","Likes: " + likes);
  playSound("sound://category_objects/sharp_switch.mp3");
});

// (purpose) When clicked increases the likes by one
// (function) Uses the Counter Pattern with Event to add one to the likes variable
// sets the text on the screen to display the new amount of likes
// plays a sound when clicked
onEvent("upButton", "click", function() {
  likes = likes + 1;
  setText("likeCounterOutput", "Likes: " + likes);
  playSound("bing-chilling_fcdGgUc.mp3");
});

// (purpose) When clicked updates the comments on the screen
// (function) Uses the Variable with String Concatenation pattern to add a new comment to previous comments
// sets the text on the screen to display all comments
onEvent("commentButton", "click", function() {
  comment = comment + "\n" + getText("newCommentInput");
  setText("allCommentsOutput", comment);
});
onEvent("downButton", "click", function( ) {
  var likes = likes < 0;
  setScreen("screen1");
  playSound("drama.swf.mp3");
});
onEvent("goback", "click", function( ) {
  setScreen("homeScreen");
  playSound("sound://category_achievements/lighthearted_bonus_objective_1.mp3", false);
});
onEvent("upButton", "click", function( ) {
  var likes = likes >= 1;
  setScreen("screen2");
  playSound("Super-Idol-Song-Sound-Effect.mp3");
});
onEvent("goback2", "click", function( ) {
  stopSound("Super-Idol-Song-Sound-Effect.mp3");
  setScreen("homeScreen");
  playSound("halal-mode.mp3", false);
});
onEvent("commentButton", "click", function( ) {
  setScreen("screen3");
  playSound("xue-hua-piao-piao.mp3", false);
});
onEvent("button6", "click", function( ) {
  stopSound("xue-hua-piao-piao.mp3");
  setScreen("chinesejail");
  playSound("callmecarson-cries-midstream-audiotrimmer.mp3", false);
});
onEvent("button7", "click", function( ) {
  stopSound("xue-hua-piao-piao.mp3");
  setScreen("Uaresafechild");
  playSound("avengers_.mp3", false);
});
onEvent("label1", "click", function( ) {
  hideElement("wakeup1");
  hideElement("wakeup2");
  hideElement("wakeup3");
  hideElement("wakeupimage");
  setScreen("screen5");
  playSound("chinese.mp3", false);
});
onEvent("slider1", "change", function( ) {
  stopSound("chinese.mp3");
  open("https://www.youtube.com/watch?v=MdPJtIpw73A");
  hideElement("slider1");
  hideElement("image5");
  hideElement("label2");
  hideElement("0");
  hideElement("10");
  hideElement("5");
  image("chinesegif", "https://cdn-images-1.medium.com/fit/t/1600/480/1*XNnV_a-EMpug-8nIJqFXKw.gif");
  setSize("chinesegif", 400, 700);
  showElement("wakeup1");
  showElement("wakeup2");
  showElement("wakeup3");
  playSound("c3bd0e88-d5cf-43d7-b381-25683bb97e4a.mp3");
  showElement("wakeupimage");
  ;
});
}
kyle () ;
