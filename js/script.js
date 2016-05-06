$('#paragraph').hide();

$('#paragraph-btn').on('click', function(e) {
	e.preventDefault();
	$('#input-fields').addClass('animated fadeOut');
	setTimeout(removeInputFields, 1000);
});

$('#paragraph').on('c')

function removeInputFields() {
	$('#input-fields').detach();
	$('#paragraph').show()addClass('animate fadeIn');
}
