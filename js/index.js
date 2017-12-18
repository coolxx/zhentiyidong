$(function(){
	if($(window).width()<720){
			(function (win,doc){
				function change(){
					doc.documentElement.style.fontSize=20*doc.documentElement.clientWidth/360+'px';
				}
				change();
				win.addEventListener('resize',change,false);
			})(window,document);
		}
	$(window).resize(function(){
		if($(window).width()<720){
			(function (win,doc){
				function change(){
					doc.documentElement.style.fontSize=20*doc.documentElement.clientWidth/360+'px';
				}
				change();
				win.addEventListener('resize',change,false);
			})(window,document);
		}
	})
    $('#box1 a').click(function(){
        $('#box1 a').css('color','#fff').eq($(this).index()).css('color','#ffe400')
    })
    $('.m4-btn p').click(function () {
        $('.m4-btn p').removeClass('on3').eq($(this).index()).addClass('on3');
        $('.m4-show').hide().eq($(this).index()).show()
    })
    $('.btn2-box1 p').toggle(function () {
        $('.btn2-box1 ul').addClass('nam1')
    },function () {
        $('.btn2-box1 ul').removeClass('nam1')
    })
    $('.btn2-box2 p').toggle(function () {
        $('.btn2-box2 ul').addClass('nam2')
    },function () {
        $('.btn2-box2 ul').removeClass('nam2')
    })
    $('.btn2-box1 li').each(function (index) {
        $(this).click(function () {
            $('.btn2-box1 li').removeClass('on4').eq(index).addClass('on4');
            $('.btn-show1').hide().eq(index).show()
        })
    })
    $('.btn2-box2 li').each(function (index) {
        $(this).click(function () {
            $('.btn2-box2 li').removeClass('on4').eq(index).addClass('on4');
            $('.btn-show2').hide().eq(index).show()
        })
    })
})