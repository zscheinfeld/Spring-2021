// document ready

$("document").ready(function() {
  $( ".video2" ).hide()
  $( ".video3" ).hide()
  $( ".video4" ).hide()
  $( ".video5" ).hide()
  $( ".video6" ).hide()
  $( ".video7" ).hide()
  $( ".video8" ).hide()
  $("#vid1on").css({"background-color": "yellowgreen"});

});

// sliders 1 

var sliderrotation = document.getElementById("rotation1");
var outputrotation = document.getElementById("output_rotation1");
outputrotation.innerHTML = sliderrotation.value;
var video1rotation =0;
var video1scale = 1;
var video1x = 0;
var video1y = 0;

sliderrotation.oninput = function() {
  outputrotation.innerHTML = this.value;
  video1rotation = this.value
  console.log(video1rotation)
  $(".video1").css({'transform' : 'scale( '+ video1scale + ') translateX( '+ video1x + 'px) translateY( '+ video1y + 'px) rotate('+ video1rotation +'deg)'});
}

var sliderscale = document.getElementById("scale1");
var outputscale = document.getElementById("output_scale1");
outputscale.innerHTML = sliderscale.value;

sliderscale.oninput = function() {
  outputscale.innerHTML = this.value;
  video1scale = this.value;
  $(".video1").css({'transform' : 'scale( '+ video1scale + ') translateX( '+ video1x + 'px) translateY( '+ video1y + 'px) rotate('+ video1rotation +'deg)'});
  console.log(video1rotation)
  console.log(video1scale + "video1scale")
}

var sliderx = document.getElementById("x1");
var outputx = document.getElementById("output_x1");
outputx.innerHTML = sliderx.value;

sliderx.oninput = function() {
  outputx.innerHTML = this.value;
  video1x = this.value;
  $(".video1").css({'transform' : 'scale( '+ video1scale + ') translateX( '+ video1x + 'px) translateY( '+ video1y + 'px) rotate('+ video1rotation +'deg)'});
}

var slidery = document.getElementById("y1");
var outputy = document.getElementById("output_y1");
outputy.innerHTML = slidery.value;

slidery.oninput = function() {
  outputy.innerHTML = this.value;
  video1y = this.value;
  $(".video1").css({'transform' : 'scale( '+ video1scale + ') translateX( '+ video1x + 'px) translateY( '+ video1y + 'px) rotate('+ video1rotation +'deg)'});
}

var vid1oncounter = 2;

$("#vid1on").on('click', function(){
    if (vid1oncounter % 2 == 0){
        $( ".video1" ).hide()
        console.log("on")
        $("#vid1on").css({"background-color": "transparent"});
        }
    else {
            $( ".video1" ).show()
            console.log("off")
            $("#vid1on").css({"background-color": "yellowgreen"});
            }
    vid1oncounter = vid1oncounter + 1

});

var vid1invertcounter = 2;

$("#vid1invert").on('click', function(){
    if (vid1invertcounter % 2 == 0){
    $( ".video1" ).css({'filter' : 'invert(100)'})
    $( ".video1" ).css({'background-blend-mode' : 'screen'})
    $("#vid1invert").css({"background-color": "rgb(185, 20, 172)"});

    }
    else {
        $( ".video1" ).css({'filter' : 'invert(0)'})
        $( ".video1" ).css({'background-blend-mode' : 'multiply'})
        $("#vid1invert").css({"background-color": "transparent"});
        }

    vid1invertcounter = vid1invertcounter + 1
});

// sliders 2

var slider2rotation = document.getElementById("rotation2");
var outputrotation2 = document.getElementById("output_rotation2");
outputrotation2.innerHTML = slider2rotation.value;
var video2rotation =0;
var video2scale = 1;
var video2x = 0;
var video2y = 0;

slider2rotation.oninput = function() {
  outputrotation2.innerHTML = this.value;
  video2rotation = this.value
  $(".video2").css({'transform' : 'scale( '+ video2scale + ') translateX( '+ video2x + 'px) translateY( '+ video2y + 'px) rotate('+ video2rotation +'deg)'});
}

var sliderscale2 = document.getElementById("scale2");
var outputscale2 = document.getElementById("output_scale2");
outputscale2.innerHTML = sliderscale2.value;

sliderscale2.oninput = function() {
  outputscale2.innerHTML = this.value;
  video2scale = this.value;
  $(".video2").css({'transform' : 'scale( '+ video2scale + ') translateX( '+ video2x + 'px) translateY( '+ video2y + 'px) rotate('+ video2rotation +'deg)'});
}

var sliderx2 = document.getElementById("x2");
var outputx2 = document.getElementById("output_x2");
outputx2.innerHTML = sliderx2.value;

sliderx2.oninput = function() {
  outputx2.innerHTML = this.value;
  video2x = this.value;
  $(".video2").css({'transform' : 'scale( '+ video2scale + ') translateX( '+ video2x + 'px) translateY( '+ video2y + 'px) rotate('+ video2rotation +'deg)'});
}

var slidery2 = document.getElementById("y2");
var outputy2 = document.getElementById("output_y2");
outputy2.innerHTML = slidery2.value;

slidery2.oninput = function() {
  outputy2.innerHTML = this.value;
  video2y = this.value;
  $(".video2").css({'transform' : 'scale( '+ video2scale + ') translateX( '+ video2x + 'px) translateY( '+ video2y + 'px) rotate('+ video2rotation +'deg)'});
}

var vid2oncounter = 1;

$("#vid2on").on('click', function(){
    if (vid2oncounter % 2 == 0){
        $( ".video2" ).hide()
        console.log("on")
        $("#vid2on").css({"background-color": "transparent"});
        
        }
    else {
            $( ".video2" ).show()
            console.log("off")
            $("#vid2on").css({"background-color": "yellowgreen"});
            }
    vid2oncounter = vid2oncounter + 1

});

var vid2invertcounter = 2;

$("#vid2invert").on('click', function(){
    if (vid2invertcounter % 2 == 0){
    $( ".video2" ).css({'filter' : 'invert(100)'})
    $("#vid2invert").css({"background-color": "rgb(185, 20, 172)"});


    }
    else {
        $( ".video2" ).css({'filter' : 'invert(0)'})
        $("#vid2invert").css({"background-color": "transparent"});
            
        }

    vid2invertcounter = vid2invertcounter + 1
});

// sliders 3

var slider3rotation = document.getElementById("rotation3");
var outputrotation3 = document.getElementById("output_rotation3");
outputrotation3.innerHTML = slider3rotation.value;
var video3rotation = 0;
var video3scale = 1;
var video3x = 0;
var video3y = 0;

slider3rotation.oninput = function() {
  outputrotation3.innerHTML = this.value;
  video3rotation = this.value
  $(".video3").css({'transform' : 'scale( '+ video3scale + ') translateX( '+ video3x + 'px) translateY( '+ video3y + 'px) rotate('+ video3rotation +'deg)'});
}

var sliderscale3 = document.getElementById("scale3");
var outputscale3 = document.getElementById("output_scale3");
outputscale3.innerHTML = sliderscale3.value;

sliderscale3.oninput = function() {
  outputscale3.innerHTML = this.value;
  video3scale = this.value;
  $(".video3").css({'transform' : 'scale( '+ video3scale + ') translateX( '+ video3x + 'px) translateY( '+ video3y + 'px) rotate('+ video3rotation +'deg)'});
}

var sliderx3 = document.getElementById("x3");
var outputx3 = document.getElementById("output_x3");
outputx3.innerHTML = sliderx3.value;

sliderx3.oninput = function() {
  outputx3.innerHTML = this.value;
  video3x = this.value;
  $(".video3").css({'transform' : 'scale( '+ video3scale + ') translateX( '+ video3x + 'px) translateY( '+ video3y + 'px) rotate('+ video3rotation +'deg)'});
}

var slidery3 = document.getElementById("y3");
var outputy3 = document.getElementById("output_y3");
outputy3.innerHTML = slidery3.value;

slidery3.oninput = function() {
  outputy3.innerHTML = this.value;
  video3y = this.value;
  $(".video3").css({'transform' : 'scale( '+ video3scale + ') translateX( '+ video3x + 'px) translateY( '+ video3y + 'px) rotate('+ video3rotation +'deg)'});
}

var vid3oncounter = 1;

$("#vid3on").on('click', function(){
    if (vid3oncounter % 2 == 0){
        $( ".video3" ).hide()
        console.log("on")
        $("#vid3on").css({"background-color": "transparent"});
        }
    else {
            $( ".video3" ).show()
            console.log("off")
            $("#vid3on").css({"background-color": "yellowgreen"});
            }
    vid3oncounter = vid3oncounter + 1

});

var vid3invertcounter = 2;

$("#vid3invert").on('click', function(){
    if (vid3invertcounter % 2 == 0){
    $( ".video3" ).css({'filter' : 'invert(100)'})
    $("#vid3invert").css({"background-color": "rgb(185, 20, 172)"});
    

    }
    else {
        $( ".video3" ).css({'filter' : 'invert(0)'})
        $("#vid3invert").css({"background-color": "transparent"});
        }

    vid3invertcounter = vid3invertcounter + 1
});

// sliders 4

var slider4rotation = document.getElementById("rotation4");
var outputrotation4 = document.getElementById("output_rotation4");
outputrotation4.innerHTML = slider4rotation.value;
var video4rotation = 0;
var video4scale = 1;
var video4x = 0;
var video4y = 0;

slider4rotation.oninput = function() {
  outputrotation4.innerHTML = this.value;
  video4rotation = this.value
  $(".video4").css({'transform' : 'scale( '+ video4scale + ') translateX( '+ video4x + 'px) translateY( '+ video4y + 'px) rotate('+ video4rotation +'deg)'});
}

var sliderscale4 = document.getElementById("scale4");
var outputscale4 = document.getElementById("output_scale4");
outputscale4.innerHTML = sliderscale4.value;

sliderscale4.oninput = function() {
  outputscale4.innerHTML = this.value;
  video4scale = this.value;
  $(".video4").css({'transform' : 'scale( '+ video4scale + ') translateX( '+ video4x + 'px) translateY( '+ video4y + 'px) rotate('+ video4rotation +'deg)'});
}

var sliderx4 = document.getElementById("x4");
var outputx4 = document.getElementById("output_x4");
outputx4.innerHTML = sliderx4.value;

sliderx4.oninput = function() {
  outputx4.innerHTML = this.value;
  video4x = this.value;
  $(".video4").css({'transform' : 'scale( '+ video4scale + ') translateX( '+ video4x + 'px) translateY( '+ video4y + 'px) rotate('+ video4rotation +'deg)'});
}

var slidery4 = document.getElementById("y4");
var outputy4 = document.getElementById("output_y4");
outputy4.innerHTML = slidery4.value;

slidery4.oninput = function() {
  outputy4.innerHTML = this.value;
  video4y = this.value;
  $(".video4").css({'transform' : 'scale( '+ video4scale + ') translateX( '+ video4x + 'px) translateY( '+ video4y + 'px) rotate('+ video4rotation +'deg)'});
}

var vid4oncounter = 1;

$("#vid4on").on('click', function(){
    if (vid4oncounter % 2 == 0){
        $( ".video4" ).hide()
        console.log("on")
        $("#vid4on").css({"background-color": "transparent"});
        }
    else {
            $( ".video4" ).show()
            console.log("off")
            $("#vid4on").css({"background-color": "yellowgreen"});
            }
    vid4oncounter = vid4oncounter + 1

});

var vid4invertcounter = 2;

$("#vid4invert").on('click', function(){
    if (vid4invertcounter % 2 == 0){
    $( ".video4" ).css({'filter' : 'invert(100)'})
    $( ".video4" ).css({'background-blend-mode' : 'screen'})
    $("#vid4invert").css({"background-color": "rgb(185, 20, 172)"});

    }
    else {
        $( ".video4" ).css({'filter' : 'invert(0)'})
        $( ".video4" ).css({'background-blend-mode' : 'multiply'})
        $("#vid4invert").css({"background-color": "transparent"});
        }

    vid4invertcounter = vid4invertcounter + 1
});

// sliders 5

var slider5rotation = document.getElementById("rotation5");
var outputrotation5 = document.getElementById("output_rotation5");
outputrotation5.innerHTML = slider5rotation.value;
var video5rotation = 0;
var video5scale = 1;
var video5x = 0;
var video5y = 0;

slider5rotation.oninput = function() {
  outputrotation5.innerHTML = this.value;
  video5rotation = this.value
  $(".video5").css({'transform' : 'scale( '+ video5scale + ') translateX( '+ video5x + 'px) translateY( '+ video5y + 'px) rotate('+ video5rotation +'deg)'});
}

var sliderscale5 = document.getElementById("scale5");
var outputscale5 = document.getElementById("output_scale5");
outputscale5.innerHTML = sliderscale5.value;

sliderscale5.oninput = function() {
  outputscale5.innerHTML = this.value;
  video5scale = this.value;
  $(".video5").css({'transform' : 'scale( '+ video5scale + ') translateX( '+ video5x + 'px) translateY( '+ video5y + 'px) rotate('+ video5rotation +'deg)'});
}

var sliderx5 = document.getElementById("x5");
var outputx5 = document.getElementById("output_x5");
outputx5.innerHTML = sliderx5.value;

sliderx5.oninput = function() {
  outputx5.innerHTML = this.value;
  video5x = this.value;
  $(".video5").css({'transform' : 'scale( '+ video5scale + ') translateX( '+ video5x + 'px) translateY( '+ video5y + 'px) rotate('+ video5rotation +'deg)'});
}

var slidery5 = document.getElementById("y5");
var outputy5 = document.getElementById("output_y5");
outputy5.innerHTML = slidery5.value;

slidery5.oninput = function() {
  outputy5.innerHTML = this.value;
  video5y = this.value;
  $(".video5").css({'transform' : 'scale( '+ video5scale + ') translateX( '+ video5x + 'px) translateY( '+ video5y + 'px) rotate('+ video5rotation +'deg)'});
}

var vid5oncounter = 1;

$("#vid5on").on('click', function(){
    if (vid5oncounter % 2 == 0){
        $( ".video5" ).hide()
        console.log("on")
        $("#vid5on").css({"background-color": "transparent"});
        
        }
    else {
            $( ".video5" ).show()
            console.log("off")
            $("#vid5on").css({"background-color": "yellowgreen"});
            
            }
    vid5oncounter = vid5oncounter + 1

});

var vid5invertcounter = 2;

$("#vid5invert").on('click', function(){
    if (vid5invertcounter % 2 == 0){
    $( ".video5" ).css({'filter' : 'invert(100)'})
    $( ".video5" ).css({'background-blend-mode' : 'screen'})
    $("#vid5invert").css({"background-color": "rgb(185, 20, 172)"});

    }
    else {
        $( ".video5" ).css({'filter' : 'invert(0)'})
        $( ".video5" ).css({'background-blend-mode' : 'multiply'})
        $("#vid5invert").css({"background-color": "transparent"});
        }

    vid5invertcounter = vid5invertcounter + 1
});

// sliders 6

var slider6rotation = document.getElementById("rotation6");
var outputrotation6 = document.getElementById("output_rotation6");
outputrotation6.innerHTML = slider6rotation.value;
var video6rotation = 0;
var video6scale = 1;
var video6x = 0;
var video6y = 0;

slider6rotation.oninput = function() {
  outputrotation6.innerHTML = this.value;
  video6rotation = this.value
  $(".video6").css({'transform' : 'scale( '+ video6scale + ') translateX( '+ video6x + 'px) translateY( '+ video6y + 'px) rotate('+ video6rotation +'deg)'});
}

var sliderscale6 = document.getElementById("scale6");
var outputscale6 = document.getElementById("output_scale6");
outputscale6.innerHTML = sliderscale6.value;

sliderscale6.oninput = function() {
  outputscale6.innerHTML = this.value;
  video6scale = this.value;
  $(".video6").css({'transform' : 'scale( '+ video6scale + ') translateX( '+ video6x + 'px) translateY( '+ video6y + 'px) rotate('+ video6rotation +'deg)'});
}

var sliderx6 = document.getElementById("x6");
var outputx6 = document.getElementById("output_x6");
outputx6.innerHTML = sliderx6.value;

sliderx6.oninput = function() {
  outputx6.innerHTML = this.value;
  video6x = this.value;
  $(".video6").css({'transform' : 'scale( '+ video6scale + ') translateX( '+ video6x + 'px) translateY( '+ video6y + 'px) rotate('+ video6rotation +'deg)'});
}

var slidery6 = document.getElementById("y6");
var outputy6 = document.getElementById("output_y6");
outputy6.innerHTML = slidery6.value;

slidery6.oninput = function() {
  outputy6.innerHTML = this.value;
  video6y = this.value;
  $(".video6").css({'transform' : 'scale( '+ video6scale + ') translateX( '+ video6x + 'px) translateY( '+ video6y + 'px) rotate('+ video6rotation +'deg)'});
}

var vid6oncounter = 1;

$("#vid6on").on('click', function(){
    if (vid6oncounter % 2 == 0){
        $( ".video6" ).hide()
        console.log("on")
        $("#vid6on").css({"background-color": "transparent"});
        }
    else {
            $( ".video6" ).show()
            console.log("off")
            $("#vid6on").css({"background-color": "yellowgreen"});
            }
    vid6oncounter = vid6oncounter + 1

});

var vid6invertcounter = 2;

$("#vid6invert").on('click', function(){
    if (vid6invertcounter % 2 == 0){
    $( ".video6" ).css({'filter' : 'invert(100)'})
    $( ".video6" ).css({'background-blend-mode' : 'screen'})
    $("#vid6invert").css({"background-color": "rgb(185, 20, 172)"});

    }
    else {
        $( ".video6" ).css({'filter' : 'invert(0)'})
        $( ".video6" ).css({'background-blend-mode' : 'multiply'})
        $("#vid6invert").css({"background-color": "transparent"});
        }

    vid6invertcounter = vid6invertcounter + 1
});

// sliders 7

var slider7rotation = document.getElementById("rotation7");
var outputrotation7 = document.getElementById("output_rotation7");
outputrotation7.innerHTML = slider7rotation.value;
var video7rotation = 0;
var video7scale = 1;
var video7x = 0;
var video7y = 0;

slider7rotation.oninput = function() {
  outputrotation7.innerHTML = this.value;
  video7rotation = this.value
  $(".video7").css({'transform' : 'scale( '+ video7scale + ') translateX( '+ video7x + 'px) translateY( '+ video7y + 'px) rotate('+ video7rotation +'deg)'});
}

var sliderscale7 = document.getElementById("scale7");
var outputscale7 = document.getElementById("output_scale7");
outputscale7.innerHTML = sliderscale7.value;

sliderscale7.oninput = function() {
  outputscale7.innerHTML = this.value;
  video7scale = this.value;
  $(".video7").css({'transform' : 'scale( '+ video7scale + ') translateX( '+ video7x + 'px) translateY( '+ video7y + 'px) rotate('+ video7rotation +'deg)'});
}

var sliderx7 = document.getElementById("x7");
var outputx7 = document.getElementById("output_x7");
outputx7.innerHTML = sliderx7.value;

sliderx7.oninput = function() {
  outputx7.innerHTML = this.value;
  video7x = this.value;
  $(".video7").css({'transform' : 'scale( '+ video7scale + ') translateX( '+ video7x + 'px) translateY( '+ video7y + 'px) rotate('+ video7rotation +'deg)'});
}

var slidery7 = document.getElementById("y7");
var outputy7 = document.getElementById("output_y7");
outputy7.innerHTML = slidery7.value;

slidery7.oninput = function() {
  outputy7.innerHTML = this.value;
  video7y = this.value;
  $(".video7").css({'transform' : 'scale( '+ video7scale + ') translateX( '+ video7x + 'px) translateY( '+ video7y + 'px) rotate('+ video7rotation +'deg)'});
}

var vid7oncounter = 1;

$("#vid7on").on('click', function(){
    if (vid7oncounter % 2 == 0){
        $( ".video7" ).hide()
        console.log("on")
        $("#vid7on").css({"background-color": "transparent"});
        }
    else {
            $( ".video7" ).show()
            console.log("off")
            $("#vid7on").css({"background-color": "yellowgreen"});
            }
    vid7oncounter = vid7oncounter + 1

});

var vid7invertcounter = 2;

$("#vid7invert").on('click', function(){
    if (vid7invertcounter % 2 == 0){
    $( ".video7" ).css({'filter' : 'invert(100)'})
    $( ".video7" ).css({'background-blend-mode' : 'screen'})
    $("#vid7invert").css({"background-color": "rgb(185, 20, 172)"});

    }
    else {
        $( ".video7" ).css({'filter' : 'invert(0)'})
        $( ".video7" ).css({'background-blend-mode' : 'multiply'})
        $("#vid7invert").css({"background-color": "transparent"});
        }

    vid7invertcounter = vid7invertcounter + 1
});

// sliders 8 

var slider8rotation = document.getElementById("rotation8");
var outputrotation8 = document.getElementById("output_rotation8");
outputrotation8.innerHTML = slider8rotation.value;
var video8rotation = 0;
var video8scale = 1;
var video8x = 0;
var video8y = 0;

slider8rotation.oninput = function() {
  outputrotation8.innerHTML = this.value;
  video8rotation = this.value
  $(".video8").css({'transform' : 'scale( '+ video8scale + ') translateX( '+ video8x + 'px) translateY( '+ video8y + 'px) rotate('+ video8rotation +'deg)'});
}

var sliderscale8 = document.getElementById("scale8");
var outputscale8 = document.getElementById("output_scale8");
outputscale8.innerHTML = sliderscale8.value;

sliderscale8.oninput = function() {
  outputscale8.innerHTML = this.value;
  video8scale = this.value;
  $(".video8").css({'transform' : 'scale( '+ video8scale + ') translateX( '+ video8x + 'px) translateY( '+ video8y + 'px) rotate('+ video8rotation +'deg)'});
}

var sliderx8 = document.getElementById("x8");
var outputx8 = document.getElementById("output_x8");
outputx8.innerHTML = sliderx8.value;

sliderx8.oninput = function() {
  outputx8.innerHTML = this.value;
  video8x = this.value;
  $(".video8").css({'transform' : 'scale( '+ video8scale + ') translateX( '+ video8x + 'px) translateY( '+ video8y + 'px) rotate('+ video8rotation +'deg)'});
}

var slidery8 = document.getElementById("y8");
var outputy8 = document.getElementById("output_y8");
outputy8.innerHTML = slidery8.value;

slidery8.oninput = function() {
  outputy8.innerHTML = this.value;
  video8y = this.value;
  $(".video8").css({'transform' : 'scale( '+ video8scale + ') translateX( '+ video8x + 'px) translateY( '+ video8y + 'px) rotate('+ video8rotation +'deg)'});
}

var vid8oncounter = 1;

$("#vid8on").on('click', function(){
    if (vid8oncounter % 2 == 0){
        $( ".video8" ).hide()
        console.log("on")
        $("#vid8on").css({"background-color": "transparent"});
        }
    else {
            $( ".video8" ).show()
            console.log("off")
            $("#vid8on").css({"background-color": "yellowgreen"});
            }
    vid8oncounter = vid8oncounter + 1

});

var vid8invertcounter = 2;

$("#vid8invert").on('click', function(){
    if (vid8invertcounter % 2 == 0){
    $( ".video8" ).css({'filter' : 'invert(100)'})
    $( ".video8" ).css({'background-blend-mode' : 'screen'})
    $("#vid8invert").css({"background-color": "rgb(185, 20, 172)"});

    }
    else {
        $( ".video8" ).css({'filter' : 'invert(0)'})
        $( ".video8" ).css({'background-blend-mode' : 'multiply'})
        $("#vid8invert").css({"background-color": "transparent"});
        }

    vid8invertcounter = vid8invertcounter + 1
});

// sliders 9 

// sliders 10 
