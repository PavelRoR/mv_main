<!DOCTYPE html>
<?php
/*
Template Name: game3
*/
?>
<?php get_header() ?>
<section class="game">
	<div class="container">
		<h1>Таблица Шульце</h1>
		<h2>Упражнение для развития внимания и скорости восприятия</h2>
		<p>Это упражнение помогает натренировать внимание. Внимание важно во всех аспектах жизни, в то числе и в эзотерически, экстрасенсорных практиках.</p>
		<p>При каждодневной тренировке (если подобных тренеровок прежде не было), на протяжении 2-3 недель, Вы заметите что концентрация Вашего внимание возрасла, станете меньше отвлекаться от важных процессов, начнете замечать в разы больше.</p>
		<p>Правила выполнения упражнения:</p>
		<ul>
			<li>Сядьте перед экраном компьютера таким образом, чтобы вся таблица была в поле вашего зрения</li>
			<li>Зафиксируйте свое внимание в центре таблицы и старайтесь не смещать его</li>
			<li>Переферийным зрением начните находить числа в возрастающем порядке, от 1 и до 25</li>
		</ul>
		<div class="center">
			<style>.table {border-collapse:collapse; text-align: center;}table tbody{margin: 0 auto;}.table td,th,tr{border: solid 1px #333; font-size:35px; color:#112642; text-align:center;}.table td{width:90px; height:90px;}
@media screen and (max-width: 600px) {.table td{height:50px; width:50px;}}
</style>
<script>function shultz(){
function rand (min, max) {
var argc = arguments.length;
if (argc === 0) { min = 0; max = 99999999;}
else if (argc === 1) {throw new Error('Warning: rand() expects exactly 2 parameters, 1 given');}
return Math.floor(Math.random() * (max - min + 1)) + min;}
var Numbers = new Array();
for (var i=1;i<=25;i++){Numbers[i] = i;	}
for (var i=1;i<=25;i++){
var randomer = rand(1,25);
var tmp = Numbers[i];
Numbers[i] = Numbers[randomer];
Numbers[randomer] = tmp;		}
var i3=1;
for (var i=1;i<=5;i++){
for (var i2=1;i2<=5;i2++){
document.getElementById('t_'+i+'_'+i2).innerHTML = Numbers[i3];
i3++;}}}</script>
<script language="javascript"> 
var base = 60; 
var clocktimer,dateObj,dh,dm,ds,ms; 
var readout=''; 
var h=1; 
var m=1; 
var tm=1; 
var s=0; 
var ts=0; 
var ms=0; 
var show=true; 
var init=0; 
var ii=0; 

function clearALL() { 
 clearTimeout(clocktimer); 
 h=1;m=1;tm=1;s=0;ts=0;ms=0; 
 init=0;show=true; 
 readout='00:00:00.00'; 
 document.clockform.clock.value=readout; 
 var CF = document.clockform; 
 ii = 0; } 

function startTIME() { 
var cdateObj = new Date(); 
var t = (cdateObj.getTime() - dateObj.getTime())-(s*1000); 

if (t>999) { s++; } 

if (s>=(m*base)) { ts=0; 
 m++; } else { 
 ts=parseInt((ms/100)+s); 
 if(ts>=base) { ts=ts-((m-1)*base); } } 

if (m>(h*base)) { tm=1; 
 h++; } else { 
 tm=parseInt((ms/100)+m); 
 if(tm>=base) { tm=tm-((h-1)*base); } } 

ms = Math.round(t/10); 
if (ms>99) {ms=0;} 
if (ms==0) {ms='00';} 
if (ms>0&&ms<=9) { ms = '0'+ms; } 

if (ts>0) { ds = ts; if (ts<10) { ds = '0'+ts; }} else { ds = '00'; } 
dm=tm-1; 
if (dm>0) { if (dm<10) { dm = '0'+dm; }} else { dm = '00'; } 
dh=h-1; 
if (dh>0) { if (dh<10) { dh = '0'+dh; }} else { dh = '00'; } 

readout = dh + ':' + dm + ':' + ds + '.' + ms; 
if (show==true) { document.clockform.clock.value = readout; } 

clocktimer = setTimeout("startTIME()",1); } 
function findTIME() { 
if (init==0) { dateObj = new Date(); 
 startTIME(); 
 init=1; 
 } else { if(show==true) { 
 show=false; 
 } else { show=true; } } } 
</script>
<div align="center" style="background: whitesmoke; border:1px solid silver; padding: 20px 0; vertical-align: middle;">
<form name="clockform" style="padding: 0; margin:0; display:inline-block; vertical-align: middle; width: 170px; text-align:center; height:250px; ">
<input type="button" name="" value="Создать таблицу" onclick="shultz();" style=" padding: 10px 14px; width: 130px; margin: 30px 0;">
<input name="clock" value="00:00:00.00" onclick="findTIME()" style="font-size:25px; text-align:center; border:none; color: #darkred;  margin: 0 10px; width:150px;;">  
<input name="starter" type="button" value="СТАРТ/СТОП" onclick="findTIME()" style="display:inline-block; vertical-align: middle; padding: 10px 20px; width: 130px; margin: 10px 0;">
<input name="clearer" type="button" value="Обнулить" onclick="clearALL()" style="display:inline-block; vertical-align: middle; padding: 10px 20px; width: 130px; margin: 10px 0;">
</form>
<table class="table" style=" max-width: 465px; background: white; display:inline-block; vertical-align: middle; text-align:center">
<tbody><tr><td id="t_1_1"></td><td id="t_1_2"></td><td id="t_1_3"></td><td id="t_1_4"></td><td id="t_1_5"></td></tr> 
<tr><td id="t_2_1"></td><td id="t_2_2"></td><td id="t_2_3"></td><td id="t_2_4"></td><td id="t_2_5"></td></tr> 
<tr><td id="t_3_1"></td><td id="t_3_2"></td><td id="t_3_3"></td><td id="t_3_4"></td><td id="t_3_5"></td></tr> 
<tr><td id="t_4_1"></td><td id="t_4_2"></td><td id="t_4_3"></td><td id="t_4_4"></td><td id="t_4_5"></td></tr> 
<tr><td id="t_5_1"></td><td id="t_5_2"></td><td id="t_5_3"></td><td id="t_5_4"></td><td id="t_5_5"></td></tr> 
</tbody></table></div><br><br>
	<h2>Другие уровни сложности:</h2>
		</div>
		
		<div class="col-sm-2"></div>
		<div class="col-sm-4">
			<div class="center"><a href="http://mastervision.su/tests/%D1%88%D1%83%D0%BB%D1%8C%D1%82%D0%B5-6%D1%856/" class="gbutton">Таблица 6х6</a></div>
		</div>
		<div class="col-sm-4">
			<div class="center"><a href="http://mastervision.su/tests/%D1%88%D1%83%D0%BB%D1%8C%D1%82%D0%B5-7%D1%857/" class="gbutton">Таблица 7х7</a></div>
		</div>
		<div class="col-sm-2"></div>
	</div><br><br>
	<div class="comments">
		<div class="container">
		<h2>Понравилось Упражнение? Расскажите о нем друзьям:</h2>
			<div class="socbut">
				<div class="row">
					<div class="col-sm-4">
							<div class="fbbutton"><div class="fb-like" data-href="" data-layout="button_count" data-action="like" data-show-faces="true" data-share="false"></div></div>
						</div>
					<div class="col-sm-4">
						<div class="vkbutton"><div id="vk_like"></div>
						<script type="text/javascript">
						VK.Widgets.Like("vk_like", {type: "button", height: 20});
						</script></div>
					</div>
					<div class="col-sm-4">
					<div class="odnbutton"><div id="ok_shareWidget"></div><script> !function (d, id, did, st) { var js = d.createElement("script"); js.src = "https://connect.ok.ru/connect.js";  js.onload = js.onreadystatechange = function () { if (!this.readyState || this.readyState == "loaded" || this.readyState == "complete") {	if (!this.executed) {  this.executed = true;  setTimeout(function () {	OK.CONNECT.insertShareWidget(id,did,st);  }, 0);	}  }};  d.documentElement.appendChild(js);	}(document,"ok_shareWidget","<?php the_permalink() ?>","{width:170,height:30,st:'rounded',sz:20,ck:3}");	</script></div>

					</div>
				</div>
			</div>
			<div class="clear"></div>
			<div class="row">
				<div class="col-sm-6"><div id="vk_comments"></div>
					<script type="text/javascript">
					VK.Widgets.Comments("vk_comments", {limit: 10, width: "auto", attach: "*"});
					</script></div>
				<div class="col-sm-6"><div class="fb-comments" data-href="<?php the_permalink() ?>" data-width="auto" data-numposts="10" order_by="reverse_time"></div></div>
			</div>
		</div>
	</div>
</section>

<script src="<?= get_template_directory_uri() ?>/js/inta.js"></script>


<?php get_footer() ?>