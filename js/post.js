$(function () {
    $(".biaodan_box .tj_btn").click(function () {
        var $phone = $(".number");
        var testtel = /^0?(13[0-9]|15[012356789]|18[0236789]|14[57])[0-9]{8}$/;
        if ($phone.val() == "" || $phone.val() == "您的手机") {
            alert("手机号码不能为空!")
            $phone.focus();
            return false;
        }
     //   if (!testtel.test($phone.val())) {
     //       alert("请输入正确的手机号码");
     //       $phone.val("");
     //       $phone.focus();
   //         return false;
    //    }

        var $name = $(".name");
        if ($name.val() == "" || $name.val() == "姓名") {
            alert("姓名不能为空!")
            $name.focus();
            return false;
        }
        var time = $(".time").val();
        var page = "内资注册";
        if (window.location.href.indexOf("waizi") != -1) {
            page = "外资注册";
        } else if (window.location.href.indexOf("caiwu") != -1) {
            page = "财务代理";
        }

        $.ajax({
            type: "POST",
            url: "ashx/Handler.ashx",
            data: {
                typename: "online",
                page: page,
                name: $name.val(),
                phone: $phone.val(),
                time: time
            },
            success: function (returndata) {
                if (returndata != "") {
                    alert("提交成功!");
                }
            },
            error: function () {
                alert("系统繁忙，请刷新后再试！");
            }
        });
    });
});

$(function () {
    $(".tj").click(function () {

        var $name = $(".ly-txt:eq(0)");
        if ($name.val() == "") {
            alert("姓名不能为空!")
            $name.focus();
            return false;
        }
        var $phone = $(".ly-txt:eq(1)");
        var testtel = /^0?(13[0-9]|15[012356789]|18[0236789]|14[57])[0-9]{8}$/;
        if ($phone.val() == "") {
            alert("手机号码不能为空!")
            $phone.focus();
            return false;
        }
      //  if (!testtel.test($phone.val())) {
       //     alert("请输入正确的手机号码");
       //     $phone.val("");
       //     $phone.focus();
      //      return false;
   //     }
        var time = $(".ly-txt:eq(2)").val();
        var mark = $("textarea").val();
        var page = "内资注册";
        if (window.location.href.indexOf("waizi") != -1) {
            page = "外资注册";
        } else if (window.location.href.indexOf("caiwu") != -1) {
            page = "财务代理";
        }
        $.ajax({
            type: "POST",
            url: "ashx/Handler.ashx",
            data: {
                typename: "message",
                page: page,
                name: $name.val(),
                phone: $phone.val(),
                time: time,
                mark:mark
            },
            success: function (returndata) {
                if (returndata != "") {
                    alert("提交成功!");
                }
            },
            error: function () {
                alert("系统繁忙，请刷新后再试！");
            }
        });
    });
});