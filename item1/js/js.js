// JavaScript Document
$(function(){
	//==================banner=================
	//-----------banner图遍历-----------------
		var num=0;
		var num_banner_li=0;
		var timer=null;
		var num_p=0;
		var ul_move=0;
		var ul_move_auto=0;
		var timer=null;
		var move_num=0;
		var circle_num=0;
		var timer1=null;
		var timer2=null;
		var circle_num2=0;
		$('#header .banner li').each(function(index, element) {
			num=index+1;
			$(element).css('background-image','url(images/banner0'+num+'.png)')
		});
	//----------------banner图左右轮播-------------
		function fn(e) {
				num_banner_li++;
				if(num_banner_li>4){num_banner_li=0}
				$('#header .banner li').eq(num_banner_li).stop().animate({'top':'0'},1500,"tantiao").siblings().stop().animate({'top':'-600'},0);
		}
		$('#header .header_bottm .right').click(fn);
		$('#header .header_bottm .left').click(function(e) {
			num_banner_li--;
			if(num_banner_li<0){num_banner_li=4}
            $('#header .banner li').eq(num_banner_li).stop().animate({'top':'0'},1500,"tantiao").siblings().stop().animate({'top':'-600'},0);
        });
	//----------------banner定时器---------
		timer=setInterval(fn,4000);
	//==============鼠标经过banner清除定时器
		$('#header .header_bottm').mouseover(function(e) {
			clearInterval(timer);
	    });
		$('#header .header_bottm').mouseout(function(){
			clearInterval(timer);
			timer=setInterval(fn,4000);
		});
	//=======================nav经过状态==================
		$('#header .header_top ul li').hover(function(e) {
			$(this).children('a').toggleClass('current')
			$(this).children('.box').stop().slideToggle(200);
		});
	//=======================鼠标经过显示span==================
		$('#header .header_bottm').bind({
			'mouseenter':function(){
				$('#header .header_bottm span').fadeIn(100);
			},
			'mouseleave':function(){
				$('#header .header_bottm span').fadeOut(100)
			}
		});
	//================鼠标经过内容导航的状态================
	$('#con .nav_two ul li').hover(function(e) {
        $(this).children('div').toggleClass('pass1');
		$(this).children('a').toggleClass('pass');
		$(this).children('a').toggleClass('pass2')	
    });
	//================给middle_box里的产品加换图=================
		$('#con .middle_box .product ul li a .pic').each(function(index, element) {
			num_p=index+1;
			$(element).css('background-image','url(images/product_p'+num_p+'.jpg)')
		});	
		$('#con .middle_box .product ul li a').hover(function(e) {
			$(this).children('.pic').stop().animate({'height':'0'},300);
		},function(){
			$(this).children('.pic').stop().animate({'height':'220px'},300);
		});
	//=================left_box================
	//---------------------给资质荣誉遍历换图--------------
		$('#con .bottom_box .left div ul li').each(function(index, element) {
			num_ry=index+1;
            $(element).css('background-image','url(images/ry_pic'+num_ry+'.jpg)')
        });
		
		$('#con .bottom_box .left .cricle li').mouseover(function(e) {
			ul_move=-$(this).index()*495
			$(this).addClass('now').siblings().removeClass('now')
            $('#con .bottom_box .left div ul').animate({'left':ul_move+'px'},200)
        });
	//------------ul_move定时器------------------
		function fn_ry(){
			ul_move_auto++;
			if(ul_move_auto>2){
				ul_move_auto=1;
				$('#con .bottom_box .left div ul').css('left','0')
			};
			ul_move=-ul_move_auto*495;
            $('#con .bottom_box .left div ul').animate({'left':ul_move+'px'},500)
		}
		timer2=setInterval(fn_ry,4000)
	//-----------------鼠标经过ul清除定时器-------------
		$('#con .bottom_box .left .cricle').hover(function(e) {
            clearInterval(timer2);
        },function(){
			timer2=setInterval(fn_ry,4000)
		});
	//========================right_box================
	//------------------鼠标经过原点换图---------------
	$('#con .bottom_box .right .cricle li').hover(function(e) {
		clearInterval(timer1);
		circle_num=move_num=$(this).index();
        $(this).addClass('now').siblings().removeClass('now');
		$('#con .bottom_box .right div ul').stop().animate({'left':($(this).index()*-500)+'px'},500);
    },function(){
		timer1=setInterval(fn2,6000);
	});
	//======================鼠标经过=============
	//------------clone节点---------------
		$('#con .bottom_box .right div ul li').eq(0).clone().appendTo('#con .bottom_box .right div ul')
		//-----------------------右按钮-----------
		function fn2(e) {
			move_num++;
			if(move_num>4){
				move_num=1
				$('#con .bottom_box .right div ul').css('left','0');
			}
			circle_num++;
			if(circle_num>3){circle_num=0}
			$('#con .bottom_box .right .cricle li').eq(circle_num).addClass('now').siblings().removeClass('now');
			$('#con .bottom_box .right div ul').stop().animate({'left':(move_num*-500)+'px'},500)
		}
		$('#con .bottom_box .right .right_arr').click(
			function (e) {
			move_num++;
			if(move_num>4){
				move_num=1
				$('#con .bottom_box .right div ul').css('left','0');
			}
			circle_num++;
			if(circle_num>3){circle_num=0}
			$('#con .bottom_box .right .cricle li').eq(circle_num).addClass('now').siblings().removeClass('now');
			$('#con .bottom_box .right div ul').stop().animate({'left':(move_num*-500)+'px'},500)
		}
		);
		//-----------------------左按钮-----------
		$('#con .bottom_box .right .left_arr').click(function(e) {
			move_num--;
			if(move_num<0){
				move_num=3;
				$('#con .bottom_box .right div ul').css('left','-2000px');
			}
			circle_num--;
			if(circle_num<0){circle_num=3}
			$('#con .bottom_box .right .cricle li').eq(circle_num).addClass('now').siblings().removeClass('now');
			$('#con .bottom_box .right div ul').stop().animate({'left':(move_num*-500)+'px'},500)
		});
	//-----------------定时器-----------------
		timer1=setInterval(fn2,6000);
		
		
		
	//=====================news--js==============
		setTimeout(function(){
				$('.header_bg ol').stop().animate({right:-30},1000,'tantiao');
		},500)
	var news_num=0;
		$('.header_bg ol li:nth-child(1)').click(function(e) {
			if(news_num==0){
				$('.header_bg ol').stop().animate({right:-560},1000,'tantiao');
				$(this).addClass('news_current');
				$(this).children('span').addClass('news_current');
				news_num=1;
			}else{
				$('.header_bg ol').stop().animate({right:-30},1000,'tantiao');
				$(this).removeClass('news_current');
				$(this).children('span').removeClass('news_current');
				news_num=0
			}
        });
	//----------------给news_pic遍历-------------
		$('#news_con .left ul li').each(function(index, element) {
            $(element).css('background-image','url(images/news_p'+(index+1)+'.jpg)')
        });
	//s------------鼠标经过------新闻右侧---标题状态------------
		$('#news_con .right dl dd').hover(function(e) {
            $(this).children('span').stop().animate({left:0},500,'tantiao')
        },function(){
            $(this).children('span').stop().animate({left:-200},500,'tantiao')
		});
	//-------------------图片跳动-----------------
	var top=0;
	var timer_pic=null;
		function pic(){
			if(top==0){
				$('#news_con .right .right_bottom img').stop().animate({top:100},1500,'tantiao');
				top=1
			}else{
				$('#news_con .right .right_bottom img').stop().animate({top:0},1500,'tantiao');
				top=0
			}
		}
		timer_pic=setInterval(pic,1000);
		$('#news_con .right .right_bottom').hover(function(e) {
            clearInterval(timer_pic);
        },function(){
            clearInterval(timer_pic);
			timer_pic=setInterval(pic,1000);
		});
	//-------------------给产品图加遍历----------------
		$('#news_con .left dl dd').each(function(index, element) {
            $(element).css('background-image','url(images/product_pic'+(index+1)+'.jpg)')
        });
	
	
});