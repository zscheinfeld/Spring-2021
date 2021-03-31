var nums = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],
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


$('.art_01').prepend(imgArray[ranNums[0]]);
$(".art_01").css({top: (150*Math.random() + "%")});
$(".art_01").css({left: (90*Math.random() + "%")});

$('.art_02').prepend(imgArray[ranNums[1]]);
$(".art_02").css({top: (150*Math.random() + "%")});
$(".art_02").css({left: (90*Math.random() + "%")});


$('.art_03').prepend(imgArray[ranNums[2]]);
$(".art_03").css({top: (150*Math.random() + "%")});
$(".art_03").css({left: (90*Math.random() + "%")});


$('.art_04').prepend(imgArray[ranNums[3]]);
$(".art_04").css({top: (150*Math.random() + "%")});
$(".art_04").css({left: (90*Math.random() + "%")});


$('.art_05').prepend(imgArray[ranNums[4]]);
$(".art_05").css({top: (150*Math.random() + "%")});
$(".art_05").css({left: (90*Math.random() + "%")});

$('.art_06').prepend(imgArray[ranNums[5]]);
$(".art_06").css({top: (150*Math.random() + "%")});
$(".art_06").css({left: (90*Math.random() + "%")});

$('.art_07').prepend(imgArray[ranNums[6]]);
$(".art_07").css({top: (150*Math.random() + "%")});
$(".art_07").css({left: (90*Math.random() + "%")});

$('.art_08').prepend(imgArray[ranNums[7]]);
$(".art_08").css({top: (150*Math.random() + "%")});
$(".art_08").css({left: (90*Math.random() + "%")});

$('.textgif1').prepend(imgArray[ranNums[8]]);
$('.textgif2').prepend(imgArray[ranNums[9]]);
$('.textgif3').prepend(imgArray[ranNums[10]]);


var introlength = window.innerHeight * 1.5
console.log(window.innerHeight + "window.innterHeight")
console.log(introlength + "intro length")
console.log(this.scrollY)

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

})
