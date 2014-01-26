/* Exercise 2: Color picker */
$(document).ready(function() {
	$(document).on('keydown keyup keypress', '#color', function() {
		$color = $('#color').val();
		setPreviewColor($color);
		//$('#color').val("");
		//$("#add-to-favorite").on('click', function() {
			//addBox($color);
		//});
	});
		$("#add-to-favorite").on('click', function() {
			addBox($color);
		});

});

function setPreviewColor(color) {
	$(".preview").css('background-color', color);
	$(".color-code").css('background-color', color);
}

function addBox(color) {
	console.log(color);
	$("#colors").prepend("<div class='item' style='background-color: " + color + ";'></div>");
}
