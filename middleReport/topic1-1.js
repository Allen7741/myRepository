//tbl1
var myArray1 = [['', '5', '1'], ['', '3', '6'], ['8', '7', '']];
var t = document.getElementById("tbl1");
for (var i = 0; i < t.rows.length; i++)
    for (var j = 0; j < t.rows[i].cells.length; j++)
        t.rows[i].cells[j].innerText = myArray1[i][j];

//tbl2
var myArray2 = [['', '', ''], ['', '', ''], ['4', '', '1']];
var t = document.getElementById("tbl2");
for (var i = 0; i < t.rows.length; i++)
    for (var j = 0; j < t.rows[i].cells.length; j++)
        t.rows[i].cells[j].innerText = myArray2[i][j];

//tbl3
var myArray3 = [['4', '', ''], ['8', '', '2'], ['', '3', '']];
var t = document.getElementById("tbl3");
for (var i = 0; i < t.rows.length; i++)
    for (var j = 0; j < t.rows[i].cells.length; j++)
        t.rows[i].cells[j].innerText = myArray3[i][j];

//tbl4
var myArray4 = [['', '2', ''], ['', '', '4'], ['5', '', '']];
var t = document.getElementById("tbl4");
for (var i = 0; i < t.rows.length; i++)
    for (var j = 0; j < t.rows[i].cells.length; j++)
        t.rows[i].cells[j].innerText = myArray4[i][j];
//tbl5
var myArray5 = [['9', '4', ''], ['8', '', '3'], ['', '1', '7']];
var t = document.getElementById("tbl5");
for (var i = 0; i < t.rows.length; i++)
    for (var j = 0; j < t.rows[i].cells.length; j++)
        t.rows[i].cells[j].innerText = myArray5[i][j];
//tbl6
var myArray6 = [['', '', '1'], ['2', '', ''], ['', '4', '']];
var t = document.getElementById("tbl6");
for (var i = 0; i < t.rows.length; i++)
    for (var j = 0; j < t.rows[i].cells.length; j++)
        t.rows[i].cells[j].innerText = myArray6[i][j];
//tbl7
var myArray7 = [['', '1', ''], ['6', '', '9'], ['', '', '5']];
var t = document.getElementById("tbl7");
for (var i = 0; i < t.rows.length; i++)
    for (var j = 0; j < t.rows[i].cells.length; j++)
        t.rows[i].cells[j].innerText = myArray7[i][j];

//tbl8
var myArray8 = [['6', '', '4'], ['', '', ''], ['', '', '']];
var t = document.getElementById("tbl8");
for (var i = 0; i < t.rows.length; i++)
    for (var j = 0; j < t.rows[i].cells.length; j++)
        t.rows[i].cells[j].innerText = myArray8[i][j];

//tbl9
var myArray9 = [['', '2', '9'], ['1', '8', ''], ['7', '6', '']];
var t = document.getElementById("tbl9");
for (var i = 0; i < t.rows.length; i++)
    for (var j = 0; j < t.rows[i].cells.length; j++)
        t.rows[i].cells[j].innerText = myArray9[i][j];

$(".btnyy").on('click', function () {
    var s = $('table').find('.thXX');
    s = Array.from(s);
    var sArray = [
        9, 5, 1, 4, 3, 6, 8, 7, 2,
        3, 2, 8, 7, 9, 5, 4, 6, 1,
        4, 7, 6, 8, 1, 2, 9, 3, 5,
        7, 2, 8, 1, 6, 4, 5, 9, 3,
        9, 4, 6, 8, 5, 3, 2, 1, 7,
        3, 5, 1, 2, 9, 7, 6, 4, 8,
        3, 1, 7, 6, 4, 9, 2, 8, 5,
        6, 8, 4, 5, 7, 2, 1, 3, 9,
        5, 2, 9, 1, 8, 3, 7, 6, 4];
    s.forEach(function (itam, index) {
        if (Number(itam.innerText) !== sArray[index]) $(itam).addClass("erro");
    });
    var p = $('table').find('.erro');
    p = Array.from(p);
    if (p.length === 0) {
        window.location.href="clearance.html";
    }
})