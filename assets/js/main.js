(function ($) {

	"use strict";

	$(window).on("load", function () {
		$('.fade-in').css({ position: "relative", opacity: 0, top: -14 });

		setTimeout(function () {
			$(".page-loader").fadeOut(400, function () {
				setTimeout(function () {
					$(".fade-in").each(function (index) {
						$(this).delay(400 * index).animate({ top: 0, opacity: 1 }, 800);
					});
				}, 800);
			});
		}, 400);
	});

	$(document).ready(function () {

		//Create a countdown instance. Change the launchDay according to your needs.
		//The month ranges from 0 to 11. I specify the month from 1 to 12 and manually subtract the 1.
		//Thus the launchDay below denotes 25 December, 2018.
		var launchDay = new Date(2022, 12 - 1, 25);

		$("#timer").countdown({
			until: launchDay
		});

		/***************************
			- Image background -
		***************************/
		if ($("#bg-image").length > 0) {
			$.backstretch("images/bg.jpg");
		}

	});

})(jQuery);