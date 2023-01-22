// スライドメニュー
$('.openbtn').click(function(){
    $('.openbtn').toggleClass('close');
    $('#menu-navi').toggleClass('panelclose');
});


// dogsの写真をスライド
var ActiveSlideNum = 0;
// var count = $(".dogSlides").children("li").length;
// var imgWidth = $(".dogSlides").children("li").width();
var count = $(".dogSlides li").length;
var imgWidth = $(".dogSlides li").width();

console.log(count);
console.log(imgWidth);

// ボタンの生成
$(".next-btn").after("<div class='index-btns'></div>");
for (var i = 0; i < count; i++) {
	$(".index-btns").append("<button class='index-btn'>" + (i + 1) + "</button>");
}
$(".index-btn").eq(0).addClass("js-btn-active");

// 現在のスライドが何枚目かによって前後のボタンを消去する関数
function toggleChangeBtn() {
    var slideIndex = $('.index-btn').index($('.js-btn-active'));

        $(".change-btn").show();
    if (slideIndex == 0){
        $(".prev-btn").hide();
    }else if(slideIndex == count-1){
        $(".next-btn").hide();
    }
}

// change-btnクラスを持つボタンをクリックしたときの処理
$(".change-btn").click(function(){
    var $displaySlide = $(".js-btn-active");

	$displaySlide.removeClass("js-btn-active");
    if($(this).hasClass("next-btn")){
        ActiveSlideNum++;
		$(".dogSlides li").css("transform","translateX(" + -imgWidth * ActiveSlideNum + "px)");
		$displaySlide.next().addClass("js-btn-active");

    }else{
        ActiveSlideNum--;
		$(".dogSlides li").css("transform","translateX(" + -imgWidth * ActiveSlideNum + "px)");
		$displaySlide.prev().addClass("js-btn-active");

    }
    toggleChangeBtn();

});

// index-btnクラスを持つボタンをクリックしたときの処理
$(".index-btn").click(function(){
	var clickedIndex = $(".index-btn").index($(this));

	$(".js-btn-active").removeClass("js-btn-active");
    $(".index-btn").eq(clickedIndex).addClass("js-btn-active");
    ActiveSlideNum = clickedIndex;

    $(".dogSlides li").css("transform", "translateX(" + -imgWidth * ActiveSlideNum + "px)");
    toggleChangeBtn();
});


// モーダルウィンドウ START
//セントバーナード
const modal1 = $('#js-modal1'); 
const open1 = $('#js-dog-modal1');
const close1 =$('#js-close1');
// ゴールデンレトリバー
const modal2 = $('#js-modal2'); 
const open2= $('#js-dog-modal2');
const close2 =$('#js-close2');
// 秋田犬
const modal3 = $('#js-modal3'); 
const open3= $('#js-dog-modal3');
const close3 =$('#js-close3');
// ラブラドール
const modal4 = $('#js-modal4'); 
const open4= $('#js-dog-modal4');
const close4 =$('#js-close4');
// ダルメシアン
const modal5 = $('#js-modal5'); 
const open5= $('#js-dog-modal5');
const close5 =$('#js-close5');

const overlay = $('#js-overlay');


// ボタンをクリックしたらmodalクラスとoverlayクラスにopenクラス付与
// セントバーナード START
open1.on('click',function(){
    modal1.addClass('open');
    overlay.addClass('open');
    $('body').css('overflow-y','hidden');
});
// セントバーナード END
// ゴールデンレトリバー START
open2.on('click',function(){
    modal2.addClass('open');
    overlay.addClass('open');
    $('body').css('overflow-y','hidden');
});
// ゴールデンレトリバー END
// 秋田犬 START
open3.on('click',function(){
    modal3.addClass('open');
    overlay.addClass('open');
    $('body').css('overflow-y','hidden');
});
// 秋田犬 END
// ラブラドール START
open4.on('click',function(){
    modal4.addClass('open');
    overlay.addClass('open');
    $('body').css('overflow-y','hidden');
});
// ラブラドール END
// ダルメシアン START
open5.on('click',function(){
    modal5.addClass('open');
    overlay.addClass('open');
    $('body').css('overflow-y','hidden');
});
// ダルメシアン END


// ×ボタンをクリックしたらmodalクラスとoverlayクラスからopenクラスを削除
// セントバーナード START
close1.on('click',function(){
    modal1.removeClass('open');
    overlay.removeClass('open');
    $('body').css('overflow-y','auto');
});
// セントバーナード END
// ゴールデンレトリバー START
close2.on('click',function(){
    modal2.removeClass('open');
    overlay.removeClass('open');
    $('body').css('overflow-y','auto');
});
// ゴールデンレトリバー END
// 秋田犬 START
close3.on('click',function(){
    modal3.removeClass('open');
    overlay.removeClass('open');
    $('body').css('overflow-y','auto');
});
// 秋田犬 END
// ラブラドール START
close4.on('click',function(){
    modal4.removeClass('open');
    overlay.removeClass('open');
    $('body').css('overflow-y','auto');
});
// ラブラドール END
// ダルメシアン START
close5.on('click',function(){
    modal5.removeClass('open');
    overlay.removeClass('open');
    $('body').css('overflow-y','auto');
});
// ダルメシアン END

// モーダルウィンドウ END

// フェードイン　START

$(function(){
    $(window).on('load scroll', function(){
        $('.animation').each(function(){
            // ターゲットの位置を取得
            var target = $(this).offset().top;
            // スクロール量を取得
            var scroll = $(window).scrollTop();
            // ウィンドウの高さを取得
            var height = $(window).height();
            // ターゲットまでスクロールするとフェードイン
            if(scroll > target-height){
                $(this).addClass('active');
            }

        });
    });
});
// フェードイン　END

// ページ内スクロール　START
$('a[href^="#"]').click(function () {
    $('.openbtn').toggleClass('close');
    $('#menu-navi').toggleClass('panelclose');
});
// ページ内スクロール　END
