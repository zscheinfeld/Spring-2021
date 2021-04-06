var nums = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31],
    ranNums = [],
    i = nums.length,
    j = 0;

while (i--) {
    j = Math.floor(Math.random() * (i+1));
    ranNums.push(nums[j]);
    nums.splice(j,1);
}
console.log(ranNums)


var toppx = (100*Math.random() + "%")


var imgArray = new Array();
imgArray[0] = new Image();
imgArray[0].src = 'Gifs/01.gif';
imgArray[1] = new Image();
imgArray[1].src = 'Gifs/02.gif';
imgArray[2] = new Image();
imgArray[2].src = 'Gifs/03.gif';
imgArray[3] = new Image();
imgArray[3].src = 'Gifs/04.gif';
imgArray[4] = new Image();
imgArray[4].src = 'Gifs/05.gif';
imgArray[5] = new Image();
imgArray[5].src = 'Gifs/06.gif';
imgArray[6] = new Image();
imgArray[6].src = 'Gifs/07.gif';
imgArray[7] = new Image();
imgArray[7].src = 'Gifs/08.gif';
imgArray[8] = new Image();
imgArray[8].src = 'Gifs/09.gif';
imgArray[9] = new Image();
imgArray[9].src = 'Gifs/10.gif';
imgArray[10] = new Image();
imgArray[10].src = 'Gifs/11.gif';
imgArray[11] = new Image();
imgArray[11].src = 'Gifs/12.gif';
imgArray[12] = new Image();
imgArray[12].src = 'Gifs/13.gif';
imgArray[13] = new Image();
imgArray[13].src = 'Gifs/14.gif';
imgArray[14] = new Image();
imgArray[14].src = 'Gifs/15.gif';
imgArray[15] = new Image();
imgArray[15].src = 'Gifs/16.gif';
imgArray[16] = new Image();
imgArray[16].src = 'Gifs/17.gif';
imgArray[17] = new Image();
imgArray[17].src = 'Gifs/18.gif';
imgArray[18] = new Image();
imgArray[18].src = 'Gifs/19.gif';
imgArray[19] = new Image();
imgArray[19].src = 'Gifs/20.gif';
imgArray[20] = new Image();
imgArray[20].src = 'Gifs/21.gif';
imgArray[21] = new Image();
imgArray[21].src = 'Gifs/22.gif';
imgArray[22] = new Image();
imgArray[22].src = 'Gifs/23.gif';
imgArray[23] = new Image();
imgArray[23].src = 'Gifs/24.gif';
imgArray[24] = new Image();
imgArray[24].src = 'Gifs/25.gif';
imgArray[25] = new Image();
imgArray[25].src = 'Gifs/26.gif';
imgArray[26] = new Image();
imgArray[26].src = 'Gifs/27.gif';
imgArray[27] = new Image();
imgArray[27].src = 'Gifs/28.gif';
imgArray[28] = new Image();
imgArray[28].src = 'Gifs/29.gif';
imgArray[29] = new Image();
imgArray[29].src = 'Gifs/30.gif';
imgArray[30] = new Image();
imgArray[30].src = 'Gifs/31.gif';
imgArray[31] = new Image();
imgArray[31].src = 'Gifs/32.gif';


$('.art_01').prepend(imgArray[ranNums[0]]);
$(".art_01").css({top: (150*Math.random() + "%")});
$(".art_01").css({left: (80*Math.random() + "%")});

$('.art_02').prepend(imgArray[ranNums[1]]);
$(".art_02").css({top: (150*Math.random() + "%")});
$(".art_02").css({left: (80*Math.random() + "%")});


$('.art_03').prepend(imgArray[ranNums[2]]);
$(".art_03").css({top: (150*Math.random() + "%")});
$(".art_03").css({left: (80*Math.random() + "%")});


$('.art_04').prepend(imgArray[ranNums[3]]);
$(".art_04").css({top: (150*Math.random() + "%")});
$(".art_04").css({left: (80*Math.random() + "%")});


$('.art_05').prepend(imgArray[ranNums[4]]);
$(".art_05").css({top: (150*Math.random() + "%")});
$(".art_05").css({left: (80*Math.random() + "%")});

$('.art_06').prepend(imgArray[ranNums[5]]);
$(".art_06").css({top: (150*Math.random() + "%")});
$(".art_06").css({left: (80*Math.random() + "%")});

$('.art_07').prepend(imgArray[ranNums[6]]);
$(".art_07").css({top: (150*Math.random() + "%")});
$(".art_07").css({left: (80*Math.random() + "%")});

$('.art_08').prepend(imgArray[ranNums[7]]);
$(".art_08").css({top: (150*Math.random() + "%")});
$(".art_08").css({left: (80*Math.random() + "%")});

$('.textgif1').prepend(imgArray[ranNums[8]]);
$('.textgif2').prepend(imgArray[ranNums[9]]);
$('.textgif3').prepend(imgArray[ranNums[10]]);


var introlength = window.innerHeight * 1.5
console.log(window.innerHeight + "window.innterHeight")
console.log(introlength + "intro length")
console.log(this.scrollY)
var block1height = $("#block1").outerHeight()
var block2height = $("#block2").outerHeight()
var block3height = $("#block3").outerHeight()
var block4height = $("#block4").outerHeight()

var gif1height = $("#gif1").outerHeight()
var gif2height = $("#gif2").outerHeight()
var gif3height = $("#gif3").outerHeight()

window.addEventListener("scroll", function(event){
    var scroll =this.scrollY;
    console.log(scroll);

    if (scroll > introlength){
        console.log("fade")
        $("#intro").removeClass("headline")
        $("#intro").addClass("headlinescroll")

    }
    
    if (introlength > scroll){
        console.log("fade")
        $("#intro").removeClass("headlinescroll")
        $("#intro").addClass("headline")

    }

    // if (scroll> introlength + block1height){
    //     // console.log("backgroundchange")
    //     // console.log(block1height)
    //     // $("#background").addClass("backdropimage1")
    //     // $("#background").removeClass("backdropimage")
    //     $(".backdropimage").css("background-image", "url(/images/09.jpg)")
        
    // }

    // if (scroll < introlength + block1height){
    //     // console.log("backgroundchange again")
    //     // console.log(block1height)
    //     // $("#background").addClass("backdropimage")
    //     // $("#background").removeClass("backdropimage1")
    //     $(".backdropimage").css("background-color", "black")
    //     $(".backdropimage").css("background-image", "")
    // }

    // if (scroll> introlength + block1height + gif1height && scroll < introlength + block1height + block2height + gif1height){
    //     // $("#background").addClass("backdropimageblack")
    // }

    // if (scroll< introlength + block1height + gif1height){
    //     // $("#background").addClass("backdropimage")
    //     // $("#background").removeClass("backdropimageblack")

    // }

    // if (scroll> introlength + block1height + block2height + gif1height-20){
    //     console.log("Next change")
    //     $(".backdropimage").animate({ opacity: 1 }, { duration: 3000 });
    //     $(".backdropimage").css("background-image", "url(/images/15.png)")
    //     // $("#background").addClass("backdropimage2")
    //     // $("#background").removeClass("backdropimageblack")
    // }

    // if (scroll> introlength + block1height + block2height + gif1height-20){
    //     console.log("Next change")
    //     $(".backdropimage").animate({ opacity: 1 }, { duration: 3000 });
    //     $(".backdropimage").css("background-image", "url(/images/15.png)")
    //     // $("#background").addClass("backdropimage2")
    //     // $("#background").removeClass("backdropimageblack")
    // }

    // if (scroll> introlength + block1height + block2height + gif1height + block3height + gif2height-20){
    //     console.log("last change")
    //     $(".backdropimage").animate({ opacity: 1 }, { duration: 3000 });
    //     $(".backdropimage").css("background-image", "url(/images/17.jpeg)")

    //     // $("#background").addClass("backdropimage2")
    //     // $("#background").removeClass("backdropimageblack")
    // }



    // if (scroll < introlength + block1height + block2height + gif1height){
    //     console.log("Next change")
    //     // $("#background").removeClass("backdropimage2")
    //     // $("#background").addClass("backdropimageblack")
    // }



})
