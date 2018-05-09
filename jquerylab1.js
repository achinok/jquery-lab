// $(".list").hide().delay(1200).fadeIn(800); // 1000 this is milliseconds. so this is 1 full second

$("p").css("background-color", "green");

// $("li:nth-child(2)").css("height", "40px");

$("li").height(10);

$("li").animate({                   //end point (height), how long, function
    height: "40px"
}, 10000, function(){

}
)
});