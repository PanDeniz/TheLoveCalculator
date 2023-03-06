 
$(".heart div").click(function(){
    $(".top").empty();
    $(".heart img").css("visibility", "visible");
    window.open("https://www.linkedin.com/in/boran-deniz-d%C3%BCzg%C3%BCn-62ba691ba/");
})


$(".button1").click(function(){

    for(var i=1; i<=4; i++){
        check(i);
    }
    
    if(!($(`.radio div`).hasClass('NoInput'))){
        var x = Math.floor(Math.random()*101);
        $(".middle .colapseIt").css("visibility", "collapse");
        $(".middle .percent").text(`Calculating...`);
        $("#calculate1").css({"visibility" :"visible", "position" : "relative"});
        $("#calculate2").css({"visibility" :"visible", "position" : "relative"}).animate({width: "50%"},2000, function(){
            
            $("#calculate1").css("visibility", "collapse");
            $("#calculate2").css("visibility", "collapse");
            $(".middle .percent").text(`${x}%`).css({"color": "purple", "font-size": "650%"}).fadeOut(200).fadeIn(200);
            $(".middle div p").css("visibility", "visible");
            $(".re").css("visibility", "visible");
        
            if(x>=90){
                $(".middle .explanation1").text("You are soul mates!!!");
            }else if(x>=70){
                $(".middle .explanation1").text("You are in love");
            }else if(x>=40){
                $(".middle .explanation1").text("You are like friends but nothing more");
            }else if(x>=10){
                $(".middle .explanation1").text("You can bareley resist each other");
            }else{
                $(".middle .explanation1").text("HATRED");
            }
        });
    }
        /*for(var j=1; j<=4; j++){
            $(`#y${j}`).prop('checked', false);
            $(`#n${j}`).prop('checked', false);
        }*/

})

$(".reload").click(function(){
    for(var j=1; j<=4; j++){
        $(`#y${j}`).prop('checked', false);
        $(`#n${j}`).prop('checked', false);
    }
    window.location.reload();
})

function check(i){
    if(!($(`#y${i}`).is(':checked') || $(`#n${i}`).is(':checked'))){
        $(`.Q${i}`).addClass('NoInput').fadeOut(200).fadeIn(200);
    }
    $(`#y${i}`).click(function(){
        $(`.Q${i}`).removeClass('NoInput');
    })
    $(`#n${i}`).click(function(){
        $(`.Q${i}`).removeClass('NoInput');
    })
}
