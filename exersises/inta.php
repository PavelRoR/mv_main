<?php
/*
Template Name: game
*/
?>
<?php get_header() ?>
<section class="game">
	<div class="container"> 
		<h1>Генератор цифр</h1>
		<h2>Тест на проверку и развитие экстрасенсорных способностей</h2>
		<div class="center">
			<table class="tab">
			<tr>
				<td width=100 height=100><a href='javascript:vip(1)'>1</a></td>
				<td width=100 height=100><a href='javascript:vip(2)'>2</a></td>
				<td width=100 height=100><a href='javascript:vip(3)'>3</a></td>
			</tr>
			<tr>
				<td width=100 height=100><a href='javascript:vip(4)'>4</a></td>
				<td width=100 height=100><a href='javascript:vip(5)'>5</a></td>
				<td width=100 height=100><a href='javascript:vip(6)'>6</a></td>
			</tr>
			<tr>
				<td width=100 height=100><a href='javascript:vip(7)'>7</a></td>
				<td width=100 height=100><a href='javascript:vip(8)'>8</a></td>
				<td width=100 height=100><a href='javascript:vip(9)'>9</a></td>
			</tr>
			</table>
			<div id=vvd>
				<p>Вы видите квадрат с девятью цифрами. Вам необходимо, с помощью интуиции, определить какое число было загадано программой.</p><br>
				<p>Если указанная Вами цифра совпадает с цифрой сгенерированной программой - Вы увидите зеленую надпись, в противном случае - красную</p><br>
				<p>Для большей достоверности результатов, сделайте больше 100 попыток.</p><br>
				<p>Для повышения рузультатов, обратите внимания на свои ощущения, на образы, мелькающие в голове, на звуки, вкусы и запахи, которые Вы можете видеть,  слышать или чувствовать в себе.</p>
				<p>Все это может иметь значение, посредством ваших внутренних чувств, проявляется Ваша интуиция.</p>

			</div>
			<div id="dnt"></div><span id="viv"></span><br><br>
			<div id="orz"></div>
			<a href="" onclick="location.reload(true)" id="re">начать сначала</a>
		</div>
	</div>
	<div class="comments">
		<div class="container">
		<h2>Понравился Тест? Расскажите о нем друзьям:</h2>
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