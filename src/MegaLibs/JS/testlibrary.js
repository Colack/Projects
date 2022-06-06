// calculator 
function calc() {
  onEvent("open_button", "click", function( ) {
    setScreen("screen2");
  });
  onEvent("calculate_button", "click", function( ) {
    setNumber("label4", getNumber("text_input2") + getNumber("text_input3"));
    setNumber("label5", getNumber("text_input5") - getNumber("text_input4"));
    setNumber("label6", getNumber("text_input6") * getNumber("text_input7"));
  });
  onEvent("next_button", "click", function( ) {
    setScreen("screen3");
  });
  onEvent("button4", "click", function( ) {
    setScreen("screen1");
  });
}
calc();
