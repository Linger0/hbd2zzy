/*
 * @Author: your name
 * @Date: 2021-03-25 09:07:37
 * @LastEditTime: 2021-03-25 09:12:41
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 */
$(document).ready(() => {
    $("#main-page p").fadeIn(500);
});
$("#login-button").click(function (event) {
    var userName = document.getElementById("userName").value;
    // 修改密码请改此处
    if (userName.toUpperCase().trim() == "TOT") {
        event.preventDefault();
        $("form").fadeOut(500);
        $(".wrapper").addClass("form-success");
        $(".container").fadeOut(500);
        setTimeout(function () {
            location.href = "Memories.html";
        }, 500);
    } else if (userName == "") {
        event.preventDefault();
    } else {
        event.preventDefault();
        alert("输错了！如果不是 zzy，请点返回进入另一个。");
    }
});
$("#login-button-oth").click(function (event) {
    var userName = document.getElementById("userName-oth").value;
    // 修改密码请改此处
    if (userName.toUpperCase().trim() == "1010") {
        event.preventDefault();
        $("form").fadeOut(500);
        $(".wrapper").addClass("form-success");
        $(".container").fadeOut(500);
        setTimeout(function () {
            location.href = "Memories-oth.html";
        }, 500);
    } else if (userName == "") {
        event.preventDefault();
    } else {
        event.preventDefault();
        alert("输错了！如果不知道口令，可以问 zzy，记得先送上生日祝福哦~");
    }
});
$("#zzy-click").click(function () {
    $("#main-page").fadeOut(500);
    $("#zzy-login").fadeIn(500);
});
$("#oth-click").click(function () {
    $("#main-page").fadeOut(500);
    $("#oth-login").fadeIn(500);
});
$(".rtn-main").click(function () {
    $("#zzy-login").fadeOut(500);
    $("#oth-login").fadeOut(500);
    $("#main-page").fadeIn(500);
});
