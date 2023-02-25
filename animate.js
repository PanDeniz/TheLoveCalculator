 
$(".heart div").click(function(){
    $(".top").empty();
    $(".heart img").css("visibility", "visible");
    window.open("https://www.linkedin.com/in/boran-deniz-d%C3%BCzg%C3%BCn-62ba691ba/");
})

$(".button1").click(function(){
    var x = Math.floor(Math.random()*101);
    $(".middle .colapseIt").css("visibility", "collapse");
    $(".middle h4").text(`Calculating...`);
    $("#calculate1").css({"visibility" :"visible", "position" : "relative"});
    $("#calculate2").css({"visibility" :"visible", "position" : "relative"}).animate({width: "50%"},2000, function(){
        $("#calculate1").css("visibility", "collapse");
        $("#calculate2").css("visibility", "collapse");
        $(".middle h4").text(`${x}%`).css({"color": "purple", "font-size": "650%"}).fadeOut(200).fadeIn(200);
        $(".middle div p").css("visibility", "visible");
        $(".re").css("visibility", "visible");
    
        if(x>=90){
            $(".middle p").text("You are soul mates!!!");
        }else if(x>=70){
            $(".middle p").text("You are in love");
        }else if(x>=40){
            $(".middle p").text("You are like friends but nothing more");
        }else if(x>=10){
            $(".middle p").text("You can bareley resist each other");
        }else{
            $(".middle p").text("HATRED");
        }
    });

})

$(".reload").click(function(){
    window.location.reload();
})
