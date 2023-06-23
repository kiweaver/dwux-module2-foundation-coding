var priceCalculator = document.getElementById('quote-calc');
priceCalculator.onchange = calculatesubtotal;
priceCalculator.onchange();
// Functions
function calculatesubtotal() {
	var hostel = Number(document.getElementById('hostel').value) || 0;
	var extras = 0;
	var breakfast = 0;
	var lunch = 0;
	var dinner = 0;
	var internet = 0;
	var laundry = 0;
	if ($("#breakfast-col").hasClass("on")) { breakfast = 100; }
	if ($("#lunch-col").hasClass("on")) { lunch = 100; }
	if ($("#dinner-col").hasClass("on")) { dinner = 100; }
	if ($("#internet-col").hasClass("on")) { internet = 20; }
	if ($("#laundry-col").hasClass("on")) { laundry = 40; }
	extras = breakfast + lunch + dinner + internet + laundry;

	var subtotal = hostel + extras;
	document.getElementById("total").innerHTML = "$" + subtotal.toFixed(2);
}

//Breakfast
$('#breakfast-col').on('click', function () {
	var $$ = $(this)
	if (!$$.is('.on')) {
		$$.addClass('on');
		// Run function to remove all other 'ons' from other oftens
		document.getElementById("breakfast").src = "breakfast.jpg";
	} else {
		$$.removeClass('on');
		document.getElementById("breakfast").src = "breakfast.jpg";
	}
	calculatesubtotal();
})

//Lunch
$('#lunch-col').on('click', function () {
	var $$ = $(this)
	if (!$$.is('.on')) {
		$$.addClass('on');
		// Run function to remove all other 'ons' from other oftens
		document.getElementById("lunch").src = "lunch.jpg";
	} else {
		$$.removeClass('on');
		document.getElementById("lunch").src = "lunch.jpg";
	}
	calculatesubtotal();
})

//Dinner
$('#dinner-col').on('click', function () {
	var $$ = $(this)
	if (!$$.is('.on')) {
		$$.addClass('on');
		// Run function to remove all other 'ons' from other oftens
		document.getElementById("dinner").src = "dinner.jpg";
	} else {
		$$.removeClass('on');
		document.getElementById("dinner").src = "dinner.jpg";
	}
	calculatesubtotal();
})

//Internet
$('#internet-col').on('click', function () {
	var $$ = $(this)
	if (!$$.is('.on')) {
		$$.addClass('on');
		// Run function to remove all other 'ons' from other oftens
		document.getElementById("internet").src = "internet.jpg";
	} else {
		$$.removeClass('on');
		document.getElementById("internet").src = "internet.jpg";
	}
	calculatesubtotal();
})

//Laundry
$('#laundry-col').on('click', function () {
	var $$ = $(this)
	if (!$$.is('.on')) {
		$$.addClass('on');
		// Run function to remove all other 'ons' from other oftens
		document.getElementById("laundry").src = "laundry.jpg";
	} else {
		$$.removeClass('on');
		document.getElementById("laundry").src = "laundry.jpg";
	}
	calculatesubtotal();
});


