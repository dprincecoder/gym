! function (e) {
    var t = {};

    function r(n) {
        if (t[n]) return t[n].exports;
        var a = t[n] = {
            i: n,
            l: !1,
            exports: {}
        };
        return e[n].call(a.exports, a, a.exports, r), a.l = !0, a.exports
    }
    r.m = e, r.c = t, r.d = function (e, t, n) {
        r.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: n
        })
    }, r.r = function (e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, r.t = function (e, t) {
        if (1 & t && (e = r(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var n = Object.create(null);
        if (r.r(n), Object.defineProperty(n, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var a in e) r.d(n, a, function (t) {
                return e[t]
            }.bind(null, a));
        return n
    }, r.n = function (e) {
        var t = e && e.__esModule ? function () {
            return e.default
        } : function () {
            return e
        };
        return r.d(t, "a", t), t
    }, r.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, r.p = "/", r(r.s = 209)
}({
    209: function (e, t, r) {
        e.exports = r(210)
    },
    210: function (e, t) {
        ! function () {
            "use strict";
            Charts.init();
            ! function (e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "roundedBar",
                    r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                r = Chart.helpers.merge({
                    barRoundness: 1.2,
                    scales: {
                        yAxes: [{
                            ticks: {
                                callback: function (e) {
                                    if (!(e % 10)) return "$" + e + "k"
                                }
                            }
                        }]
                    },
                    tooltips: {
                        callbacks: {
                            label: function (e, t) {
                                var r = t.datasets[e.datasetIndex].label || "",
                                    n = e.yLabel,
                                    a = "";
                                return 1 < t.datasets.length && (a += '<span class="popover-body-label mr-auto">' + r + "</span>"), a + '<span class="popover-body-value">$' + n + "k</span>"
                            }
                        }
                    }
                }, r);
                var n = {
                    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                    datasets: [{
                        label: "Sales",
                        data: [25, 20, 30, 22, 17, 10, 18, 26, 28, 26, 20, 32],
                        barPercentage: .5,
                        barThickness: 20
                    }]
                };
                Charts.create(e, t, r, n)
            }("#ordersChart")
        }()
    }
});