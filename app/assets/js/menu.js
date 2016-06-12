var Navigation = function () {
    this.nav = $('.navigation');
    this.overlay = $('.overlay');
    this.btn = $('.navbar-toggle');
};

Navigation.prototype = function () {
    var options = {
            animationIn: 'fadeInDown',
            animationOut: 'fadeInRight'
        },

        showNav = function () {
            var self = this;

            this.nav.addClass('active');
            this.nav.removeClass('fadeInUp').addClass('fadeInDown');

            this.overlay.addClass('show');
            this.btn.addClass('open');
            //$(this.nav).one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend",
            //    function(event) {
            //        $(self.nav).removeClass('fadeInDown');
            //    });

        },

        hideNav = function () {
            var self = this;
            this.nav.removeClass('active');
            this.overlay.removeClass('show');
            this.btn.removeClass('open');
            //$(this.nav).removeClass(this.options.animationIn).addClass(this.options.animationOut);
            this.nav.removeClass('fadeInDown').addClass('fadeInUp');
        },

        init = function () {

            var self = this;
            this.btn.click(function () {
                if (self.overlay.is(':visible')) {
                    self.hideNav();
                } else {
                    self.showNav();
                }
                return false;
            });

            //hide nav on overlay click
            this.overlay.click(function () {
                self.hideNav();
            });
            //Fix safari7 bug
            //$(window).on("orientationchange", function() {
            //    if ($('html').hasClass('safari7')) {
            //        self.hideSidebar();
            //    }
            //});

        };

    return {
        options: options,
        init: init,
        showNav: showNav,
        hideNav: hideNav
    };
}();

nav = new Navigation();
nav.init();


