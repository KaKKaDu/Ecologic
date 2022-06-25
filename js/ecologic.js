
let menubut = $("#menubut");
let clicked = false

let fokus = function() {
	menubut.toggleClass("butact")
}

addEventListener('click', function(k) {
	if (k.target.id != 'menubut' && k.target.id !='butspan' && k.target.id !='buticon') {
		$('#navig').removeClass("show");
		menubut.removeClass("butact");
	}
})