
    // $(document).ready(function () {

    //     // $("p:eq(1)").click(function(){
    //     //     $(this).css("color", "Blue");
    //     // });
    //     // $("p:eq(1)").dblclick(function(){
    //     //   $(this).css("color", "Black");
    //     //  });
    //     // $("p:eq(2)").click(function(){
    //     //     $(this).hide();
    //     // });
    //     $("button").click(function () {
    //         $("span").hide();
    //     });

    //     $(".a").click(function () {
    //         $("span").show();
    //     });

    //     $("span").mouseenter(function () {
    //         $(this).css("color", "Blue");
    //     });

    //     $("span").mouseleave(function () {
    //         $(this).css("color", "black");
    //     });

    //     $(".a").hover
    //         (function () {

    //             $(this).css("color", "green");
    //         },
    //             function () {
    //                 $(this).css("color", "");
    //             });

    //     $("p:eq(3)").click(function () {
    //         alert("Welcome to TeKhqs");
    //     });

    //     $("input").focus(function () {
    //         $(this).css("background-color", "#F5F5DC");
    //     });

    //     $("input").blur(function () {
    //         $(this).css("background-color", "white");
    //     });

    //     $(".x").on({
    //         mouseenter: function () {
    //             $(this).css("background-color", "lightblue");
    //         },
    //         mouseleave: function () {
    //             $(this).css("background-color", "#DCDCDC")
    //         },
    //         click: function () {
    //             $("Span").hide();

    //         }
    //     });

    //     // $(".edu").on({
    //     //     mouseenter: function () {
    //     //         $(this).fadeOut("slow");
    //     //     },
    //     //     mouseleave: function () {
    //     //         $(this).fadeIn("slow");}
    //     //     });    
    //     // $(".edu").fadeIn(3000);
    //     $(".edu").fadeToggle(3000);
    //     $(".num").slideToggle(3000);
    //     $(".animate").click(function(){
    //         var div = $(this);
    //         div.animate({height: '300px', opacity: '0.4'}, "slow");
    //         div.animate({width: '300px', opacity: '0.8'}, "slow");
    //         div.animate({height: '100px', opacity: '0.4'}, "slow");
    //         div.animate({width: '100px', opacity: '0.8'}, "slow");
    //     });

    //     $('.num').load('./MyData.html');

    // });

document.getElementById("x").innerHTML="Skills";
document.getElementsByClassName("demo")[0].innerHTML = "Date : " + Date();
function validateForm() {
    let x = document.forms["myForm"]["fname"].value;
    if (x == "") {
      alert("Name must be filled out");
      return false;
    }

  }






  