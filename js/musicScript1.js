function scrollHandler(){
	var object = $(window).scrollTop() + $(window).height(); // 보여지는 기본높이 + 현재 스크롤된 길이
	$(".playlist").each(function(){ // ul playlist를 모두 불러와서 반복문을 돌린다.
		var target=$(this);	// playlist의 객체를 가져와서 객체를 검사한다. ( 객체의 height를 검사하기 위함. )
		if(target.position().top + target.outerHeight() / 2 < object){ //target.position().top는 부모좌표로부터 현재 //target.outerHeight()는 target의 절대 크기
			target.animate({opacity:"1"},1500); //현재 보여지는 창 + 스크롤된 창의 크기보다 작은 애들만 animate로 보여지는 효과
		}
	})
	object == $(document).height() ? $(".to-top-btn").fadeIn() : $(".to-top-btn").fadeOut() //dom의 총 높이만큼 object의 값이 왔다면 fadeIn 아니면 fadeout
}

$(window).on("scroll", function(){ // 비동기 동작 scroll 될때마다 event를 받아온다.
	scrollHandler();
});

$(".to-top-btn").on("click",function(){	//해당 로직은 scrollHandler와 같은 depth이여야만 한다. fadeIn으로 버튼이 생성이 되어야 클릭할 수 있기때문
	$("html, body").animate({ scrollTop:0 },1000) // 바디 자체를 scrollTop의 최상단으로 이동
});