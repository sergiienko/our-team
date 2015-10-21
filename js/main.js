;(function($) {

	$(function() {
		var $slider = $(".ba-team-slider"),
			$prev = $(".slick-prev", $slider),
			$next = $(".slick-next", $slider);

		$slider.slick({
			dots: true,
			prevArrow: $prev,
			nextArrow: $next,
			slide: ".ba-crewman__slide"
		});

	});

})(jQuery);
