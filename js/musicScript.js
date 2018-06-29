function scrollHandler(){
	var object = $(window).scrollTop() + $(window).height();	// $(window).scrollTop() 는 현재 스크롤의 높이
																// $(window).height() 는 현재 보여지는 윈도우 창의 높이
	$(".playlist").each(function(){ // ul playlist를 모두 불러와서 반복문을 돌린다.
		var target=$(this);	// playlist의 객체를 가져와서 객체를 검사한다.
		if(target.position().top + target.outerHeight() / 2 < object){ //현재 보여지는 창의 크기보다 playlist중 position + 보여지는 애들이 작은 애들만 animate로 보여지는 효과
			target.animate({opacity:"1"},1500);
		}
	})
	,console.log($(document).height())
	,console.log(object)
	,object == $(document).height() ? $(".to-top-btn").fadeIn() : $(".to-top-btn").fadeOut()	// object객체의 height 값이 같아? 
																								//같으면 to-top-btn을 fadeIn 아니면 fadeOut
}
$(document).on("scroll",scrollHandler) // 스크롤 할때마다 스크롤 핸들러를 불러온다
,scrollHandler()
,$(".to-top-btn").on("click",function(){
	$("html, body").animate({ scrollTop:0 },1000) // 바디 자체를 scrollTop의 최상단으로 이동
});