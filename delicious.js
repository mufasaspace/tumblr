$(document).ready(function () {
        var t = $("#top"),
            e = window.location.pathname.split("/");
        "tagged" !== e[1] && "page" !== e[1] && "search" !== e[1] && "day" !== e[1] || $(t).removeClass("is-home").addClass("is-nothome"), $(".is-nothome .hp-only").remove()
    }), $(document).ready(function () {
        var t = $(".js-menu-toggle");
        $(t).click(function () {
            $("#menu").toggle(), $(".menu-toggle-open").toggle()
        })
    }), $(document).ready(function () {
        $("article.wrapper-post").hover(function (t) {
            $(this).toggleClass("active", "mouseenter" === t.type), $(".share_button").click(function () {
                $(this).next().toggleClass("active")
            })
        }), $("article.wrapper-post").on("mouseleave", function () {
            $(".pop-menu").removeClass("active")
        })
    }), $(document).ready(function () {
        var t = $(".back-top");
        $(t).hide(), $(function () {
            $(window).scroll(function () {
                $(this).scrollTop() > 100 ? $(t).fadeIn() : $(t).fadeOut()
            }), $(t).click(function () {
                return $("body,html").animate({
                    scrollTop: 0
                }, 800), !1
            })
        })
    }), $(document).ready(function () {
        $(".totalpages-count em").text("/")
    }),
    function ($) {
        "use strict";

        function t(t) {
            var e = t.attr("data-target");
            e || (e = t.attr("href"), e = e && /#[A-Za-z]/.test(e) && e.replace(/.*(?=#[^\s]*$)/, ""));
            var i = e && $(e);
            return i && i.length ? i : t.parent()
        }

        function e(e) {
            e && 3 === e.which || ($(n).remove(), $(o).each(function () {
                var i = $(this),
                    n = t(i),
                    o = {
                        relatedTarget: this
                    };
                n.hasClass("open") && (e && "click" == e.type && /input|textarea/i.test(e.target.tagName) && $.contains(n[0], e.target) || (n.trigger(e = $.Event("hide.bs.dropdown", o)), e.isDefaultPrevented() || (i.attr("aria-expanded", "false"), n.removeClass("open").trigger($.Event("hidden.bs.dropdown", o)))))
            }))
        }

        function i(t) {
            return this.each(function () {
                var e = $(this),
                    i = e.data("bs.dropdown");
                i || e.data("bs.dropdown", i = new s(this)), "string" == typeof t && i[t].call(e)
            })
        }
        var n = ".dropdown-backdrop",
            o = '[data-toggle="dropdown"]',
            s = function (t) {
                $(t).on("click.bs.dropdown", this.toggle)
            };
        s.VERSION = "3.3.7", s.prototype.toggle = function (i) {
            var n = $(this);
            if (!n.is(".disabled, :disabled")) {
                var o = t(n),
                    s = o.hasClass("open");
                if (e(), !s) {
                    "ontouchstart" in document.documentElement && !o.closest(".navbar-nav").length && $(document.createElement("div")).addClass("dropdown-backdrop").insertAfter($(this)).on("click", e);
                    var r = {
                        relatedTarget: this
                    };
                    if (o.trigger(i = $.Event("show.bs.dropdown", r)), i.isDefaultPrevented()) return;
                    n.trigger("focus").attr("aria-expanded", "true"), o.toggleClass("open").trigger($.Event("shown.bs.dropdown", r))
                }
                return !1
            }
        }, s.prototype.keydown = function (e) {
            if (/(38|40|27|32)/.test(e.which) && !/input|textarea/i.test(e.target.tagName)) {
                var i = $(this);
                if (e.preventDefault(), e.stopPropagation(), !i.is(".disabled, :disabled")) {
                    var n = t(i),
                        s = n.hasClass("open");
                    if (!s && 27 != e.which || s && 27 == e.which) return 27 == e.which && n.find(o).trigger("focus"), i.trigger("click");
                    var r = " li:not(.disabled):visible a",
                        a = n.find(".dropdown-menu li:not(.disabled):visible a");
                    if (a.length) {
                        var c = a.index(e.target);
                        38 == e.which && c > 0 && c--, 40 == e.which && c < a.length - 1 && c++, ~c || (c = 0), a.eq(c).trigger("focus")
                    }
                }
            }
        };
        var r = $.fn.dropdown;
        $.fn.dropdown = i, $.fn.dropdown.Constructor = s, $.fn.dropdown.noConflict = function () {
            return $.fn.dropdown = r, this
        }, $(document).on("click.bs.dropdown.data-api", e).on("click.bs.dropdown.data-api", ".dropdown form", function (t) {
            t.stopPropagation()
        }).on("click.bs.dropdown.data-api", o, s.prototype.toggle).on("keydown.bs.dropdown.data-api", o, s.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", s.prototype.keydown)
    }(jQuery),
    /**
     * @preserve http://responsiveslides.com v1.55 by @viljamis */
    function (t, e, i) {
        t.fn.responsiveSlides = function (n) {
            var o = t.extend({
                auto: !0,
                speed: 500,
                timeout: 4e3,
                pager: !1,
                nav: !1,
                random: !1,
                pause: !1,
                pauseControls: !0,
                prevText: "Previous",
                nextText: "Next",
                maxwidth: "",
                navContainer: "",
                manualControls: "",
                namespace: "rslides",
                before: t.noop,
                after: t.noop
            }, n);
            return this.each(function () {
                i++;
                var s = t(this),
                    r, a, c, h, l, d, u = 0,
                    p = s.children(),
                    f = p.length,
                    g = parseFloat(o.speed),
                    m = parseFloat(o.timeout),
                    v = parseFloat(o.maxwidth),
                    w = o.namespace,
                    b = w + i,
                    y = w + "_nav " + b + "_nav",
                    x = w + "_here",
                    _ = b + "_on",
                    k = b + "_s",
                    C = t("<ul class='" + w + "_tabs " + b + "_tabs' />"),
                    I = {
                        float: "left",
                        position: "relative",
                        opacity: 1,
                        zIndex: 2
                    },
                    T = {
                        float: "none",
                        position: "absolute",
                        opacity: 0,
                        zIndex: 1
                    },
                    j = function () {
                        var t = (document.body || document.documentElement).style,
                            e = "transition";
                        if ("string" == typeof t[e]) return !0;
                        r = ["Moz", "Webkit", "Khtml", "O", "ms"];
                        var e = e.charAt(0).toUpperCase() + e.substr(1),
                            i;
                        for (i = 0; i < r.length; i++)
                            if ("string" == typeof t[r[i] + e]) return !0;
                        return !1
                    }(),
                    A = function (e) {
                        o.before(e), j ? (p.removeClass(_).css(T).eq(e).addClass(_).css(I), u = e, setTimeout(function () {
                            o.after(e)
                        }, g)) : p.stop().fadeOut(g, function () {
                            t(this).removeClass(_).css(T).css("opacity", 1)
                        }).eq(e).fadeIn(g, function () {
                            t(this).addClass(_).css(I), o.after(e), u = e
                        })
                    };
                if (o.random && (p.sort(function () {
                        return Math.round(Math.random()) - .5
                    }), s.empty().append(p)), p.each(function (t) {
                        this.id = k + t
                    }), s.addClass(w + " " + b), n && n.maxwidth && s.css("max-width", v), p.hide().css(T).eq(0).addClass(_).css(I).show(), j && p.show().css({
                        "-webkit-transition": "opacity " + g + "ms ease-in-out",
                        "-moz-transition": "opacity " + g + "ms ease-in-out",
                        "-o-transition": "opacity " + g + "ms ease-in-out",
                        transition: "opacity " + g + "ms ease-in-out"
                    }), 1 < p.length) {
                    if (m < g + 100) return;
                    if (o.pager && !o.manualControls) {
                        var z = [];
                        p.each(function (t) {
                            t += 1, z += "<li><a href='#' class='" + k + t + "'>" + t + "</a></li>"
                        }), C.append(z), n.navContainer ? t(o.navContainer).append(C) : s.after(C)
                    }
                    if (o.manualControls && (C = t(o.manualControls), C.addClass(w + "_tabs " + b + "_tabs")), (o.pager || o.manualControls) && C.find("li").each(function (e) {
                            t(this).addClass(k + (e + 1))
                        }), (o.pager || o.manualControls) && (d = C.find("a"), a = function (t) {
                            d.closest("li").removeClass(x).eq(t).addClass(x)
                        }), o.auto && (c = function () {
                            l = setInterval(function () {
                                p.stop(!0, !0);
                                var t = u + 1 < f ? u + 1 : 0;
                                (o.pager || o.manualControls) && a(t), A(t)
                            }, m)
                        })(), h = function () {
                            o.auto && (clearInterval(l), c())
                        }, o.pause && s.hover(function () {
                            clearInterval(l)
                        }, function () {
                            h()
                        }), (o.pager || o.manualControls) && (d.bind("click", function (e) {
                            e.preventDefault(), o.pauseControls || h(), e = d.index(this), u === e || t("." + _).queue("fx").length || (a(e), A(e))
                        }).eq(0).closest("li").addClass(x), o.pauseControls && d.hover(function () {
                            clearInterval(l)
                        }, function () {
                            h()
                        })), o.nav) {
                        w = "<a href='#' class='" + y + " prev'>" + o.prevText + "</a><a href='#' class='" + y + " next'>" + o.nextText + "</a>", n.navContainer ? t(o.navContainer).append(w) : s.after(w);
                        var b = t("." + b + "_nav"),
                            q = b.filter(".prev");
                        b.bind("click", function (e) {
                            if (e.preventDefault(), e = t("." + _), !e.queue("fx").length) {
                                var i = p.index(e);
                                e = i - 1, i = i + 1 < f ? u + 1 : 0, A(t(this)[0] === q[0] ? e : i), (o.pager || o.manualControls) && a(t(this)[0] === q[0] ? e : i), o.pauseControls || h()
                            }
                        }), o.pauseControls && b.hover(function () {
                            clearInterval(l)
                        }, function () {
                            h()
                        })
                    }
                }
                if (void 0 === document.body.style.maxWidth && n.maxwidth) {
                    var E = function () {
                        s.css("width", "100%"), s.width() > v && s.css("width", v)
                    };
                    E(), t(e).bind("resize", function () {
                        E()
                    })
                }
            })
        }
    }(jQuery, this, 0),
    function (t, e) {
        var i, n = "superslides";
        i = function (i, n) {
            this.options = e.extend({
                play: !1,
                animation_speed: 600,
                animation_easing: "swing",
                animation: "slide",
                inherit_width_from: t,
                inherit_height_from: t,
                pagination: !0,
                hashchange: !1,
                scrollable: !0,
                elements: {
                    preserve: ".preserve",
                    nav: ".slides-navigation",
                    container: ".slides-container",
                    pagination: ".slides-pagination"
                }
            }, n);
            var o = this,
                s = e("<div>", {
                    class: "slides-control"
                }),
                r = 1;
            this.$el = e(i), this.$container = this.$el.find(this.options.elements.container);
            var a = function () {
                    return r = o._findMultiplier(), o.$el.on("click", o.options.elements.nav + " a", function (t) {
                        t.preventDefault(), o.stop(), e(this).hasClass("next") ? o.animate("next", function () {
                            o.start()
                        }) : o.animate("prev", function () {
                            o.start()
                        })
                    }), e(document).on("keyup", function (t) {
                        37 === t.keyCode && o.animate("prev"), 39 === t.keyCode && o.animate("next")
                    }), e(t).on("resize", function () {
                        setTimeout(function () {
                            var t = o.$container.children();
                            o.width = o._findWidth(), o.height = o._findHeight(), t.css({
                                width: o.width,
                                left: o.width
                            }), o.css.containers(), o.css.images()
                        }, 10)
                    }), o.options.hashchange && e(t).on("hashchange", function () {
                        var t, e = o._parseHash();
                        (t = o._upcomingSlide(e)) >= 0 && t !== o.current && o.animate(t)
                    }), o.pagination._events(), o.start(), o
                },
                c = {
                    containers: function () {
                        o.init ? (o.$el.css({
                            height: o.height
                        }), o.$control.css({
                            width: o.width * r,
                            left: -o.width
                        }), o.$container.css({})) : (e("body").css({
                            margin: 0
                        }), o.$el.css({
                            position: "relative",
                            overflow: "hidden",
                            width: "100%",
                            height: o.height
                        }), o.$control.css({
                            position: "relative",
                            transform: "translate3d(0)",
                            height: "100%",
                            width: o.width * r,
                            left: -o.width
                        }), o.$container.css({
                            display: "none",
                            margin: "0",
                            padding: "0",
                            listStyle: "none",
                            position: "relative",
                            height: "100%"
                        })), 1 === o.size() && o.$el.find(o.options.elements.nav).hide()
                    },
                    images: function () {
                        var t = o.$container.find("img").not(o.options.elements.preserve);
                        t.removeAttr("width").removeAttr("height").css({
                            "-webkit-backface-visibility": "hidden",
                            "-ms-interpolation-mode": "bicubic",
                            position: "absolute",
                            left: "0",
                            top: "0",
                            "z-index": "-1",
                            "max-width": "none"
                        }), t.each(function () {
                            var t = o.image._aspectRatio(this),
                                i = this;
                            if (e.data(this, "processed")) o.image._scale(i, t), o.image._center(i, t);
                            else {
                                var n = new Image;
                                n.onload = function () {
                                    o.image._scale(i, t), o.image._center(i, t), e.data(i, "processed", !0)
                                }, n.src = this.src
                            }
                        })
                    },
                    children: function () {
                        var t = o.$container.children();
                        t.is("img") && (t.each(function () {
                            if (e(this).is("img")) {
                                e(this).wrap("<div>");
                                var t = e(this).attr("id");
                                e(this).removeAttr("id"), e(this).parent().attr("id", t)
                            }
                        }), t = o.$container.children()), o.init || t.css({
                            display: "none",
                            left: 2 * o.width
                        }), t.css({
                            position: "absolute",
                            overflow: "hidden",
                            height: "100%",
                            width: o.width,
                            top: 0,
                            zIndex: 0
                        })
                    }
                },
                h = {
                    slide: function (t, e) {
                        var i = o.$container.children();
                        i.eq(t.upcoming_slide).css({
                            left: t.upcoming_position,
                            display: "block"
                        }), o.$control.animate({
                            left: t.offset
                        }, o.options.animation_speed, o.options.animation_easing, function () {
                            o.size() > 1 && (o.$control.css({
                                left: -o.width
                            }), i.eq(t.upcoming_slide).css({
                                left: o.width,
                                zIndex: 2
                            }), t.outgoing_slide >= 0 && i.eq(t.outgoing_slide).css({
                                left: o.width,
                                display: "none",
                                zIndex: 0
                            })), e()
                        })
                    },
                    fade: function (t, e) {
                        var i = this,
                            n = i.$container.children(),
                            o = n.eq(t.outgoing_slide),
                            s = n.eq(t.upcoming_slide);
                        s.css({
                            left: this.width,
                            opacity: 0,
                            display: "block"
                        }).animate({
                            opacity: 1
                        }, i.options.animation_speed, i.options.animation_easing), t.outgoing_slide >= 0 ? o.animate({
                            opacity: 0
                        }, i.options.animation_speed, i.options.animation_easing, function () {
                            i.size() > 1 && (n.eq(t.upcoming_slide).css({
                                zIndex: 2
                            }), t.outgoing_slide >= 0 && n.eq(t.outgoing_slide).css({
                                opacity: 1,
                                display: "none",
                                zIndex: 0
                            })), e()
                        }) : (s.css({
                            zIndex: 2
                        }), e())
                    }
                };
            h = e.extend(h, e.fn.superslides.fx);
            var l = {
                    _centerY: function (t) {
                        var i = e(t);
                        i.css({
                            top: (o.height - i.height()) / 2
                        })
                    },
                    _centerX: function (t) {
                        var i = e(t);
                        i.css({
                            left: (o.width - i.width()) / 2
                        })
                    },
                    _center: function (t) {
                        o.image._centerX(t), o.image._centerY(t)
                    },
                    _aspectRatio: function (t) {
                        if (!t.naturalHeight && !t.naturalWidth) {
                            var e = new Image;
                            e.src = t.src, t.naturalHeight = e.height, t.naturalWidth = e.width
                        }
                        return t.naturalHeight / t.naturalWidth
                    },
                    _scale: function (t, i) {
                        i = i || o.image._aspectRatio(t);
                        var n = o.height / o.width,
                            s = e(t);
                        n > i ? s.css({
                            height: o.height,
                            width: o.height / i
                        }) : s.css({
                            height: o.width * i,
                            width: o.width
                        })
                    }
                },
                d = {
                    _setCurrent: function (t) {
                        if (o.$pagination) {
                            var e = o.$pagination.children();
                            e.removeClass("current"), e.eq(t).addClass("current")
                        }
                    },
                    _addItem: function (t) {
                        var i = t + 1,
                            n = i,
                            s = o.$container.children().eq(t),
                            r = s.attr("id");
                        r && (n = r), e("<a>", {
                            href: "#" + n,
                            text: n
                        }).appendTo(o.$pagination)
                    },
                    _setup: function () {
                        if (o.options.pagination && 1 !== o.size()) {
                            var t = e("<nav>", {
                                class: o.options.elements.pagination.replace(/^\./, "")
                            });
                            o.$pagination = t.appendTo(o.$el);
                            for (var i = 0; o.size() > i; i++) o.pagination._addItem(i)
                        }
                    },
                    _events: function () {
                        o.$el.on("click", o.options.elements.pagination + " a", function (t) {
                            t.preventDefault();
                            var e, i = o._parseHash(this.hash);
                            (e = o._upcomingSlide(i, !0)) !== o.current && o.animate(e, function () {
                                o.start()
                            })
                        })
                    }
                };
            return this.css = c, this.image = l, this.pagination = d, this.fx = h, this.animation = this.fx[this.options.animation], this.$control = this.$container.wrap(s).parent(".slides-control"), o._findPositions(), o.width = o._findWidth(), o.height = o._findHeight(), this.css.children(), this.css.containers(), this.css.images(), this.pagination._setup(), a()
        }, i.prototype = {
            _findWidth: function () {
                return e(this.options.inherit_width_from).width()
            },
            _findHeight: function () {
                return e(this.options.inherit_height_from).height()
            },
            _findMultiplier: function () {
                return 1 === this.size() ? 1 : 3
            },
            _upcomingSlide: function (t, e) {
                if (e && !isNaN(t) && (t -= 1), /next/.test(t)) return this._nextInDom();
                if (/prev/.test(t)) return this._prevInDom();
                if (/\d/.test(t)) return +t;
                if (t && /\w/.test(t)) {
                    var i = this._findSlideById(t);
                    return i >= 0 ? i : 0
                }
                return 0
            },
            _findSlideById: function (t) {
                return this.$container.find("#" + t).index()
            },
            _findPositions: function (t, e) {
                e = e || this, void 0 === t && (t = -1), e.current = t, e.next = e._nextInDom(), e.prev = e._prevInDom()
            },
            _nextInDom: function () {
                var t = this.current + 1;
                return t === this.size() && (t = 0), t
            },
            _prevInDom: function () {
                var t = this.current - 1;
                return 0 > t && (t = this.size() - 1), t
            },
            _parseHash: function (e) {
                return e = e || t.location.hash, e = e.replace(/^#/, ""), e && !isNaN(+e) && (e = +e), e
            },
            size: function () {
                return this.$container.children().length
            },
            destroy: function () {
                return this.$el.removeData()
            },
            update: function () {
                this.css.children(), this.css.containers(), this.css.images(), this.pagination._addItem(this.size()), this._findPositions(this.current), this.$el.trigger("updated.slides")
            },
            stop: function () {
                clearInterval(this.play_id), delete this.play_id, this.$el.trigger("stopped.slides")
            },
            start: function () {
                var i = this;
                i.options.hashchange ? e(t).trigger("hashchange") : this.animate(), this.options.play && (this.play_id && this.stop(), this.play_id = setInterval(function () {
                    i.animate()
                }, this.options.play)), this.$el.trigger("started.slides")
            },
            animate: function (e, i) {
                var n = this,
                    o = {};
                if (!(this.animating || (this.animating = !0, void 0 === e && (e = "next"), o.upcoming_slide = this._upcomingSlide(e), o.upcoming_slide >= this.size()))) {
                    if (o.outgoing_slide = this.current, o.upcoming_position = 2 * this.width, o.offset = -o.upcoming_position, ("prev" === e || o.outgoing_slide > e) && (o.upcoming_position = 0, o.offset = 0), n.size() > 1 && n.pagination._setCurrent(o.upcoming_slide), n.options.hashchange) {
                        var s = o.upcoming_slide + 1,
                            r = n.$container.children(":eq(" + o.upcoming_slide + ")").attr("id");
                        t.location.hash = r || s
                    }
                    n.$el.trigger("animating.slides", [o]), n.animation(o, function () {
                        n._findPositions(o.upcoming_slide, n), "function" == typeof i && i(), n.animating = !1, n.$el.trigger("animated.slides"), n.init || (n.$el.trigger("init.slides"), n.init = !0, n.$container.fadeIn("fast"))
                    })
                }
            }
        }, e.fn[n] = function (t, o) {
            var s = [];
            return this.each(function () {
                var r, a, c;
                return r = e(this), a = r.data(n), c = "object" == typeof t && t, a || (s = r.data(n, a = new i(this, c))), "string" == typeof t && "function" == typeof (s = a[t]) ? s = s.call(a, o) : void 0
            }), s
        }, e.fn[n].fx = {}
    }(this, jQuery),
    /**
     * @preserve
     * jQInstaPics
     * Created by: Abid Din - http://craftedpixelz.co.uk
     * Contributions made by: Kacey Coughlin = http://www.kaceycoughlin.com
     * Version: 1.1b
     * Copyright: Crafted Pixelz
     * License: MIT license
     * Updated: 19th August 2013
     * Changed by: Misspato / October 13, 2016
     */
    function ($) {
        $.fn.jqinstapics = function (t) {
            var e = {
                    user_id: null,
                    access_token: null,
                    count: 10,
                    size: "thumbnail",
                    class: "widget-thumb"
                },
                i = $.extend(e, t);
            return this.each(function () {
                var t = $(this),
                    e = "https://api.instagram.com/v1/users/" + i.user_id + "/media/recent?access_token=" + i.access_token + "&count=" + i.count + "&callback=?";
                $.getJSON(e, function (e) {
                    $.each(e.data, function (e, n) {
                        var o = $("<a/>", {
                            href: n.link,
                            target: "_blank",
                            class: i.class
                        }).appendTo(t);
                        if (null == i.size) var s = $("<img/>", {
                            src: n.images.thumbnail.url
                        }).appendTo(o);
                        else if ("low_resolution" == i.size) var s = $("<img/>", {
                            src: n.images.low_resolution.url
                        }).appendTo(o);
                        else if ("standard_resolution" == i.size) var s = $("<img/>", {
                            src: n.images.standard_resolution.url
                        }).appendTo(o);
                        else var s = $("<img/>", {
                            src: n.images.thumbnail.url
                        }).appendTo(o);
                        n.caption && s.attr("alt", n.caption.text)
                    })
                }), null != i.user_id && null != i.access_token || t.append("<p>Please specify a User ID and Access Token, as outlined in the docs.</p>")
            })
        }
    }(jQuery),
    function (t, e, i, n) {
        "use strict";
        t.jribbble = {};
        var o = null,
            s = "https://api.dribbble.com/v1",
            r = ["animated", "attachments", "debuts", "playoffs", "rebounds", "teams"],
            a = {
                token: "Jribbble: Missing Dribbble access token. Set one with $.jribbble.accessToken = YOUR_ACCESS_TOKEN. If you do not have an access token, you must register a new application at https://dribbble.com/account/applications/new",
                singular: function (t) {
                    return t.substr(0, t.length - 1)
                },
                idRequired: function (t) {
                    return "Jribbble: You have to provide a " + this.singular(t) + ' ID. ex: $.jribbble.%@("1234").'.replace(/%@/g, t)
                },
                subResource: function (t) {
                    return "Jribbble: You have to provide a " + this.singular(t) + ' ID to get %@. ex: $.jribbble.%@("1234").%@()'.replace(/%@/g, t)
                },
                shotId: function (t) {
                    return "Jribbble: You have to provide a shot ID to get %@. ex: " + ' $.jribbble.shots("1234").%@()'.replace(/%@/g, t)
                },
                commentLikes: 'Jribbble: You have to provide a comment ID to get likes. ex:  $.jribbble.shots("1234").comments("456").likes()'
            },
            c = function (t, e) {
                if (t && "object" != typeof t) return t;
                throw new Error(a.idRequired(e))
            },
            h = function (t) {
                var e = {};
                return t.forEach(function (t) {
                    e[t] = f.call(this, t)
                }.bind(this)), e
            },
            l = function (e) {
                var i = t.param(e);
                return i ? "?" + i : ""
            },
            d = function (t) {
                if (0 !== t.length) {
                    var e = t[0],
                        i = typeof e,
                        n = {};
                    if ("number" === i || "string" === i) {
                        r.indexOf(e) > -1 ? n.list = e : n.resource = e
                    } else "object" === i && (n = e);
                    return n
                }
            },
            u = function () {
                var e = t.extend({}, t.Deferred()),
                    i = function () {
                        return this.methods = [], this.response = null, this.flushed = !1, this.add = function (t) {
                            this.flushed ? t(this.scope) : this.methods.push(t)
                        }, this.flush = function (t) {
                            if (!this.flushed) {
                                for (this.scope = t, this.flushed = !0; this.methods[0];) this.methods.shift()(t);
                                return t
                            }
                        }, this
                    };
                return e.queue = new i, e.url = "https://api.dribbble.com/v1", e.get = function () {
                    return o ? (t.ajax({
                        type: "GET",
                        url: this.url,
                        beforeSend: function (t) {
                            t.setRequestHeader("Authorization", "Bearer " + o)
                        },
                        success: function (t) {
                            this.resolve(t)
                        }.bind(this),
                        error: function (t) {
                            this.reject(t)
                        }.bind(this)
                    }), this) : (console.error(a.token), !1)
                }, e
            },
            p = function (e) {
                return function (i) {
                    return t.extend(this, u()), this.queue.add(function (t) {
                        t.url += "/" + e + "/" + i
                    }), setTimeout(function () {
                        this.queue.flush(this).get()
                    }.bind(this)), this
                }
            },
            f = function (t) {
                return function (e) {
                    return this.queue.add(function (i) {
                        i.url += "/" + t + "/" + l(e || {})
                    }), this
                }
            };
        t.jribbble.shots = function (e, i) {
            var n = d([].slice.call(arguments)) || {},
                o = i || {},
                s = function (e) {
                    return function (i, n) {
                        var o = d([].slice.call(arguments)) || {},
                            s = n || {};
                        return this.queue.add(function (i) {
                            if (!i.shotId) throw new Error(a.shotId(e));
                            i.url += "/" + e + "/", o.resource && (i.url += o.resource, delete o.resource), i.url += l(t.extend(o, s))
                        }), this
                    }
                },
                r = function () {
                    return t.extend(this, u()), this.url += "/shots/", this.queue.add(function (e) {
                        n.resource && (e.shotId = n.resource, e.url += n.resource, delete n.resource), e.url += l(t.extend(n, o))
                    }), setTimeout(function () {
                        this.queue.flush(this).get()
                    }.bind(this)), this
                };
            return r.prototype.attachments = s("attachments"), r.prototype.buckets = s("buckets"), r.prototype.likes = s("likes"), r.prototype.projects = s("projects"), r.prototype.rebounds = s("rebounds"), r.prototype.comments = function (e, i) {
                var n = d([].slice.call(arguments)) || {},
                    o = i || {};
                return this.queue.add(function (e) {
                    if (!e.shotId) throw new Error(a.shotId("comments"));
                    e.url += "/comments/", n.resource && (e.commentId = n.resource, e.url += n.resource + "/", delete n.resource), e.url += l(t.extend(n, o))
                }), this.likes = function (t) {
                    var e = t || {};
                    return this.queue.add(function (t) {
                        if (!t.commentId) throw new Error(a.commentLikes);
                        t.url += "likes/" + l(e)
                    }), this
                }, this
            }, new r
        }, t.jribbble.teams = function (t) {
            var e = "teams",
                i = c(t, e),
                n = p.call(this, e);
            return n.prototype = h.call(this, ["members", "shots"]), new n(i)
        }, t.jribbble.users = function (t) {
            var e = "users",
                i = c(t, e),
                n = p.call(this, e);
            return n.prototype = h.call(this, ["buckets", "followers", "following", "likes", "projects", "shots", "teams"]), n.prototype.isFollowing = function (t) {
                return this.queue.add(function (e) {
                    e.url += "/following/" + t
                }), this
            }, new n(i)
        }, t.jribbble.buckets = function (t) {
            var e = "buckets",
                i = c(t, e),
                n = p.call(this, e);
            return n.prototype = h.call(this, ["shots"]), new n(i)
        }, t.jribbble.projects = function (t) {
            var e = "projects",
                i = c(t, e),
                n = p.call(this, e);
            return n.prototype = h.call(this, ["shots"]), new n(i)
        }, t.jribbble.setToken = function (t) {
            return o = t, this
        }
    }(jQuery, window, document),
    /**
     * @preserve
     * Plugin: jquery.FlickrFeed
     * Version: 1.0.0
     * Changed: Patricia Carvalho - October 13, 2016
     *
     * Description: jQuery plugin for display of Flickr photo feeds
     **/
    function ($) {
        $.fn.flickrfeed = function (e, i) {
            var n = {
                    limit: 8,
                    imagesize: "medium",
                    class: "widget-thumb"
                },
                o = $.extend(n, i);
            return this.each(function (i, n) {
                var s = "https://api.flickr.com/services/feeds/photos_public.gne?lang=en-us&format=json&jsoncallback=?";
                "" != e && (s += "&id=" + e), $.getJSON(s, function (e) {
                    t(n, e, o)
                })
            })
        };
        var t = function (t, e, i) {
            if (!e) return !1;
            var n = "";
            n += '<div class="thumbs">';
            var o = e.items,
                s = o.length;
            s > i.limit && (s = i.limit);
            for (var r = 0; r < s; r++) {
                var a = o[r],
                    c = '<a href="' + a.link + '" class="' + i.class + '" title="' + a.title + ' (View on Flickr)" target="_black">',
                    h = a.media.m;
                "square" == i.imagesize && (h = h.replace("_m", "_s")), "thumbnail" == i.imagesize && (h = h.replace("_m", "_t")), "medium" == i.imagesize && (h = h.replace("_m", "")), n += c + '<img src="' + h + '" alt="' + a.title + '"></a>'
            }
            n += "</div>", $(t).html(n)
        }
    }(jQuery),
    function (t) {
        "function" == typeof define && define.amd ? define(["jquery"], t) : t("object" == typeof module && "object" == typeof module.exports ? require("jquery") : jQuery)
    }(function (t) {
        function e() {
            var e = s.settings;
            if (e.autoDispose && !t.contains(document.documentElement, this)) return t(this).timeago("dispose"), this;
            var r = i(this);
            return isNaN(r.datetime) || (0 === e.cutoff || Math.abs(o(r.datetime)) < e.cutoff ? t(this).text(n(r.datetime)) : t(this).attr("title").length > 0 && t(this).text(t(this).attr("title"))), this
        }

        function i(e) {
            if (e = t(e), !e.data("timeago")) {
                e.data("timeago", {
                    datetime: s.datetime(e)
                });
                var i = t.trim(e.text());
                s.settings.localeTitle ? e.attr("title", e.data("timeago").datetime.toLocaleString()) : !(i.length > 0) || s.isTime(e) && e.attr("title") || e.attr("title", i)
            }
            return e.data("timeago")
        }

        function n(t) {
            return s.inWords(o(t))
        }

        function o(t) {
            return (new Date).getTime() - t.getTime()
        }
        t.timeago = function (e) {
            return n(e instanceof Date ? e : "string" == typeof e ? t.timeago.parse(e) : "number" == typeof e ? new Date(e) : t.timeago.datetime(e))
        };
        var s = t.timeago;
        t.extend(t.timeago, {
            settings: {
                refreshMillis: 6e4,
                allowPast: !0,
                allowFuture: !1,
                localeTitle: !1,
                cutoff: 0,
                autoDispose: !0,
                strings: {
                    prefixAgo: null,
                    prefixFromNow: null,
                    suffixAgo: "ago",
                    suffixFromNow: "from now",
                    inPast: "any moment now",
                    seconds: "less than a minute",
                    minute: "about a minute",
                    minutes: "%d minutes",
                    hour: "about an hour",
                    hours: "about %d hours",
                    day: "a day",
                    days: "%d days",
                    month: "about a month",
                    months: "%d months",
                    year: "about a year",
                    years: "%d years",
                    wordSeparator: " ",
                    numbers: []
                }
            },
            inWords: function (e) {
                function i(i, o) {
                    var s = t.isFunction(i) ? i(o, e) : i,
                        r = n.numbers && n.numbers[o] || o;
                    return s.replace(/%d/i, r)
                }
                if (!this.settings.allowPast && !this.settings.allowFuture) throw "timeago allowPast and allowFuture settings can not both be set to false.";
                var n = this.settings.strings,
                    o = n.prefixAgo,
                    s = n.suffixAgo;
                if (this.settings.allowFuture && 0 > e && (o = n.prefixFromNow, s = n.suffixFromNow), !this.settings.allowPast && e >= 0) return this.settings.strings.inPast;
                var r = Math.abs(e) / 1e3,
                    a = r / 60,
                    c = a / 60,
                    h = c / 24,
                    l = h / 365,
                    d = 45 > r && i(n.seconds, Math.round(r)) || 90 > r && i(n.minute, 1) || 45 > a && i(n.minutes, Math.round(a)) || 90 > a && i(n.hour, 1) || 24 > c && i(n.hours, Math.round(c)) || 42 > c && i(n.day, 1) || 30 > h && i(n.days, Math.round(h)) || 45 > h && i(n.month, 1) || 365 > h && i(n.months, Math.round(h / 30)) || 1.5 > l && i(n.year, 1) || i(n.years, Math.round(l)),
                    u = n.wordSeparator || "";
                return void 0 === n.wordSeparator && (u = " "), t.trim([o, d, s].join(u))
            },
            parse: function (e) {
                var i = t.trim(e);
                return i = i.replace(/\.\d+/, ""), i = i.replace(/-/, "/").replace(/-/, "/"), i = i.replace(/T/, " ").replace(/Z/, " UTC"), i = i.replace(/([\+\-]\d\d)\:?(\d\d)/, " $1$2"), i = i.replace(/([\+\-]\d\d)$/, " $100"), new Date(i)
            },
            datetime: function (e) {
                var i = s.isTime(e) ? t(e).attr("datetime") : t(e).attr("title");
                return s.parse(i)
            },
            isTime: function (e) {
                return "time" === t(e).get(0).tagName.toLowerCase()
            }
        });
        var r = {
            init: function () {
                r.dispose.call(this);
                var i = t.proxy(e, this);
                i();
                var n = s.settings;
                n.refreshMillis > 0 && (this._timeagoInterval = setInterval(i, n.refreshMillis))
            },
            update: function (i) {
                var n = i instanceof Date ? i : s.parse(i);
                t(this).data("timeago", {
                    datetime: n
                }), s.settings.localeTitle && t(this).attr("title", n.toLocaleString()), e.apply(this)
            },
            updateFromDOM: function () {
                t(this).data("timeago", {
                    datetime: s.parse(s.isTime(this) ? t(this).attr("datetime") : t(this).attr("title"))
                }), e.apply(this)
            },
            dispose: function () {
                this._timeagoInterval && (window.clearInterval(this._timeagoInterval), this._timeagoInterval = null)
            }
        };
        t.fn.timeago = function (t, e) {
            var i = t ? r[t] : r.init;
            if (!i) throw new Error("Unknown function name '" + t + "' for timeago");
            return this.each(function () {
                i.call(this, e)
            }), this
        }, document.createElement("abbr"), document.createElement("time")
    }),
    function (t, e, i) {
        function n(t, e, i) {
            t.addEventListener ? t.addEventListener(e, i, !1) : t.attachEvent("on" + e, i)
        }

        function o(t) {
            if ("keypress" == t.type) {
                var e = String.fromCharCode(t.which);
                return t.shiftKey || (e = e.toLowerCase()), e
            }
            return l[t.which] ? l[t.which] : d[t.which] ? d[t.which] : String.fromCharCode(t.which).toLowerCase()
        }

        function s(t) {
            var e = [];
            return t.shiftKey && e.push("shift"), t.altKey && e.push("alt"), t.ctrlKey && e.push("ctrl"), t.metaKey && e.push("meta"), e
        }

        function r(t) {
            return "shift" == t || "ctrl" == t || "alt" == t || "meta" == t
        }

        function a(t, e) {
            var i, n, o, s = [];
            for (i = t, "+" === i ? i = ["+"] : (i = i.replace(/\+{2}/g, "+plus"), i = i.split("+")), o = 0; o < i.length; ++o) n = i[o], p[n] && (n = p[n]), e && "keypress" != e && u[n] && (n = u[n], s.push("shift")), r(n) && s.push(n);
            if (i = n, !(o = e)) {
                if (!f) {
                    f = {};
                    for (var a in l) 95 < a && 112 > a || l.hasOwnProperty(a) && (f[l[a]] = a)
                }
                o = f[i] ? "keydown" : "keypress"
            }
            return "keypress" == o && s.length && (o = "keydown"), {
                key: n,
                modifiers: s,
                action: o
            }
        }

        function c(t, i) {
            return null !== t && t !== e && (t === i || c(t.parentNode, i))
        }

        function h(t) {
            function i(t) {
                t = t || {};
                var e = !1,
                    i;
                for (i in g) t[i] ? e = !0 : g[i] = 0;
                e || (b = !1)
            }

            function c(t, e, i, n, o, s) {
                var a, c, h = [],
                    l = i.type;
                if (!f._callbacks[t]) return [];
                for ("keyup" == l && r(t) && (e = [t]), a = 0; a < f._callbacks[t].length; ++a)
                    if (c = f._callbacks[t][a], (n || !c.seq || g[c.seq] == c.level) && l == c.action) {
                        var d;
                        (d = "keypress" == l && !i.metaKey && !i.ctrlKey) || (d = c.modifiers, d = e.sort().join(",") === d.sort().join(",")), d && (d = n && c.seq == n && c.level == s, (!n && c.combo == o || d) && f._callbacks[t].splice(a, 1), h.push(c))
                    } return h
            }

            function l(t, e, i, n) {
                f.stopCallback(e, e.target || e.srcElement, i, n) || !1 !== t(e, i) || (e.preventDefault ? e.preventDefault() : e.returnValue = !1, e.stopPropagation ? e.stopPropagation() : e.cancelBubble = !0)
            }

            function d(t) {
                "number" != typeof t.which && (t.which = t.keyCode);
                var e = o(t);
                e && ("keyup" == t.type && v === e ? v = !1 : f.handleKey(e, s(t), t))
            }

            function u(t, e, n, s) {
                function r(e) {
                    return function () {
                        b = e, ++g[t], clearTimeout(m), m = setTimeout(i, 1e3)
                    }
                }

                function c(e) {
                    l(n, e, t), "keyup" !== s && (v = o(e)), setTimeout(i, 10)
                }
                for (var h = g[t] = 0; h < e.length; ++h) {
                    var d = h + 1 === e.length ? c : r(s || a(e[h + 1]).action);
                    p(e[h], d, s, t, h)
                }
            }

            function p(t, e, i, n, o) {
                f._directMap[t + ":" + i] = e, t = t.replace(/\s+/g, " ");
                var s = t.split(" ");
                1 < s.length ? u(t, s, e, i) : (i = a(t, i), f._callbacks[i.key] = f._callbacks[i.key] || [], c(i.key, i.modifiers, {
                    type: i.action
                }, n, t, o), f._callbacks[i.key][n ? "unshift" : "push"]({
                    callback: e,
                    modifiers: i.modifiers,
                    action: i.action,
                    seq: n,
                    level: o,
                    combo: t
                }))
            }
            var f = this;
            if (t = t || e, !(f instanceof h)) return new h(t);
            f.target = t, f._callbacks = {}, f._directMap = {};
            var g = {},
                m, v = !1,
                w = !1,
                b = !1;
            f._handleKey = function (t, e, n) {
                var o = c(t, e, n),
                    s;
                e = {};
                var a = 0,
                    h = !1;
                for (s = 0; s < o.length; ++s) o[s].seq && (a = Math.max(a, o[s].level));
                for (s = 0; s < o.length; ++s) o[s].seq ? o[s].level == a && (h = !0, e[o[s].seq] = 1, l(o[s].callback, n, o[s].combo, o[s].seq)) : h || l(o[s].callback, n, o[s].combo);
                o = "keypress" == n.type && w, n.type != b || r(t) || o || i(e), w = h && "keydown" == n.type
            }, f._bindMultiple = function (t, e, i) {
                for (var n = 0; n < t.length; ++n) p(t[n], e, i)
            }, n(t, "keypress", d), n(t, "keydown", d), n(t, "keyup", d)
        }
        if (t) {
            var l = {
                    8: "backspace",
                    9: "tab",
                    13: "enter",
                    16: "shift",
                    17: "ctrl",
                    18: "alt",
                    20: "capslock",
                    27: "esc",
                    32: "space",
                    33: "pageup",
                    34: "pagedown",
                    35: "end",
                    36: "home",
                    37: "left",
                    38: "up",
                    39: "right",
                    40: "down",
                    45: "ins",
                    46: "del",
                    91: "meta",
                    93: "meta",
                    224: "meta"
                },
                d = {
                    106: "*",
                    107: "+",
                    109: "-",
                    110: ".",
                    111: "/",
                    186: ";",
                    187: "=",
                    188: ",",
                    189: "-",
                    190: ".",
                    191: "/",
                    192: "`",
                    219: "[",
                    220: "\\",
                    221: "]",
                    222: "'"
                },
                u = {
                    "~": "`",
                    "!": "1",
                    "@": "2",
                    "#": "3",
                    $: "4",
                    "%": "5",
                    "^": "6",
                    "&": "7",
                    "*": "8",
                    "(": "9",
                    ")": "0",
                    _: "-",
                    "+": "=",
                    ":": ";",
                    '"': "'",
                    "<": ",",
                    ">": ".",
                    "?": "/",
                    "|": "\\"
                },
                p = {
                    option: "alt",
                    command: "meta",
                    return: "enter",
                    escape: "esc",
                    plus: "+",
                    mod: /Mac|iPod|iPhone|iPad/.test(navigator.platform) ? "meta" : "ctrl"
                },
                f;
            for (i = 1; 20 > i; ++i) l[111 + i] = "f" + i;
            for (i = 0; 9 >= i; ++i) l[i + 96] = i.toString();
            h.prototype.bind = function (t, e, i) {
                return t = t instanceof Array ? t : [t], this._bindMultiple.call(this, t, e, i), this
            }, h.prototype.unbind = function (t, e) {
                return this.bind.call(this, t, function () {}, e)
            }, h.prototype.trigger = function (t, e) {
                return this._directMap[t + ":" + e] && this._directMap[t + ":" + e]({}, t), this
            }, h.prototype.reset = function () {
                return this._callbacks = {}, this._directMap = {}, this
            }, h.prototype.stopCallback = function (t, e) {
                return !(-1 < (" " + e.className + " ").indexOf(" mousetrap ") || c(e, this.target)) && ("INPUT" == e.tagName || "SELECT" == e.tagName || "TEXTAREA" == e.tagName || e.isContentEditable)
            }, h.prototype.handleKey = function () {
                return this._handleKey.apply(this, arguments)
            }, h.addKeycodes = function (t) {
                for (var e in t) t.hasOwnProperty(e) && (l[e] = t[e]);
                f = null
            }, h.init = function () {
                var t = h(e),
                    i;
                for (i in t) "_" !== i.charAt(0) && (h[i] = function (e) {
                    return function () {
                        return t[e].apply(t, arguments)
                    }
                }(i))
            }, h.init(), t.Mousetrap = h, "undefined" != typeof module && module.exports && (module.exports = h), "function" == typeof define && define.amd && define(function () {
                return h
            })
        }
    }("undefined" != typeof window ? window : null, "undefined" != typeof window ? document : null),
    function (t) {
        "use strict";
        t.fn.fitVids = function (e) {
            var i = {
                customSelector: null,
                ignore: null
            };
            if (!document.getElementById("fit-vids-style")) {
                var n = document.head || document.getElementsByTagName("head")[0],
                    o = ".fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}",
                    s = document.createElement("div");
                s.innerHTML = '<p>x</p><style id="fit-vids-style">.fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}</style>', n.appendChild(s.childNodes[1])
            }
            return e && t.extend(i, e), this.each(function () {
                var e = ['iframe[src*="player.vimeo.com"]', 'iframe[src*="youtube.com"]', 'iframe[src*="youtube-nocookie.com"]', 'iframe[src*="kickstarter.com"][src*="video.html"]', "object", "embed"];
                i.customSelector && e.push(i.customSelector);
                var n = ".fitvidsignore";
                i.ignore && (n = n + ", " + i.ignore);
                var o = t(this).find(e.join(","));
                o = o.not("object object"), o = o.not(n), o.each(function (e) {
                    var i = t(this);
                    if (!(i.parents(n).length > 0 || "embed" === this.tagName.toLowerCase() && i.parent("object").length || i.parent(".fluid-width-video-wrapper").length)) {
                        i.css("height") || i.css("width") || !isNaN(i.attr("height")) && !isNaN(i.attr("width")) || (i.attr("height", 9), i.attr("width", 16));
                        var o = "object" === this.tagName.toLowerCase() || i.attr("height") && !isNaN(parseInt(i.attr("height"), 10)) ? parseInt(i.attr("height"), 10) : i.height(),
                            s = isNaN(parseInt(i.attr("width"), 10)) ? i.width() : parseInt(i.attr("width"), 10),
                            r = o / s;
                        if (!i.attr("id")) {
                            var a = "fitvid" + e;
                            i.attr("id", a)
                        }
                        i.wrap('<div class="fluid-width-video-wrapper"></div>').parent(".fluid-width-video-wrapper").css("padding-top", 100 * r + "%"), i.removeAttr("height").removeAttr("width")
                    }
                })
            })
        }
    }(window.jQuery || window.Zepto),
    function (t, e, i, n) {
        "use strict";

        function o(e, i) {
            this.element = e, this.options = t.extend({}, r, i), this._defaults = r, this._name = s, this.init()
        }
        var s = "photosetGrid",
            r = {
                width: "100%",
                gutter: "0px",
                highresLinks: !1,
                lowresWidth: 500,
                rel: "",
                borderActive: !1,
                borderWidth: "5px",
                borderColor: "#000000",
                borderRadius: "0",
                borderRemoveDouble: !1,
                onInit: function () {},
                onComplete: function () {}
            };
        o.prototype = {
            init: function () {
                this.options.onInit(), this._setupRows(this.element, this.options), this._setupColumns(this.element, this.options)
            },
            _callback: function (t) {
                this.options.onComplete(t)
            },
            _setupRows: function (e, i) {
                if (i.layout) this.layout = i.layout;
                else if (t(e).attr("data-layout")) this.layout = t(e).attr("data-layout");
                else {
                    for (var n = "", o = 1, s = 0; s < t(e).find("img").length; s++) n += o.toString();
                    this.layout = n
                }
                this.rows = this.layout.split("");
                for (var r in this.rows) this.rows[r] = parseInt(this.rows[r], 10);
                var a = t(e).find("img"),
                    c = 0;
                t.each(this.rows, function (t, e) {
                    var i = c,
                        n = c + e;
                    a.slice(i, n).wrapAll('<div class="photoset-row cols-' + e + '"></div>'), c = n
                }), t(e).find(".photoset-row:not(:last-child)").css({
                    "margin-bottom": i.gutter
                })
            },
            _setupColumns: function (i, n) {
                var o = this,
                    s = function (o) {
                        function s() {
                            var e = t(i).width().toString();
                            e !== t(i).attr("data-width") && (r.each(function () {
                                var e = t(this).find("img:eq(0)");
                                t(this).find("img").each(function () {
                                    var i = t(this);
                                    i.attr("height") < e.attr("height") && (e = t(this)), parseInt(i.css("width"), 10) > n.lowresWidth && i.attr("data-highres") && i.attr("src", i.attr("data-highres"))
                                });
                                var i = e.attr("height") * parseInt(e.css("width"), 10) / e.attr("width"),
                                    o = Math.floor(.025 * i);
                                t(this).height(i - o), n.borderActive && t(this).find(".photoset-content-border").each(function () {
                                    t(this).css({
                                        height: i - o
                                    })
                                }), t(this).find("img").each(function () {
                                    var e = t(this).attr("height") * parseInt(t(this).css("width"), 10) / t(this).attr("width"),
                                        n = .5 * (i - e) + "px";
                                    t(this).css({
                                        "margin-top": n
                                    })
                                })
                            }), t(i).attr("data-width", e))
                        }
                        var r = t(i).find(".photoset-row"),
                            a = t(i).find("img");
                        n.highresLinks ? (a.each(function () {
                            var e;
                            e = t(this).attr(t(this).attr("data-highres") ? "data-highres" : "src"), t(this).wrapAll('<a href="' + e + '" class="photoset-cell highres-link" />'), n.borderActive && t(this).wrapAll('<span class="photoset-content-border" />')
                        }), n.rel && a.parent().attr("rel", n.rel)) : a.each(function () {
                            n.borderActive ? (t(this).wrapAll('<div class="photoset-cell photoset-cell--border" />'), t(this).wrapAll('<div class="photoset-content-border" />')) : t(this).wrapAll('<div class="photoset-cell" />')
                        });
                        var c = t(i).find(".photoset-cell"),
                            h = t(i).find(".cols-1 .photoset-cell"),
                            l = t(i).find(".cols-2 .photoset-cell"),
                            d = t(i).find(".cols-3 .photoset-cell"),
                            u = t(i).find(".cols-4 .photoset-cell"),
                            p = t(i).find(".cols-5 .photoset-cell"),
                            f = t(i).find(".photoset-content-border");
                        t(i).css({
                            width: n.width
                        }), r.css({
                            clear: "left",
                            display: "block",
                            overflow: "hidden"
                        }), c.css({
                            float: "left",
                            display: "block",
                            "line-height": "0",
                            "-webkit-box-sizing": "border-box",
                            "-moz-box-sizing": "border-box",
                            "box-sizing": "border-box"
                        }), a.css({
                            width: "100%",
                            height: "auto"
                        }), n.borderActive && f.css({
                            display: "block",
                            border: n.borderWidth + " solid " + n.borderColor,
                            "border-radius": n.borderRadius,
                            overflow: "hidden",
                            "-webkit-box-sizing": "border-box",
                            "-moz-box-sizing": "border-box",
                            "box-sizing": "border-box"
                        }), o && a.each(function () {
                            t(this).attr("height", t(this).height()), t(this).attr("width", t(this).width())
                        }), h.css({
                            width: "100%"
                        }), l.css({
                            width: "50%"
                        }), d.css({
                            width: "33.3%"
                        }), u.css({
                            width: "25%"
                        }), p.css({
                            width: "20%"
                        });
                        var g = parseInt(n.gutter, 10);
                        t(i).find(".photoset-cell:not(:last-child)").css({
                            "padding-right": g / 2 + "px"
                        }), t(i).find(".photoset-cell:not(:first-child)").css({
                            "padding-left": g / 2 + "px"
                        }), n.borderRemoveDouble && (t(i).find(".photoset-row").not(":eq(0)").find(".photoset-content-border").css({
                            "border-top": "none"
                        }), t(i).find(".photoset-row").not(".cols-1").find(".photoset-content-border").not(":eq(0)").css({
                            "border-left": "none"
                        })), s(), t(e).on("resize", function () {
                            s()
                        })
                    },
                    r = !0,
                    a = !0;
                t(i).find("img").each(function () {
                    a &= !!t(this).attr("height") & !!t(this).attr("width")
                }), r = !a, r ? t(i).imagesLoaded(function () {
                    s(r), o._callback(i)
                }) : (s(r), o._callback(i))
            }
        }, t.fn[s] = function (e) {
            return this.each(function () {
                t.data(this, "plugin_" + s) || t.data(this, "plugin_" + s, new o(this, e))
            })
        };
        var a = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
        t.fn.imagesLoaded = function (e) {
            function i() {
                var i = t(d),
                    n = t(u);
                r && (u.length ? r.reject(h, i, n) : r.resolve(h)), t.isFunction(e) && e.call(s, h, i, n)
            }

            function n(t) {
                o(t.target, "error" === t.type)
            }

            function o(e, o) {
                e.src !== a && -1 === t.inArray(e, l) && (l.push(e), o ? u.push(e) : d.push(e), t.data(e, "imagesLoaded", {
                    isBroken: o,
                    src: e.src
                }), c && r.notifyWith(t(e), [o, h, t(d), t(u)]), h.length === l.length && (setTimeout(i), h.unbind(".imagesLoaded", n)))
            }
            var s = this,
                r = t.isFunction(t.Deferred) ? t.Deferred() : 0,
                c = t.isFunction(r.notify),
                h = s.find("img").add(s.filter("img")),
                l = [],
                d = [],
                u = [];
            return t.isPlainObject(e) && t.each(e, function (t, i) {
                "callback" === t ? e = i : r && r[t](i)
            }), h.length ? h.bind("load.imagesLoaded error.imagesLoaded", n).each(function (e, i) {
                var n = i.src,
                    s = t.data(i, "imagesLoaded");
                return s && s.src === n ? void o(i, s.isBroken) : i.complete && void 0 !== i.naturalWidth ? void o(i, 0 === i.naturalWidth || 0 === i.naturalHeight) : void((i.readyState || i.complete) && (i.src = a, i.src = n))
            }) : i(), r ? r.promise(s) : s
        };
        var c, h, l, d = t.event,
            u = {
                _: 0
            },
            p = 0;
        c = d.special.throttledresize = {
            setup: function () {
                t(this).on("resize", c.handler)
            },
            teardown: function () {
                t(this).off("resize", c.handler)
            },
            handler: function (e, i) {
                var n = this,
                    o = arguments;
                h = !0, l || (setInterval(function () {
                    p++, (p > c.threshold && h || i) && (e.type = "throttledresize", d.dispatch.apply(n, o), h = !1, p = 0), p > 9 && (t(u).stop(), l = !1, p = 0)
                }, 30), l = !0)
            },
            threshold: 0
        }
    }(jQuery, window, document),
    /**
     * @preserve
     Colorbox 1.6.4
     license: MIT
     http://www.jacklmoore.com/colorbox
     */
    function (t, e, i) {
        function n(i, n, o) {
            var s = e.createElement(i);
            return n && (s.id = Z + n), o && (s.style.cssText = o), t(s)
        }

        function o() {
            return i.innerHeight ? i.innerHeight : t(i).height()
        }

        function s(e, i) {
            i !== Object(i) && (i = {}), this.cache = {}, this.el = e, this.value = function (e) {
                var n;
                return void 0 === this.cache[e] && (n = t(this.el).attr("data-cbox-" + e), void 0 !== n ? this.cache[e] = n : void 0 !== i[e] ? this.cache[e] = i[e] : void 0 !== V[e] && (this.cache[e] = V[e])), this.cache[e]
            }, this.get = function (e) {
                var i = this.value(e);
                return t.isFunction(i) ? i.call(this.el, this) : i
            }
        }

        function r(t) {
            var e = T.length,
                i = (K + t) % e;
            return 0 > i ? e + i : i
        }

        function a(t, e) {
            return Math.round((/%/.test(t) ? ("x" === e ? j.width() : o()) / 100 : 1) * parseInt(t, 10))
        }

        function c(t, e) {
            return t.get("photo") || t.get("photoRegex").test(e)
        }

        function h(t, e) {
            return t.get("retinaUrl") && i.devicePixelRatio > 1 ? e.replace(t.get("photoRegex"), t.get("retinaSuffix")) : e
        }

        function l(t) {
            "contains" in b[0] && !b[0].contains(t.target) && t.target !== w[0] && (t.stopPropagation(), b.focus())
        }

        function d(t) {
            d.str !== t && (b.add(w).removeClass(d.str).addClass(t), d.str = t)
        }

        function u(e) {
            K = 0, e && !1 !== e && "nofollow" !== e ? (T = t("." + tt).filter(function () {
                return new s(this, t.data(this, X)).get("rel") === e
            }), -1 === (K = T.index(W.el)) && (T = T.add(W.el), K = T.length - 1)) : T = t(W.el)
        }

        function p(i) {
            t(e).trigger(i), at.triggerHandler(i)
        }

        function f(i) {
            var o;
            if (!U) {
                if (o = t(i).data(X), W = new s(i, o), u(W.get("rel")), !Q) {
                    Q = $ = !0, d(W.get("className")), b.css({
                        visibility: "hidden",
                        display: "block",
                        opacity: ""
                    }), A = n(ct, "LoadedContent", "width:0; height:0; overflow:hidden; visibility:hidden"), x.css({
                        width: "",
                        height: ""
                    }).append(A), H = _.height() + I.height() + x.outerHeight(!0) - x.height(), F = k.width() + C.width() + x.outerWidth(!0) - x.width(), R = A.outerHeight(!0), O = A.outerWidth(!0);
                    var r = a(W.get("initialWidth"), "x"),
                        c = a(W.get("initialHeight"), "y"),
                        h = W.get("maxWidth"),
                        f = W.get("maxHeight");
                    W.w = Math.max((!1 !== h ? Math.min(r, a(h, "x")) : r) - O - F, 0), W.h = Math.max((!1 !== f ? Math.min(c, a(f, "y")) : c) - R - H, 0), A.css({
                        width: "",
                        height: W.h
                    }), Y.position(), p(et), W.get("onOpen"), P.add(E).hide(), b.focus(), W.get("trapFocus") && e.addEventListener && (e.addEventListener("focus", l, !0), at.one(st, function () {
                        e.removeEventListener("focus", l, !0)
                    })), W.get("returnFocus") && at.one(st, function () {
                        t(W.el).focus()
                    })
                }
                var g = parseFloat(W.get("opacity"));
                w.css({
                    opacity: g === g ? g : "",
                    cursor: W.get("overlayClose") ? "pointer" : "",
                    visibility: "visible"
                }).show(), W.get("closeButton") ? L.html(W.get("close")).appendTo(x) : L.appendTo("<div/>"), v()
            }
        }

        function g() {
            b || (G = !1, j = t(i), b = n(ct).attr({
                id: X,
                class: !1 === t.support.opacity ? Z + "IE" : "",
                role: "dialog",
                tabindex: "-1"
            }).hide(), w = n(ct, "Overlay").hide(), q = t([n(ct, "LoadingOverlay")[0], n(ct, "LoadingGraphic")[0]]), y = n(ct, "Wrapper"), x = n(ct, "Content").append(E = n(ct, "Title"), M = n(ct, "Current"), S = t('<button type="button"/>').attr({
                id: Z + "Previous"
            }), N = t('<button type="button"/>').attr({
                id: Z + "Next"
            }), D = t('<button type="button"/>').attr({
                id: Z + "Slideshow"
            }), q), L = t('<button type="button"/>').attr({
                id: Z + "Close"
            }), y.append(n(ct).append(n(ct, "TopLeft"), _ = n(ct, "TopCenter"), n(ct, "TopRight")), n(ct, !1, "clear:left").append(k = n(ct, "MiddleLeft"), x, C = n(ct, "MiddleRight")), n(ct, !1, "clear:left").append(n(ct, "BottomLeft"), I = n(ct, "BottomCenter"), n(ct, "BottomRight"))).find("div div").css({
                float: "left"
            }), z = n(ct, !1, "position:absolute; width:9999px; visibility:hidden; display:none; max-width:none;"), P = N.add(S).add(M).add(D)), e.body && !b.parent().length && t(e.body).append(w, b.append(y, z))
        }

        function m() {
            function i(t) {
                t.which > 1 || t.shiftKey || t.altKey || t.metaKey || t.ctrlKey || (t.preventDefault(), f(this))
            }
            return !!b && (G || (G = !0, N.click(function () {
                Y.next()
            }), S.click(function () {
                Y.prev()
            }), L.click(function () {
                Y.close()
            }), w.click(function () {
                W.get("overlayClose") && Y.close()
            }), t(e).bind("keydown." + Z, function (t) {
                var e = t.keyCode;
                Q && W.get("escKey") && 27 === e && (t.preventDefault(), Y.close()), Q && W.get("arrowKey") && T[1] && !t.altKey && (37 === e ? (t.preventDefault(), S.click()) : 39 === e && (t.preventDefault(), N.click()))
            }), t.isFunction(t.fn.on) ? t(e).on("click." + Z, "." + tt, i) : t("." + tt).live("click." + Z, i)), !0)
        }

        function v() {
            var e, o, s, r = Y.prep,
                l = ++ht;
            if ($ = !0, B = !1, p(rt), p(it), W.get("onLoad"), W.h = W.get("height") ? a(W.get("height"), "y") - R - H : W.get("innerHeight") && a(W.get("innerHeight"), "y"), W.w = W.get("width") ? a(W.get("width"), "x") - O - F : W.get("innerWidth") && a(W.get("innerWidth"), "x"), W.mw = W.w, W.mh = W.h, W.get("maxWidth") && (W.mw = a(W.get("maxWidth"), "x") - O - F, W.mw = W.w && W.w < W.mw ? W.w : W.mw), W.get("maxHeight") && (W.mh = a(W.get("maxHeight"), "y") - R - H, W.mh = W.h && W.h < W.mh ? W.h : W.mh), e = W.get("href"), J = setTimeout(function () {
                    q.show()
                }, 100), W.get("inline")) {
                var d = t(e).eq(0);
                s = t("<div>").hide().insertBefore(d), at.one(rt, function () {
                    s.replaceWith(d)
                }), r(d)
            } else W.get("iframe") ? r(" ") : W.get("html") ? r(W.get("html")) : c(W, e) ? (e = h(W, e), B = W.get("createImg"), t(B).addClass(Z + "Photo").bind("error." + Z, function () {
                r(n(ct, "Error").html(W.get("imgError")))
            }).one("load", function () {
                l === ht && setTimeout(function () {
                    var e;
                    W.get("retinaImage") && i.devicePixelRatio > 1 && (B.height = B.height / i.devicePixelRatio, B.width = B.width / i.devicePixelRatio), W.get("scalePhotos") && (o = function () {
                        B.height -= B.height * e, B.width -= B.width * e
                    }, W.mw && B.width > W.mw && (e = (B.width - W.mw) / B.width, o()), W.mh && B.height > W.mh && (e = (B.height - W.mh) / B.height, o())), W.h && (B.style.marginTop = Math.max(W.mh - B.height, 0) / 2 + "px"), T[1] && (W.get("loop") || T[K + 1]) && (B.style.cursor = "pointer", t(B).bind("click." + Z, function () {
                        Y.next()
                    })), B.style.width = B.width + "px", B.style.height = B.height + "px", r(B)
                }, 1)
            }), B.src = e) : e && z.load(e, W.get("data"), function (e, i) {
                l === ht && r("error" === i ? n(ct, "Error").html(W.get("xhrError")) : t(this).contents())
            })
        }
        var w, b, y, x, _, k, C, I, T, j, A, z, q, E, M, D, N, S, L, P, W, H, F, R, O, K, B, Q, $, U, J, Y, G, V = {
                html: !1,
                photo: !1,
                iframe: !1,
                inline: !1,
                transition: "elastic",
                speed: 300,
                fadeOut: 300,
                width: !1,
                initialWidth: "600",
                innerWidth: !1,
                maxWidth: !1,
                height: !1,
                initialHeight: "450",
                innerHeight: !1,
                maxHeight: !1,
                scalePhotos: !0,
                scrolling: !0,
                opacity: .9,
                preloading: !0,
                className: !1,
                overlayClose: !0,
                escKey: !0,
                arrowKey: !0,
                top: !1,
                bottom: !1,
                left: !1,
                right: !1,
                fixed: !1,
                data: void 0,
                closeButton: !0,
                fastIframe: !0,
                open: !1,
                reposition: !0,
                loop: !0,
                slideshow: !1,
                slideshowAuto: !0,
                slideshowSpeed: 2500,
                slideshowStart: "start slideshow",
                slideshowStop: "stop slideshow",
                photoRegex: /\.(gif|png|jp(e|g|eg)|bmp|ico|webp|jxr|svg)((#|\?).*)?$/i,
                retinaImage: !1,
                retinaUrl: !1,
                retinaSuffix: "@2x.$1",
                current: "image {current} of {total}",
                previous: "previous",
                next: "next",
                close: "close",
                xhrError: "This content failed to load.",
                imgError: "This image failed to load.",
                returnFocus: !0,
                trapFocus: !0,
                onOpen: !1,
                onLoad: !1,
                onComplete: !1,
                onCleanup: !1,
                onClosed: !1,
                rel: function () {
                    return this.rel
                },
                href: function () {
                    return t(this).attr("href")
                },
                title: function () {
                    return this.title
                },
                createImg: function () {
                    var e = new Image,
                        i = t(this).data("cbox-img-attrs");
                    return "object" == typeof i && t.each(i, function (t, i) {
                        e[t] = i
                    }), e
                },
                createIframe: function () {
                    var i = e.createElement("iframe"),
                        n = t(this).data("cbox-iframe-attrs");
                    return "object" == typeof n && t.each(n, function (t, e) {
                        i[t] = e
                    }), "frameBorder" in i && (i.frameBorder = 0), "allowTransparency" in i && (i.allowTransparency = "true"), i.name = (new Date).getTime(), i.allowFullscreen = !0, i
                }
            },
            X = "colorbox",
            Z = "cbox",
            tt = Z + "Element",
            et = Z + "_open",
            it = Z + "_load",
            nt = Z + "_complete",
            ot = Z + "_cleanup",
            st = Z + "_closed",
            rt = Z + "_purge",
            at = t("<a/>"),
            ct = "div",
            ht = 0,
            lt = {},
            dt = function () {
                function t() {
                    clearTimeout(r)
                }

                function e() {
                    (W.get("loop") || T[K + 1]) && (t(), r = setTimeout(Y.next, W.get("slideshowSpeed")))
                }

                function i() {
                    D.html(W.get("slideshowStop")).unbind(c).one(c, n), at.bind(nt, e).bind(it, t), b.removeClass(a + "off").addClass(a + "on")
                }

                function n() {
                    t(), at.unbind(nt, e).unbind(it, t), D.html(W.get("slideshowStart")).unbind(c).one(c, function () {
                        Y.next(), i()
                    }), b.removeClass(a + "on").addClass(a + "off")
                }

                function o() {
                    s = !1, D.hide(), t(), at.unbind(nt, e).unbind(it, t), b.removeClass(a + "off " + a + "on")
                }
                var s, r, a = Z + "Slideshow_",
                    c = "click." + Z;
                return function () {
                    s ? W.get("slideshow") || (at.unbind(ot, o), o()) : W.get("slideshow") && T[1] && (s = !0, at.one(ot, o), W.get("slideshowAuto") ? i() : n(), D.show())
                }
            }();
        t[X] || (t(g), Y = t.fn[X] = t[X] = function (e, i) {
            var n, o = this;
            return e = e || {}, t.isFunction(o) && (o = t("<a/>"), e.open = !0), o[0] ? (g(), m() && (i && (e.onComplete = i), o.each(function () {
                var i = t.data(this, X) || {};
                t.data(this, X, t.extend(i, e))
            }).addClass(tt), n = new s(o[0], e), n.get("open") && f(o[0])), o) : o
        }, Y.position = function (e, i) {
            function n() {
                _[0].style.width = I[0].style.width = x[0].style.width = parseInt(b[0].style.width, 10) - F + "px", x[0].style.height = k[0].style.height = C[0].style.height = parseInt(b[0].style.height, 10) - H + "px"
            }
            var s, r, c, h = 0,
                l = 0,
                d = b.offset();
            if (j.unbind("resize." + Z), b.css({
                    top: -9e4,
                    left: -9e4
                }), r = j.scrollTop(), c = j.scrollLeft(), W.get("fixed") ? (d.top -= r, d.left -= c, b.css({
                    position: "fixed"
                })) : (h = r, l = c, b.css({
                    position: "absolute"
                })), l += !1 !== W.get("right") ? Math.max(j.width() - W.w - O - F - a(W.get("right"), "x"), 0) : !1 !== W.get("left") ? a(W.get("left"), "x") : Math.round(Math.max(j.width() - W.w - O - F, 0) / 2), h += !1 !== W.get("bottom") ? Math.max(o() - W.h - R - H - a(W.get("bottom"), "y"), 0) : !1 !== W.get("top") ? a(W.get("top"), "y") : Math.round(Math.max(o() - W.h - R - H, 0) / 2), b.css({
                    top: d.top,
                    left: d.left,
                    visibility: "visible"
                }), y[0].style.width = y[0].style.height = "9999px", s = {
                    width: W.w + O + F,
                    height: W.h + R + H,
                    top: h,
                    left: l
                }, e) {
                var u = 0;
                t.each(s, function (t) {
                    return s[t] !== lt[t] ? void(u = e) : void 0
                }), e = u
            }
            lt = s, e || b.css(s), b.dequeue().animate(s, {
                duration: e || 0,
                complete: function () {
                    n(), $ = !1, y[0].style.width = W.w + O + F + "px", y[0].style.height = W.h + R + H + "px", W.get("reposition") && setTimeout(function () {
                        j.bind("resize." + Z, Y.position)
                    }, 1), t.isFunction(i) && i()
                },
                step: n
            })
        }, Y.resize = function (t) {
            var e;
            Q && (t = t || {}, t.width && (W.w = a(t.width, "x") - O - F), t.innerWidth && (W.w = a(t.innerWidth, "x")), A.css({
                width: W.w
            }), t.height && (W.h = a(t.height, "y") - R - H), t.innerHeight && (W.h = a(t.innerHeight, "y")), t.innerHeight || t.height || (e = A.scrollTop(), A.css({
                height: "auto"
            }), W.h = A.height()), A.css({
                height: W.h
            }), e && A.scrollTop(e), Y.position("none" === W.get("transition") ? 0 : W.get("speed")))
        }, Y.prep = function (i) {
            function o() {
                return W.w = W.w || A.width(), W.w = W.mw && W.mw < W.w ? W.mw : W.w, W.w
            }

            function a() {
                return W.h = W.h || A.height(), W.h = W.mh && W.mh < W.h ? W.mh : W.h, W.h
            }
            if (Q) {
                var l, u = "none" === W.get("transition") ? 0 : W.get("speed");
                A.remove(), A = n(ct, "LoadedContent").append(i), A.hide().appendTo(z.show()).css({
                    width: o(),
                    overflow: W.get("scrolling") ? "auto" : "hidden"
                }).css({
                    height: a()
                }).prependTo(x), z.hide(), t(B).css({
                    float: "none"
                }), d(W.get("className")), l = function () {
                    function i() {
                        !1 === t.support.opacity && b[0].style.removeAttribute("filter")
                    }
                    var n, o, a = T.length;
                    Q && (o = function () {
                        clearTimeout(J), q.hide(), p(nt), W.get("onComplete")
                    }, E.html(W.get("title")).show(), A.show(), a > 1 ? ("string" == typeof W.get("current") && M.html(W.get("current").replace("{current}", K + 1).replace("{total}", a)).show(), N[W.get("loop") || a - 1 > K ? "show" : "hide"]().html(W.get("next")), S[W.get("loop") || K ? "show" : "hide"]().html(W.get("previous")), dt(), W.get("preloading") && t.each([r(-1), r(1)], function () {
                        var i, n = T[this],
                            o = new s(n, t.data(n, X)),
                            r = o.get("href");
                        r && c(o, r) && (r = h(o, r), i = e.createElement("img"), i.src = r)
                    })) : P.hide(), W.get("iframe") ? (n = W.get("createIframe"), W.get("scrolling") || (n.scrolling = "no"), t(n).attr({
                        src: W.get("href"),
                        class: Z + "Iframe"
                    }).one("load", o).appendTo(A), at.one(rt, function () {
                        n.src = "//about:blank"
                    }), W.get("fastIframe") && t(n).trigger("load")) : o(), "fade" === W.get("transition") ? b.fadeTo(u, 1, i) : i())
                }, "fade" === W.get("transition") ? b.fadeTo(u, 0, function () {
                    Y.position(0, l)
                }) : Y.position(u, l)
            }
        }, Y.next = function () {
            !$ && T[1] && (W.get("loop") || T[K + 1]) && (K = r(1), f(T[K]))
        }, Y.prev = function () {
            !$ && T[1] && (W.get("loop") || K) && (K = r(-1), f(T[K]))
        }, Y.close = function () {
            Q && !U && (U = !0, Q = !1, p(ot), W.get("onCleanup"), j.unbind("." + Z), w.fadeTo(W.get("fadeOut") || 0, 0), b.stop().fadeTo(W.get("fadeOut") || 0, 0, function () {
                b.hide(), w.hide(), p(rt), A.remove(), setTimeout(function () {
                    U = !1, p(st), W.get("onClosed")
                }, 1)
            }))
        }, Y.remove = function () {
            b && (b.stop(), t[X].close(), b.stop(!1, !0).remove(), w.remove(), U = !1, b = null, t("." + tt).removeData(X).removeClass(tt), t(e).unbind("click." + Z).unbind("keydown." + Z))
        }, Y.element = function () {
            return t(W.el)
        }, Y.settings = V)
    }(jQuery, document, window), $(function () {
        $("body").css("opacity", "1")
    });
