$(function () {

    //微信
    $('.wx_btn').click(function () {
		body_h=$(document).height();
		$('.tanchu_opac').css({'height':body_h});
		$('.tanchu_opac').fadeIn();
        $('.weixin').css("top", "0px");
        $('.weixin').fadeIn(200, function () {
            $('.weixin').stop(true, true).animate({
                'width': '309px'
            }, 500, function () {
                $('.weixin').stop(true, true).animate({
                    'height': '300px'
                }, 500);
                $('.xuanfu').stop(true, true).animate({
                    'margin-top': '-215px'
                }, 500);
            });
        });
    });

    //关闭微信
    $('.tanchu_opac,.weixin .gb').click(function () {
		$('.tanchu_opac').fadeOut();
        $('.weixin').stop(true, true).animate({
            'height': '59px'
        }, 500);
        $('.xuanfu').stop(true, true).animate({
            'margin-top': '-150px'
        }, 500, function () {
            $('.weixin').stop(true, true).animate({
                'width': '0px'
            }, 500, function () {
                $('.bg').fadeOut(200);
            });
        });
    });

    //留言
    $('.ly-btn,.liuyan_btn').click(function () {
		body_h=$(document).height();
		$('.tanchu_opac').css({'height':body_h});		
		$('.tanchu_opac').fadeIn();
        $('.liuyan2').fadeIn(200, function () {
            $('.liuyan2').stop(true, true).animate({
                'width': '449px'
            }, 550, function () {
                //                $('.liuyan2').animate({
                //                    'margin-top': '0px'
                //                }, 450);
                $('.liuyan2').animate({
                    'height': '420px'
                }, 350)

            })
            $('.xuanfu').animate({
                'margin-top': '-245px'
            }, 550)
        });
    });
    //关闭留言
    $('.tanchu_opac,.liuyan2 .gb').click(function () {
		$('.tanchu_opac').fadeOut();
		$('.tanchu_zixun').animate({'height':0,'margin-top':0},500);
        $('.liuyan2').animate({
            'height': '59px'
        }, 450, function () {
            $('.liuyan2').animate({
                'width': '0px'
            }, 450, function () {
                $('.bg').fadeOut(200);
            });
        });
        $('.xuanfu').animate({
            'margin-top': '-150px'
        }, 450)
    });

    //1电话
    $('.dh_btn').click(function () {
		body_h=$(document).height();
		$('.tanchu_opac').css({'height':body_h});		
		$('.tanchu_opac').fadeIn();
        $('.tel_neirong').fadeIn(200, function () {
            $('.tel_neirong').stop(true, true).animate({
                'width': '450px'
            }, 550, function () {
                //                $('.liuyan2').animate({
                //                    'margin-top': '0px'
                //                }, 450);
                $('.dlBox').animate({
                    'height': '274px'
                }, 350)

            })
            $('.xuanfu').animate({
                'margin-top': '-245px'
            }, 550)
        });
    });
    //1关闭电话
    $('.tanchu_opac,.tel_neirong .gb').click(function () {
		$('.tanchu_opac').fadeOut();
        $('.dlBox').animate({
            'height': '0'
        }, 450, function () {
            $('.tel_neirong').animate({
                'width': '0px'
            }, 450, function () {
                $('.tel_neirong').fadeOut(200);
            });
        });
        $('.xuanfu').animate({
            'margin-top': '-150px'
        }, 450)
    });


    //在线咨询
    $('.qqBtn').click(function () {
		body_h=$(document).height();
		$('.tanchu_opac').css({'height':body_h});		
		$('.tanchu_opac').fadeIn();
        $('.liuyan').fadeIn(200, function () {
            $('.liuyan').stop(true, true).animate({
                'width': '313px'
            }, 550, function () {

                $('.liuyan').animate({
                    'height': '490px'
                }, 350)

            })
            $('.xuanfu').animate({
                'margin-top': '-245px'
            }, 550)
        });
    });



    //关闭在线咨询
    $('.tanchu_opac,.liuyan .gb').click(function () {
		$('.tanchu_opac').fadeOut();
		$('.tanchu_zixun').animate({'height':0,'margin-top':0},500);
        $('.liuyan').animate({
            'height': '59px'
        }, 450, function () {
            $('.liuyan').animate({
                'width': '0px'
            }, 450, function () {
                $('.bg').fadeOut(200);
            });
        });
        $('.xuanfu').animate({
            'margin-top': '-150px'
        }, 450)
    });


    //图片动
    $('.xuanfu li').mouseenter(function () {
        //alert("ss");
        $(this).find('img').stop(true, true).animate({
            'margin-top': '-6px'
        }, 150).delay(50).animate({
            'margin-top': '0px'
        }, 150)
    });

    $(".xuanfu input:text,.xuanfu textarea").focus(function () {
        $(this).css({ 'background': '#dc002e', 'color': '#fff', 'transition': 'background 0.3s', '-moz-transition': 'background 0.3s', '-webkit-transition': 'background 0.3s', '-o-transition': 'background 0.3s' });
        if ($(this).val() == this.defaultValue) {

            $(this).val("");

        }

    }).blur(function () {
        if ($(this).val() == "") {

            $(this).val(this.defaultValue);

        }

    });

    $('.sr').blur(function () {
        $(this).css({ 'background': '#fff', 'color': '#444' });
    })
    $('.ly-txt,.ly-cont textarea').blur(function () {
        $(this).css({ 'background': '#dadada', 'color': '#666' });
    })

})