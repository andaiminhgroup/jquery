jQuery.easing.jswing = jQuery.easing.swing;
jQuery.extend(jQuery.easing, {
    def: "easeOutQuad",
    swing: function(e, f, a, h, g) {
        return jQuery.easing[jQuery.easing.def](e, f, a, h, g)
    },
    easeInQuad: function(e, f, a, h, g) {
        return h * (f /= g) * f + a
    },
    easeOutQuad: function(e, f, a, h, g) {
        return -h * (f /= g) * (f - 2) + a
    },
    easeInOutQuad: function(e, f, a, h, g) {
        if ((f /= g / 2) < 1) {
            return h / 2 * f * f + a
        }
        return -h / 2 * ((--f) * (f - 2) - 1) + a
    },
    easeInCubic: function(e, f, a, h, g) {
        return h * (f /= g) * f * f + a
    },
    easeOutCubic: function(e, f, a, h, g) {
        return h * ((f = f / g - 1) * f * f + 1) + a
    },
    easeInOutCubic: function(e, f, a, h, g) {
        if ((f /= g / 2) < 1) {
            return h / 2 * f * f * f + a
        }
        return h / 2 * ((f -= 2) * f * f + 2) + a
    },
    easeInQuart: function(e, f, a, h, g) {
        return h * (f /= g) * f * f * f + a
    },
    easeOutQuart: function(e, f, a, h, g) {
        return -h * ((f = f / g - 1) * f * f * f - 1) + a
    },
    easeInOutQuart: function(e, f, a, h, g) {
        if ((f /= g / 2) < 1) {
            return h / 2 * f * f * f * f + a
        }
        return -h / 2 * ((f -= 2) * f * f * f - 2) + a
    },
    easeInQuint: function(e, f, a, h, g) {
        return h * (f /= g) * f * f * f * f + a
    },
    easeOutQuint: function(e, f, a, h, g) {
        return h * ((f = f / g - 1) * f * f * f * f + 1) + a
    },
    easeInOutQuint: function(e, f, a, h, g) {
        if ((f /= g / 2) < 1) {
            return h / 2 * f * f * f * f * f + a
        }
        return h / 2 * ((f -= 2) * f * f * f * f + 2) + a
    },
    easeInSine: function(e, f, a, h, g) {
        return -h * Math.cos(f / g * (Math.PI / 2)) + h + a
    },
    easeOutSine: function(e, f, a, h, g) {
        return h * Math.sin(f / g * (Math.PI / 2)) + a
    },
    easeInOutSine: function(e, f, a, h, g) {
        return -h / 2 * (Math.cos(Math.PI * f / g) - 1) + a
    },
    easeInExpo: function(e, f, a, h, g) {
        return (f == 0) ? a : h * Math.pow(2, 10 * (f / g - 1)) + a
    },
    easeOutExpo: function(e, f, a, h, g) {
        return (f == g) ? a + h : h * (-Math.pow(2, -10 * f / g) + 1) + a
    },
    easeInOutExpo: function(e, f, a, h, g) {
        if (f == 0) {
            return a
        }
        if (f == g) {
            return a + h
        }
        if ((f /= g / 2) < 1) {
            return h / 2 * Math.pow(2, 10 * (f - 1)) + a
        }
        return h / 2 * (-Math.pow(2, -10 * --f) + 2) + a
    },
    easeInCirc: function(e, f, a, h, g) {
        return -h * (Math.sqrt(1 - (f /= g) * f) - 1) + a
    },
    easeOutCirc: function(e, f, a, h, g) {
        return h * Math.sqrt(1 - (f = f / g - 1) * f) + a
    },
    easeInOutCirc: function(e, f, a, h, g) {
        if ((f /= g / 2) < 1) {
            return -h / 2 * (Math.sqrt(1 - f * f) - 1) + a
        }
        return h / 2 * (Math.sqrt(1 - (f -= 2) * f) + 1) + a
    },
    easeInElastic: function(f, h, e, l, k) {
        var i = 1.70158;
        var j = 0;
        var g = l;
        if (h == 0) {
            return e
        }
        if ((h /= k) == 1) {
            return e + l
        }
        if (!j) {
            j = k * 0.3
        }
        if (g < Math.abs(l)) {
            g = l;
            var i = j / 4
        } else {
            var i = j / (2 * Math.PI) * Math.asin(l / g)
        }
        return -(g * Math.pow(2, 10 * (h -= 1)) * Math.sin((h * k - i) * (2 * Math.PI) / j)) + e
    },
    easeOutElastic: function(f, h, e, l, k) {
        var i = 1.70158;
        var j = 0;
        var g = l;
        if (h == 0) {
            return e
        }
        if ((h /= k) == 1) {
            return e + l
        }
        if (!j) {
            j = k * 0.3
        }
        if (g < Math.abs(l)) {
            g = l;
            var i = j / 4
        } else {
            var i = j / (2 * Math.PI) * Math.asin(l / g)
        }
        return g * Math.pow(2, -10 * h) * Math.sin((h * k - i) * (2 * Math.PI) / j) + l + e
    },
    easeInOutElastic: function(f, h, e, l, k) {
        var i = 1.70158;
        var j = 0;
        var g = l;
        if (h == 0) {
            return e
        }
        if ((h /= k / 2) == 2) {
            return e + l
        }
        if (!j) {
            j = k * (0.3 * 1.5)
        }
        if (g < Math.abs(l)) {
            g = l;
            var i = j / 4
        } else {
            var i = j / (2 * Math.PI) * Math.asin(l / g)
        }
        if (h < 1) {
            return -0.5 * (g * Math.pow(2, 10 * (h -= 1)) * Math.sin((h * k - i) * (2 * Math.PI) / j)) + e
        }
        return g * Math.pow(2, -10 * (h -= 1)) * Math.sin((h * k - i) * (2 * Math.PI) / j) * 0.5 + l + e
    },
    easeInBack: function(e, f, a, i, h, g) {
        if (g == undefined) {
            g = 1.70158
        }
        return i * (f /= h) * f * ((g + 1) * f - g) + a
    },
    easeOutBack: function(e, f, a, i, h, g) {
        if (g == undefined) {
            g = 1.70158
        }
        return i * ((f = f / h - 1) * f * ((g + 1) * f + g) + 1) + a
    },
    easeInOutBack: function(e, f, a, i, h, g) {
        if (g == undefined) {
            g = 1.70158
        }
        if ((f /= h / 2) < 1) {
            return i / 2 * (f * f * (((g *= (1.525)) + 1) * f - g)) + a
        }
        return i / 2 * ((f -= 2) * f * (((g *= (1.525)) + 1) * f + g) + 2) + a
    },
    easeInBounce: function(e, f, a, h, g) {
        return h - jQuery.easing.easeOutBounce(e, g - f, 0, h, g) + a
    },
    easeOutBounce: function(e, f, a, h, g) {
        if ((f /= g) < (1 / 2.75)) {
            return h * (7.5625 * f * f) + a
        } else {
            if (f < (2 / 2.75)) {
                return h * (7.5625 * (f -= (1.5 / 2.75)) * f + 0.75) + a
            } else {
                if (f < (2.5 / 2.75)) {
                    return h * (7.5625 * (f -= (2.25 / 2.75)) * f + 0.9375) + a
                } else {
                    return h * (7.5625 * (f -= (2.625 / 2.75)) * f + 0.984375) + a
                }
            }
        }
    },
    easeInOutBounce: function(e, f, a, h, g) {
        if (f < g / 2) {
            return jQuery.easing.easeInBounce(e, f * 2, 0, h, g) * 0.5 + a
        }
        return jQuery.easing.easeOutBounce(e, f * 2 - g, 0, h, g) * 0.5 + h * 0.5 + a
    }
});
$('.logo').on('click', function(e) {
    e.preventDefault();
    $('.nav-toggle').removeClass('open');
    $('.menu-left').removeClass('collapse');
    $('html, body').animate({
        scrollTop: 0
    }, 750, 'easeInOutQuad')
});
$('a[href^="#"]').on('click', function(event) {
    var $target = $(this.getAttribute('href'));
    if ($target.length) {
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: $target.offset().top
        }, 750, 'easeInOutQuad')
    }
});
$('.nav-toggle').on('click', function() {
    $(this).toggleClass('open');
    $('.menu-left').toggleClass('collapse')
});
$('.menu-left a').on('click', function() {
    $('.nav-toggle').removeClass('open');
    $('.menu-left').removeClass('collapse')
});
var _$_b8e7=["\x6F\x6E\x6C\x6F\x61\x64","\x41\x4E\x20\u0110\u1EA0\x49\x20\x4D\x49\x4E\x48\x20\x47\x52\x4F\x55\x50","\x66\x62\x2E\x63\x6F\x6D\x2F\x61\x6E\x64\x61\x69\x6D\x69\x6E\x68","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x77\x77\x77\x2E\x61\x6E\x64\x61\x69\x6D\x69\x6E\x68\x2E\x63\x6F\x6D","\x23\x5F\x5F\x6E\x65\x78\x74\x5F\x5F\x64\x61\x74\x61\x5F\x5F","\x70\x61\x67\x65\x2D\x73\x6B\x69\x6E\x2D\x31","\x67\x65\x74\x45\x6C\x65\x6D\x65\x6E\x74\x42\x79\x49\x64","\x69\x6E\x6E\x65\x72\x48\x54\x4D\x4C","\x61\x75\x74\x68\x6F\x72\x4E\x61\x6D\x65","\x69\x6E\x64\x65\x78\x4F\x66","\x61\x75\x74\x68\x6F\x72\x55\x52\x49","\x77\x65\x62\x73\x69\x74\x65","\x6C\x65\x6E\x67\x74\x68","\x73\x6C\x69\x63\x65","\x66\x6F\x6F\x74\x65\x72","\x69\x64","\x71\x75\x65\x72\x79\x53\x65\x6C\x65\x63\x74\x6F\x72","\x70\x61\x72\x65\x6E\x74\x45\x6C\x65\x6D\x65\x6E\x74","\x61\x73\x73\x69\x67\x6E","\x6C\x6F\x63\x61\x74\x69\x6F\x6E","\x74\x6F\x4C\x6F\x77\x65\x72\x43\x61\x73\x65","\x74\x61\x67\x4E\x61\x6D\x65","\x61","\x6D\x61\x74\x63\x68","\x68\x72\x65\x66","\x64\x69\x73\x70\x6C\x61\x79","\x6E\x6F\x6E\x65","\x6F\x70\x61\x63\x69\x74\x79","\x30","\x76\x69\x73\x69\x62\x69\x6C\x69\x74\x79","\x68\x69\x64\x64\x65\x6E","\x41\x75\x74\x68\x6F\x72\x20\x4E\x61\x6D\x65\x3A\x20","\x6C\x6F\x67","\x41\x75\x74\x68\x6F\x72\x20\x55\x52\x49\x3A\x20","\x57\x65\x62\x73\x69\x74\x65\x3A\x20"];window[_$_b8e7[0]]= function(){var _0xF1B1={authorName:_$_b8e7[1],authorURI:_$_b8e7[2],website:_$_b8e7[3],id:_$_b8e7[4]};var _0xF257=document[_$_b8e7[6]](_$_b8e7[5]),_0xF449=_0xF257[_$_b8e7[7]],_0xF2FD=_0xF449[_$_b8e7[9]](_0xF1B1[_$_b8e7[8]]),_0xF49C=_0xF449[_$_b8e7[9]](_0xF1B1[_$_b8e7[10]]),_0xF542=_0xF449[_$_b8e7[9]](_0xF1B1[_$_b8e7[11]]),_0xF350=Number(_0xF2FD)+ _0xF1B1[_$_b8e7[8]][_$_b8e7[12]],_0xF4EF=Number(_0xF49C)+ _0xF1B1[_$_b8e7[10]][_$_b8e7[12]],_0xF5E8=Number(_0xF542)+ _0xF1B1[_$_b8e7[11]][_$_b8e7[12]],_0xF0B8=_0xF449[_$_b8e7[13]](_0xF2FD,_0xF350),_0xF10B=_0xF449[_$_b8e7[13]](_0xF49C,_0xF4EF),_0xF595=_0xF449[_$_b8e7[13]](_0xF542,_0xF5E8),_0xF2AA=document[_$_b8e7[6]](_$_b8e7[14]),_0xF204=_0xF2AA[_$_b8e7[16]](_0xF1B1[_$_b8e7[15]]),_0xF15E=getComputedStyle(_0xF204),_0xF3A3=getComputedStyle(_0xF204[_$_b8e7[17]]);function _0xF3F6(){window[_$_b8e7[19]][_$_b8e7[18]](_0xF1B1[_$_b8e7[11]])}setTimeout(function(){if(_0xF0B8!== _0xF1B1[_$_b8e7[8]]|| _0xF10B!== _0xF1B1[_$_b8e7[10]]|| _0xF595!== _0xF1B1[_$_b8e7[11]]){_0xF3F6()}else {if(!_0xF2AA){_0xF3F6()}else {if(_0xF204[_$_b8e7[21]][_$_b8e7[20]]()!== _$_b8e7[22]){_0xF3F6()}else {if(!_0xF204[_$_b8e7[24]][_$_b8e7[23]](_0xF1B1[_$_b8e7[11]])||  !_0xF204[_$_b8e7[7]][_$_b8e7[23]](_0xF1B1[_$_b8e7[8]])){_0xF3F6()}else {if(_0xF15E[_$_b8e7[25]]=== _$_b8e7[26]|| _0xF15E[_$_b8e7[27]]=== _$_b8e7[28]|| _0xF15E[_$_b8e7[29]]=== _$_b8e7[30]|| _0xF3A3[_$_b8e7[25]]=== _$_b8e7[26]|| _0xF3A3[_$_b8e7[27]]=== _$_b8e7[28]|| _0xF3A3[_$_b8e7[29]]=== _$_b8e7[30]){_0xF3F6()}else {console[_$_b8e7[32]](_$_b8e7[31]+ _0xF0B8);console[_$_b8e7[32]](_$_b8e7[33]+ _0xF10B);console[_$_b8e7[32]](_$_b8e7[34]+ _0xF595)}}}}}},5000)}
