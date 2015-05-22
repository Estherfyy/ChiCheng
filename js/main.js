$(function(){

	//弹出层高度设置
	var body_h=$(document).height();
	$('.tanchu_opac').css({'height':body_h});
	//转入框文字提示
	$('.biaodan_box input').click(function(){
		if($(this).val()==$(this).attr('name')){
			$(this).val('');
		}
	}).blur(function(){
		if($(this).val()==''){
			$(this).val($(this).attr('name'));
		}		
	});
	//弹出框关闭
	$('.tanchu_opac,.tanchu_zixun .close').click(function(){
		$('.tanchu_opac').fadeOut();
		$('.tanchu_zixun').animate({'height':0,'margin-top':0},500);	
	});
	//其他服务鼠标hover效果
	$('.section4 .ul_box .li_con>div').mouseenter(function(){
		$(this).closest('li').find('.hover_div').css({'opacity':'1','background':'#b80004','display':'block'});	
	})
	$('.section4 .ul_box li').mouseleave(function(){
		$(this).find('.hover_div').stop(true,true).animate({'opacity':0},100,function(){$(this).hide();});
	});
	//点击咨询弹出框
	$('.zixun_yj,.zixun,.zixun_btn,.detail_btn,.cw_zxbtn').not('.tanchu_zixun .zixun_btn,.con_box .cw_zxbtn').click(function(){
		body_h=$(document).height();
		$('.tanchu_opac').css({'height':body_h});		
		$('.tanchu_opac').fadeIn();
		$('.tanchu_zixun').animate({'height':298,'margin-top':'-149px'},500);			
		return false;
	});
	//合作伙伴li边框
	$('.partener_box li:lt(4)').css({'border-top':'none'});
	$('.partenr_effect .partener_box li').each(function() {
	   $('.partener_box li').css({'border-bottom':'0'});
	   if($(this).index()%4==0){$(this).css({'border-left':'0'});}
	    if($(this).index()%4==3){$(this).css({'border-right':'0'});}
		if($(this).index()%8<4){$(this).css({'border-top':'0'});}
    });
	//合作伙伴hover效果
	$('.partenr_effect .partener_box li').hover(function(){
		$(this).find('img').eq(1).stop(true,false).animate({'opacity':'0'},{duration:300,easing:'easeInOutBounce'});
		
	},function(){
		$(this).find('img').eq(1).stop(true,true).animate({'opacity':'1'},{duration:300,easing:'easeInOutBounce'});
	});
	//banner 效果，
	var liEffect=function(v){
		v.animate({'margin-top':'-8px'},{duration:300,easing:'easeInOutBounce',complete:function(){v.animate({'margin-top':'0'});}});

	}
	//其他服务按钮
	$('.zixun_yj').hover(function(){
			$(this).animate({'width':100,'height':34,'line-height':'34px','margin-top':'13px'},100);
		},function(){
			$(this).animate({'width':96,'height':30,'line-height':'30px','margin-top':'15px'},100);
	});
	
/*	//banner 上四个li依次运动
	var bannereffect=function(){
		
		liEffect($('.banner .four_point li').eq(0));
		setTimeout(function(){liEffect($('.banner .four_point li').eq(1));},200);
		setTimeout(function(){liEffect($('.banner .four_point li').eq(2));},400);
		setTimeout(function(){liEffect($('.banner .four_point li').eq(3));},600);
		
	}

	bannereffect();
	//滚动条函数
     var status=1;
     var span_effect;*/
	$(document).scroll(function(){
/*			if($(this).scrollTop()<150){
			bannereffect();
		}
	if($(this).scrollTop()>600&&$(this).scrollTop()<800){
			status=1;
			span_effect=function(){
                   $('.section1 li .red_bizhi').eq(0).animate({'height':'0'},100,function(){
                    $(this).animate({'height':'71px'},500);
                   });
                   $('.section1 li .red_bizhi').eq(1).delay(80).animate({'height':'0'},100,function(){
                    $(this).animate({'height':'71px'},500);
                   });
                   $('.section1 li .red_bizhi').eq(2).delay(160).animate({'height':'0'},100,function(){
                    $(this).animate({'height':'71px'},500);
                   });
                   $('.section1 li .red_bizhi').eq(3).delay(240).animate({'height':'0'},100,function(){
                    $(this).animate({'height':'71px'},500);status=0;
                   });
			}
               if(status==1){span_effect();}

		}*/

	});
	//banner上的咨询按钮
	$('.banner .zixun').mouseenter(function(){
		$('.banner .zixun img').stop(true,true).animate({'width':'128px','height':'46px','margin-top':'-1px','margin-left':'-3px'},200);
	}).mouseleave(function(){
		$('.banner .zixun img').stop(true,true).animate({'width':'122px','height':'44px','margin-top':'0','margin-left':'0px'});
	});
	//banner上的四点
/*	$('.banner .four_point').mouseenter(function(){
		bannereffect();
	});*/
	//其他服务垂直居中
	var margin_top=0;
	$('.section4 .hover_div').each(function(){
		var _this = $(this);
		$(this).show();
		$(this).children().css({'margin-top':(206-$(this).children().height())/2});
		$(this).hide();
	})
	
})


