var num = 0, prc = 0, correct = 0, pur = 0, prc = 0, circle = "url(http://mastervision.su/wp-content/themes/mastevision/img/zen1.png)", cross = "url(http://mastervision.su/wp-content/themes/mastevision/img/zen2.png)", waves = "url(http://mastervision.su/wp-content/themes/mastevision/img/zen3.png)", square = "url(http://mastervision.su/wp-content/themes/mastevision/img/zen4.png)", star = "url(http://mastervision.su/wp-content/themes/mastevision/img/zen5.png)", card;
var ur = new Array();
ur[0]=""; 
ur[1]="<br><br>Ваш уровень предсказаний значительно ниже, чем уровень случайного совпадения. Вам следует уделять больше времени для тренировки свей интуиции.";
ur[2]="<br><br>Ваш уровень предсказаний ниже, чем уровень случайного совпадения. Уделите время для развития своей интуиции.";
ur[3]="<br><br>Ваш уровень предсказаний близок к уровню случайного совпадения. Это все равно, что постоянно нажимать на один и тот же вариант ответа.";
ur[4]="<br><br>Ваш уровень предсказаний чуть выше уровня случайного совпадения. Если Вы будете развивать свою интуицию, у Вас есть шанс выиграть в соревновании со слепым случаем.";
ur[5]="<br><br>Ваш уровень предсказаний на порядок выше уровня случайного совпадения. Если Вы будете полагаться на свою интуицию, Вы получите больше, чем просто полагаясь на случай или слепое везение.";
ur[6]="<br><br>У Вас прекрасная интуиция! Руководствуйтесь в жизни только своей интуицией и все будет ОК.";
card = [circle, cross, waves, square, star];
function vip(XX) {
	var rand = Math.floor(Math.random()*card.length);
	var whichCard = (card[rand]);
	mycard.style.backgroundImage=whichCard;
	mycard.style.backgroundSize="100%";
	console.log(whichCard);
	vvd.style.display="none";// Убирает текст
	re.style.display="inline-block";// Добавляет кнопку
	num++;
	function cardBackground() {
		mycard.style.background="black url(http://mastervision.su/wp-content/themes/mastevision/img/logo3.png) no-repeat center";
		mycard.style.backgroundSize="90%";
	}
	setTimeout(cardBackground, 2000);
	if(XX==whichCard){
		correct++;
	}
    prc=Math.round(correct/num*1000)/10;
	
	if(num>50) {
		if(prc<=13){pur=1;}
		if(prc>13 && prc<=18){pur=2;}
		if(prc>18 && prc<=22){pur=3;}
		if(prc>22 && prc<=30){pur=4;}
		if(prc>30 && prc<=45){pur=5;}
		if(prc>45){pur=6;}
	}
	orz.innerHTML='Правильно <strong>'+prc+'%</strong> из <strong>'+num+'</strong> попыток'+ur[pur];
}
