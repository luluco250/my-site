(function($) {
	const $window = $(window);

	function fade_page_loader() {
		$("#page-loader").addClass("hidden");
	}

	function adjustments() {

	}

	$window.resize(adjustments);

	$(function() {
		adjustments();
		fade_page_loader();
	});
})(jQuery);