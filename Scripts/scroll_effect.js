(function ($jq) {
	$jq(document).ready(function () {
		// Closes the sidebar menu
		$jq('.menu-toggle').click(function (e) {
			e.preventDefault();
			$jq('#sidebar-wrapper').toggleClass('active');
			$jq('.menu-toggle > .fa-bars, .menu-toggle > .fa-times').toggleClass('fa-bars fa-times');
			$jq(this).toggleClass('active');
		});
		// Smoothscroll script
		$jq('.smooth-scroll').click(function (e) {
			e.preventDefault();
			var dis = $jq(this),
				target = dis.attr('href');
			if (target[0] === '#') {
				var offset = parseInt($jq(target).offset().top),
					header = $jq('.sidebar-nav');
				dis.addClass('active').parent().siblings().find('.smooth-scroll').removeClass('active');
				$jq('html,body').stop().animate({
					scrollTop: offset
				}, 200);
				$jq('.menu-toggle').trigger('click');
			} else
				window.location.replace(target);
		});
		// Closes responsive menu when a scroll trigger link is clicked
		$jq('#sidebar-wrapper .js-scroll-trigger').click(function () {
			$jq('#sidebar-wrapper').removeClass('active');
			$jq('.menu-toggle').removeClass('active');
			$jq('.menu-toggle > .fa-bars, .menu-toggle > .fa-times').toggleClass('fa-bars fa-times');
		});
		//  TESTIMONIALS CAROUSEL HOOK

	});
})(jQuery);