var index_ = "";
$(".thXX").on('click', function () {
    $(".thXX").removeClass("thOnClick");
    index_ = $(this).attr("index");
    $(this).addClass("thOnClick");
    console.log(index_);
})

//數字按鈕1~9
$(".btn99").on('click', function () {
    var num = $(this).text();
    $(".thXX").removeClass("erro");
    $("table").find(".thXX[index=" + index_ + "]").text(num);
})


//btnxx
$(".btnxx").on('click', function () {

    $("table").find(".thXX[index=" + index_ + "]").text('').removeClass('erro');
})

/* $(document).ready(function () {
    $(".yes").click(function () {
        $(".thXX").text("");
    });
}); */

$(".yes").on('click', function () {
    window.location.reload()
})