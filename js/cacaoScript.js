$("#send").on("click", sendMessage);
function sendMessage(){
	if ($('textarea').val() !== '') {
		$('.chatbox div:last-child').after('<div class="my-bubble bubble">'+$('textarea').val()+'</div>');	
	}
}