das=0;
vsg=0;
pur=0;
dnts="";
var ur = new Array();
ur[0]="";
ur[1]="<br><br>Ваш уровень предсказаний значительно ниже, чем уровень случайного совпадения. Вам следует уделять больше времени для тренировки свей интуиции.";
ur[2]="<br><br>Ваш уровень предсказаний ниже, чем уровень случайного совпадения. Уделите время для развития своей интуиции.";
ur[3]="<br><br>Ваш уровень предсказаний близок к уровню случайного совпадения. Это все равно, что постоянно нажимть на один и тот же вариант ответа.";
ur[4]="<br><br>Ваш уровень предсказаний чуть выше уровня случайного совпадения. Если Вы будете развивать свою интуицию, у Вас есть шанс выиграть в соревновании со слепым случаем.";
ur[5]="<br><br>Ваш уровень предсказаний на порядок выше уровня случайного совпадения. Если Вы будете полагаться на свою интуицию, Вы получите больше, чем просто полагаясь на случай или слепое везение.";
ur[6]="<br><br>Ваша интуиция уникальна. Руководствуйтесь в жизни только своей интуицией и все будет ОК.";


cht=Math.floor(Math.random()*9)+1; //Рандомит
function vip(XX)
{
	var viv = ' это было число ' + cht;
//	document.getElementById("viv").innerHTML = 'Это было ' cht;
	vvd.style.display="none";// Убирает текст
	re.style.display="inline-block";// Убирает текст
	vsg++;
	if(XX==cht)
{
cht=Math.floor(Math.random()*9)+1; //Рандомит
console.log(cht);
das++;
prn=Math.round(das/vsg*1000)/10;
	if(vsg>50)
	{
	if(prn<=5){pur=1;}
	if(prn>5 && prn<=10){pur=2;}
	if(prn>10 && prn<=12){pur=3;}
	if(prn>13 && prn<=20){pur=4;}
	if(prn>20 && prn<=30){pur=5;}
	if(prn>30){pur=6;}
	}
dnts="Да,";
	document.getElementById('dnt').style.color = "#00ff00"
}
else
{
cht=Math.floor(Math.random()*9)+1; //Рандомит
console.log(cht);
prn=Math.round(das/vsg*1000)/10;
	if(vsg>50)
	{
	if(prn<=5){pur=1;}
	if(prn>5 && prn<=10){pur=2;}
	if(prn>10 && prn<=12){pur=3;}
	if(prn>13 && prn<=20){pur=4;}
	if(prn>20 && prn<=30){pur=5;}
	if(prn>30){pur=6;}
	}
dnts="Нет,";
	document.getElementById('dnt').style.color = "#ff0000"
}
dnt.innerHTML=dnts + viv;
orz.innerHTML='предсказано <strong>'+prn+'%</strong> из <strong>'+vsg+'</strong> попыток'+ur[pur];
}