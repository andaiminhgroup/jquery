! function(t, e) {
    "function" == typeof define && define.amd ? define(e) : "object" == typeof exports ? module.exports = e(require, exports, module) : t.scrollReveal = e()
}(this, function() {
    return window.scrollReveal = function(t) {
        "use strict";

        function e(e) {
            this.docElem = t.document.documentElement, this.options = this.extend(this.defaults, e), this.styleBank = [], 1 == this.options.init && this.init()
        }
        return e.prototype = {
            defaults: {
                after: "0s",
                enter: "bottom",
                move: "24px",
                over: "0.66s",
                easing: "ease-in-out",
                viewportFactor: .33,
                reset: !1,
                init: !0
            },
            init: function() {
                this.scrolled = !1;
                var e = this;
                this.elems = Array.prototype.slice.call(this.docElem.querySelectorAll("[data-scroll-reveal]")), this.elems.forEach(function(t) {
                    e.styleBank[t] || (e.styleBank[t] = t.getAttribute("style")), e.update(t)
                });
                var i = function() {
                        e.scrolled || (e.scrolled = !0, setTimeout(function() {
                            e._scrollPage()
                        }, 60))
                    },
                    o = function() {
                        function t() {
                            e._scrollPage(), e.resizeTimeout = null
                        }
                        e.resizeTimeout && clearTimeout(e.resizeTimeout), e.resizeTimeout = setTimeout(t, 200)
                    };
                t.addEventListener("scroll", i, !1), t.addEventListener("resize", o, !1)
            },
            _scrollPage: function() {
                var t = this;
                this.elems.forEach(function(e) {
                    t.update(e)
                }), this.scrolled = !1
            },
            parseLanguage: function(t) {
                function e(t) {
                    var e = [],
                        i = ["from", "the", "and", "then", "but", "with"];
                    return t.forEach(function(t) {
                        i.indexOf(t) > -1 || e.push(t)
                    }), e
                }
                var i = t.getAttribute("data-scroll-reveal").split(/[, ]+/),
                    o = {};
                return i = e(i), i.forEach(function(t, e) {
                    switch (t) {
                        case "enter":
                            return void(o.enter = i[e + 1]);
                        case "after":
                            return void(o.after = i[e + 1]);
                        case "wait":
                            return void(o.after = i[e + 1]);
                        case "move":
                            return void(o.move = i[e + 1]);
                        case "ease":
                            return o.move = i[e + 1], void(o.ease = "ease");
                        case "ease-in":
                            return o.move = i[e + 1], void(o.easing = "ease-in");
                        case "ease-in-out":
                            return o.move = i[e + 1], void(o.easing = "ease-in-out");
                        case "ease-out":
                            return o.move = i[e + 1], void(o.easing = "ease-out");
                        case "over":
                            return void(o.over = i[e + 1]);
                        default:
                            return
                    }
                }), o
            },
            update: function(t) {
                var e = this.genCSS(t),
                    i = this.styleBank[t];
                return null != i ? i += ";" : i = "", t.getAttribute("data-scroll-reveal-initialized") || (t.setAttribute("style", i + e.initial), t.setAttribute("data-scroll-reveal-initialized", !0)), this.isElementInViewport(t, this.options.viewportFactor) ? t.getAttribute("data-scroll-reveal-complete") ? void 0 : this.isElementInViewport(t, this.options.viewportFactor) ? (t.setAttribute("style", i + e.target + e.transition), void(this.options.reset || setTimeout(function() {
                    "" != i ? t.setAttribute("style", i) : t.removeAttribute("style"), t.setAttribute("data-scroll-reveal-complete", !0)
                }, e.totalDuration))) : void 0 : void(this.options.reset && t.setAttribute("style", i + e.initial + e.reset))
            },
            genCSS: function(t) {
                var e, i, o = this.parseLanguage(t);
                o.enter ? (("top" == o.enter || "bottom" == o.enter) && (e = o.enter, i = "y"), ("left" == o.enter || "right" == o.enter) && (e = o.enter, i = "x")) : (("top" == this.options.enter || "bottom" == this.options.enter) && (e = this.options.enter, i = "y"), ("left" == this.options.enter || "right" == this.options.enter) && (e = this.options.enter, i = "x")), ("top" == e || "left" == e) && (o.move = o.move ? "-" + o.move : "-" + this.options.move);
                var r = o.move || this.options.move,
                    n = o.over || this.options.over,
                    s = o.after || this.options.after,
                    a = o.easing || this.options.easing,
                    l = "-webkit-transition: all " + n + " " + a + " " + s + ";transition: all " + n + " " + a + " " + s + ";-webkit-perspective: 1000;-webkit-backface-visibility: hidden;",
                    u = "-webkit-transition: all " + n + " " + a + " 0s;transition: all " + n + " " + a + " 0s;-webkit-perspective: 1000;-webkit-backface-visibility: hidden;",
                    c = "-webkit-transform: translate" + i + "(" + r + ");transform: translate" + i + "(" + r + ");opacity: 0;",
                    f = "-webkit-transform: translate" + i + "(0);transform: translate" + i + "(0);opacity: 1;";
                return {
                    transition: l,
                    initial: c,
                    target: f,
                    reset: u,
                    totalDuration: 1e3 * (parseFloat(n) + parseFloat(s))
                }
            },
            getViewportH: function() {
                var e = this.docElem.clientHeight,
                    i = t.innerHeight;
                return i > e ? i : e
            },
            getOffset: function(t) {
                var e = 0,
                    i = 0;
                do isNaN(t.offsetTop) || (e += t.offsetTop), isNaN(t.offsetLeft) || (i += t.offsetLeft); while (t = t.offsetParent);
                return {
                    top: e,
                    left: i
                }
            },
            isElementInViewport: function(e, i) {
                var o = t.pageYOffset,
                    r = o + this.getViewportH(),
                    n = e.offsetHeight,
                    s = this.getOffset(e).top,
                    a = s + n,
                    i = i || 0;
                return r >= s + n * i && a >= o
            },
            extend: function(t, e) {
                for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
                return t
            }
        }, e
    }(window), scrollReveal
});
$(document).ready(function($) {
    "use strict";
    if (document.documentElement.clientWidth > 768 && !(AnaglyphGlobal.is_mobile && AnaglyphGlobal.disable_animation_mobile)) {
        window.scrollReveal = new scrollReveal()
    }
});
