$('#even-btn').on('click',function(){
	snifflingCheck(0);
});
$('#odd-btn').on('click',function(){
	snifflingCheck(1);
});
function snifflingCheck(i){
	$('.card').removeClass('selected');
	$('.card').each(function(){
		if (Number($(this).text()) % 2 === i) {
			$(this).addClass('selected');
		}
	});
}