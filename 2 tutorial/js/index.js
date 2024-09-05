$(".moon").click(function(){
    $("body").addClass("theme");
    $(".moon").hide();
    $(".sun").show();
})

$(".sun").click(function(){
    $("body").removClass("theme");
    $(".moon").show();
     $(".sun").hide();
})