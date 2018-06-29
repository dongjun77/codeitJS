$("#btn1").on('click', function(){
	$('.blue').addClass('down');
	setTimeout(someFunction1, 1000);
});
$("#btn2").on('click', function(){
	$('.blue').removeClass('down');
	$(".white").addClass('down');
	setTimeout(someFunction2, 1000);
});
$("#btn3").on('click', function(){
	$(".blue.dot").addClass('down');
	setTimeout(someFunction3, 1000);
});
function someFunction1(){
	$('.blue').removeClass('down');
}
function someFunction2(){
	$('.white').removeClass('down');
}
function someFunction3(){
	$('.blue.dot').removeClass('down');
}