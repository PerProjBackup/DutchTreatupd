$(document).ready(function () {
  
  console.log("Hello Pluralsight");

  var theForm = $("#theForm");
    //document.getElementById("theForm");
  //theForm.hidden = true;
  theForm.hide();

  var button = $("#buyButton");//document.getElementById("buyButton");
  button.on("click", function () { //addEventListener
    console.log("Buying Item");
  });

  var productProps = $(".product-props li");// document.getElementsByClassName("product-props");
  //var listItems = productProps.item[0].children;
    productProps.on("click", function () {
      console.log("You clicked on " + $(this).text());
  });

  var $loginToggle = $("#loginToggle");
  var $popupForm = $(".popup-form");

  $loginToggle.on("click", function () {
    $popupForm.fadeToggle(500);
  });
});
