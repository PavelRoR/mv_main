das=0;
vsg=0;
pur=0;
dnts="";
var ur = new Array();
ur[0]="";
ur[1]="<br><br>Ваш уровень предсказаний значительно ниже, чем уровень случайного совпадения. Вам следует уделять больше времени для тренировки свей интуиции.";
ur[2]="<br><br>Ваш уровень предсказаний ниже, чем уровень случайного совпадения. Уделите время для развития своей интуиции.";
ur[3]="<br><br>Ваш уровень предсказаний близок к уровню случайного совпадения. Это все равно, что постоянно нажимать на один и тот же вариант ответа.";
ur[4]="<br><br>Ваш уровень предсказаний чуть выше уровня случайного совпадения. Если Вы будете развивать свою интуицию, у Вас есть шанс выиграть в соревновании со слепым случаем.";
ur[5]="<br><br>Ваш уровень предсказаний на порядок выше уровня случайного совпадения. Если Вы будете полагаться на свою интуицию, Вы получите больше, чем просто полагаясь на случай или слепое везение.";
ur[6]="<br><br>Ваша интуиция уникальна. Руководствуйтесь в жизни только своей интуицией и все будет ОК.";
var blue = "#0000ff", red = "#ff0000", green = "#00ff00", col = ["#00ff00",  "#0000ff",  "#ff0000"];
function vip(XX)
{
	var rand = Math.floor(Math.random() * col.length);
	var color = ( col[rand] );
	pole.style.background=color;
	vvd.style.display="none";// Убирает текст
	re.style.display="inline-block";// Добавляет кнопку
	vsg++;
	console.log(color);
	if(XX==color)
{
das++;
prn=Math.round(das/vsg*1000)/10;
	if(vsg>50)
	{
	if(prn<=20){pur=1;}
	if(prn>20 && prn<=27){pur=2;}
	if(prn>27 && prn<=36){pur=3;}
	if(prn>36 && prn<=41){pur=4;}
	if(prn>41 && prn<=50){pur=5;}
	if(prn>50){pur=6;}
	}
dnts="Да, Вы выбрали правильный цвет!";
}
else
{
prn=Math.round(das/vsg*1000)/10;
	if(vsg>50)
	{
	if(prn<=20){pur=1;}
	if(prn>20 && prn<=27){pur=2;}
	if(prn>27 && prn<=36){pur=3;}
	if(prn>36 && prn<=41){pur=4;}
	if(prn>41 && prn<=50){pur=5;}
	if(prn>50){pur=6;}
	}
dnts="Нет, это был другой цвет";
}
dnt.innerHTML=dnts;
orz.innerHTML='предсказано <strong>'+prn+'%</strong> из <strong>'+vsg+'</strong> попыток'+ur[pur];
}
var div = document.createElement("div");
div.fbbutton.style.width=tr._51mx.style.width;