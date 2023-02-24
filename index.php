<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>The Love Calculator</title>
    <link rel="icon" href="./favicon.ico">
    <link rel="stylesheet" href="./style.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.3/jquery.min.js"></script>
</head>

<body>
    
    <div class="screen">

        <div class="heart">
            <div class="circle" id="first"></div>
            <div class="circle" id="second"></div>
            <div class="rect" id="third"></div>
            <div id="bubble2"></div>
            <div id="bubble"></div>
            <img src="./whiteLightning.png" class="light">
            <img src="./whiteLightning.png" class="lighto">
            <img src="./lightBolt.png" class="bolt">
            <img src="./lightBolt.png" class="bolt">
            <img src="./lightBolt.png" class="bolt">
            <img src="./lightBolt.png" class="bolt">
            <img src="./lightBolt.png" class="bolt">
            <img src="./lightBolt.png" class="bolt">
            <img src="./zeus.png" class="protector">
        </div>
    
        <div class="top">
            <h1>&#128151; The Love Calculator &#128151;</h1>
            <p>It is now possible to find whether the one that you love loves you back</p>
            <p>with this scientific based love calculator.</p>
            <p>All you need to do is enter your name and the name of your loved one and bum...&#128165;</p>
        </div>
    
        <div class="middle">
            <h4>Please enter two names!</h4>

            <div>
            <input type="text" id="person1">
             &#128152;
            <input type="text" id="person2">
            <br>
            <br>
            <button>Calculate!</button>
            </div>
        </div>

        <div class="bottom">
            <p id="disclaimer"><b>Disclaimer:</b> It is not very likely to get a hundred percent probability, therefore there is no guarantee of any kind that the relationship will work out between these two people. No record is being kept of any information entered by the user of this program. The creators of this program are in no way liable of any actions which might be taken by users of this program. Please note that this site has no serious intention whatsoever.</p>
        </div>
    </div>

    <script src="./animate.js"></script>
    <script>
    $("button").click(function(){
        $(".middle div").css("visibility", "collapse");
        $(".middle h4").text("<?php $x = rand(0, 100); echo "$x%" ?>").css({"color": "purple", "font-size": "1000%"}).fadeOut(200).fadeIn(200);
    })
</script>
</body>


</html>
