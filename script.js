/* Exercise 2: Color picker */
$(document).ready(function() {
	$(document).on('keydown keyup keypress', '#color', function() {
		$color = $('#color').val();
		setPreviewColor($color);
	});	
});

function setPreviewColor(color) {
	$(".preview").css('background-color', color);
	$(".color-code").css('background-color', color);
}
