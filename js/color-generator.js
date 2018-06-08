das = 0;
vsg = 0;
pur = 0;
answer = "";
var ur = new Array();
ur[0] = "";
var blue = "#0000ff",
    red = "#ff0000",
    green = "#00ff00",
    color_box = $('#color_box'),
    col = ["#00ff00", "#0000ff", "#ff0000"];

function vip(XX) {
    var rand = Math.floor(Math.random() * col.length),
        color = (col[rand]),
        ng_desc = $('.instruction'),
        ng_results = $('#numbers_result'),
        ng_count = $('#numbers_count'),
        ng_restart = $('#restart');
    color_box.css("backgroundColor", color);
    ng_desc.fadeOut(300);
    ng_results.fadeIn(700);
    ng_count.fadeIn(700);
    ng_restart.css("display", "block");
    vsg++;
    console.log(color);
    if (XX == color) {
        das++;
        prn = Math.round(das / vsg * 1000) / 10;
        if (vsg > 50) {
            if (prn <= 20) {
                pur = 1;
            }
            if (prn > 20 && prn <= 27) {
                pur = 2;
            }
            if (prn > 27 && prn <= 36) {
                pur = 3;
            }
            if (prn > 36 && prn <= 41) {
                pur = 4;
            }
            if (prn > 41 && prn <= 50) {
                pur = 5;
            }
            if (prn > 50) {
                pur = 6;
            }
        }
        answer = "Да, Вы выбрали правильный цвет!";
    } else {
        prn = Math.round(das / vsg * 1000) / 10;
        if (vsg > 50) {
            if (prn <= 20) {
                pur = 1;
            }
            if (prn > 20 && prn <= 27) {
                pur = 2;
            }
            if (prn > 27 && prn <= 36) {
                pur = 3;
            }
            if (prn > 36 && prn <= 41) {
                pur = 4;
            }
            if (prn > 41 && prn <= 50) {
                pur = 5;
            }
            if (prn > 50) {
                pur = 6;
            }
        }
        answer = "Нет, это был другой цвет";
    }
    ng_results.html(answer);
    ng_count.html('предсказано ' + prn + '% из ' + vsg + ' попыток ') + ur[pur];
}
$(function () {
    $('#restart ').on('click', function () {
        location.reload(true);
    });
});
$(function () {
    $('#color_box').on("click", function () {
        color_box.css("backgroundColor", "#fff");
    })
});