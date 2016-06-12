var Cookie = function () {
    this.warningBox = $('.cookie-warning');
    this.btn = $('.btn-cookie');
};

Cookie.prototype = function () {

        setCookie = function (cname, cvalue, exdays) {
            var domain = window.location.hostname;

            var d = new Date();
            d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
            var expires = "expires=" + d.toUTCString();
            document.cookie = cname + "=" + cvalue + "; " + expires + '; '+ domain + ';path=/';
        },

        getCookie = function (cname) {
            var name = cname + "=";
            var ca = document.cookie.split(';');
            for (var i = 0; i < ca.length; i++) {
                var c = ca[i];
                while (c.charAt(0) == ' ') c = c.substring(1);
                if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
            }
            return "";
        },

        checkCookie = function () {
            var cookieName = getCookie("cookie-warning");
            if (cookieName != "") {
                this.warningBox.removeClass('show');
            } else {
                this.displayCookieWarning();
            }
        },

        displayCookieWarning = function () {

            this.warningBox.addClass('show');
            var self = this;
            this.btn.click(function () {
                self.setCookie("cookie-warning", 1, 365);
                self.warningBox.removeClass('show');
            });
        },
        init = function () {
            this.checkCookie();
        };

        return {
            init: init,
            checkCookie: checkCookie,
            getCookie: getCookie,
            displayCookieWarning: displayCookieWarning,
            setCookie: setCookie
        };
}();

cookie = new Cookie();
cookie.init();
