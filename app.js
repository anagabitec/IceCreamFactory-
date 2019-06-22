var size = "";
var coneType = "";
var flavor = [];

// emptys all my vars and the div's that hold the text, clear current order
$(".clear-order").on("click", function() { 

    size = "";

    coneType = ""; 

    flavor = [];

    $(".size-holder").empty();
    $(".cone-holder").empty();
    $(".flavor-holder").empty();

    console.log("clear order");
})

// update var size = small on click, display small size
$(".small").on("click", function() {

    console.log("SMALL BUTTON");

    var size = "SMALL";

    console.log(size);

    $(".size-holder").text(size);

})

// update var size = medium on click, display med size
$(".medium").on("click", function() {

    console.log("MED BUTTON");

    var size = "MEDIUM";

    console.log(size);

    $(".size-holder").text(size);

})

// update var size = large on click, display large size
$(".large").on("click", function() {

    console.log("LRG BUTTON");

    var size = "LARGE";

    console.log(size);

    $(".size-holder").text(size);

})

// update var coneType = Regular Cone on click and display it
$(".reg-cone").on("click", function() {

    console.log("REGULAR CONE LOG");

    var coneType = "BASIC CONE";

    console.log(coneType);

    $(".cone-holder").text(coneType);

})

// update var coneType = Waffle Cone on click and display it
$(".waffle-cone").on("click", function() {

    console.log("Waffle CONE LOG");

    var coneType = "WAFFLE CONE";

    console.log(coneType);

    $(".cone-holder").text(coneType);

})    

// update var coneType = Waffle Cone on click and display it
$(".cup").on("click", function() {

    console.log("CUP");

    var coneType = "CUP";

    console.log(coneType);

    $(".cone-holder").text(coneType);

})

// Add ice cream flavors functions

// update var coneType = Waffle Cone on click and display it
$(".butter-pecan").on("click", function() {

    console.log("butter-pecan");

    flavor.push("BUTTER PECAN");

    $(".flavor-holder").text(flavor);

})

// push var flavor with "FAT FREE CHOCOLATE" and display it
$(".fat-free-chocolate").on("click", function() {

    console.log("fat-free-chocolate");

    flavor.push("FAT FREE CHOCOLATE");

    $(".flavor-holder").text(flavor);

})

// push var flavor with "FRENCH CHOCOLATE" and display it
$(".french-chocolate").on("click", function() {

    console.log("french-chocolate");

    flavor.push("FRENCH CHOCOLATE");

    $(".flavor-holder").text(flavor);

})

// push var flavor with "FRENCH VANILLA" and display it
$(".french-vanilla").on("click", function() {

    console.log("french-vanilla");

    flavor.push("FRENCH VANILLA");

    $(".flavor-holder").text(flavor);

})

// push var flavor with "LIGHT VANILLA" and display it
$(".light-vanilla").on("click", function() {

    console.log("light-vanilla");

    flavor.push("LIGHT VANILLA");

    $(".flavor-holder").text(flavor);

})

// push var flavor with "MINT CHOCOLATE" and display it
$(".mint-chocolate").on("click", function() {

    console.log("mint-chocolate");

    flavor.push("MINT CHOCOLATE");

    $(".flavor-holder").text(flavor);

})

// push var flavor with "VANILLA FUDGE" and display it
$(".vanilla-fudge").on("click", function() {

    console.log("vanilla-fudge");

    flavor.push("VANILLA FUDGE");

    $(".flavor-holder").text(flavor);

})

// push var flavor with "CHOCOLATE CARAMEL" and display it
$(".chocolate-caramel").on("click", function() {

    console.log("chocolate caramel");

    flavor.push("CHOCOLATE CARAMEL");

    $(".flavor-holder").text(flavor);

})

