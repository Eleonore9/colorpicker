/* Exercise 2: Color picker */
$(document).ready(function() {
	$color = $('#color')//global variable assigned to the color input field
	$(document).on('keydown keyup keypress', '#color', function() {
		//every event in the #color div triggers the preview of color passed in
		setPreviewColor($color.val());
	});
	$("#add-to-favorite").on('click', function() {
		//click on add-to-favorite leads to a box of this color on the side
		addBox($color.val());
		$color.val("");
	});

});

function setPreviewColor(color) {
	//Takes a color param and make it the background color of the preview divi
	console.log("calling setPreviewColor function!");
	$(".preview").css('background-color', color);
	$(".color-code").text() = $(".preview").css('background-color', color);
	console.log($(".color-code").text());
	console.log($(".color-code").attr());
}

function addBox(color) {
	//Takes a color as argument and make it the background of a square div #item
	$("#colors").prepend("<div class='item' style='background-color: " + color + ";'></div>");
}
