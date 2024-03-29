! function (e) {
    var t = {};

    function a(r) {
        if (t[r]) return t[r].exports;
        var n = t[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return e[r].call(n.exports, n, n.exports, a), n.l = !0, n.exports
    }
    a.m = e, a.c = t, a.d = function (e, t, r) {
        a.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: r
        })
    }, a.r = function (e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, a.t = function (e, t) {
        if (1 & t && (e = a(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var r = Object.create(null);
        if (a.r(r), Object.defineProperty(r, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var n in e) a.d(r, n, function (t) {
                return e[t]
            }.bind(null, n));
        return r
    }, a.n = function (e) {
        var t = e && e.__esModule ? function () {
            return e.default
        } : function () {
            return e
        };
        return a.d(t, "a", t), t
    }, a.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, a.p = "/", a(a.s = 213)
}({
    213: function (e, t, a) {
        e.exports = a(214)
    },
    214: function (e, t) {
        ! function () {
            "use strict";
            Charts.init();
            var e = function (e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "line",
                        a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    a = Chart.helpers.merge({
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
                                    var a = t.datasets[e.datasetIndex].label || "",
                                        r = e.yLabel,
                                        n = "";
                                    return 1 < t.datasets.length && (n += '<span class="popover-body-label mr-auto">' + a + "</span>"), n + '<span class="popover-body-value">$' + r + "k</span>"
                                }
                            }
                        }
                    }, a);
                    var r = {
                        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                        datasets: [{
                            label: "Performance",
                            data: [0, 10, 5, 15, 10, 20, 15, 25, 20, 30, 25, 40]
                        }]
                    };
                    Charts.create(e, t, a, r)
                },
                t = function (e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "roundedBar",
                        a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    a = Chart.helpers.merge({
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
                                    var a = t.datasets[e.datasetIndex].label || "",
                                        r = e.yLabel,
                                        n = "";
                                    return 1 < t.datasets.length && (n += '<span class="popover-body-label mr-auto">' + a + "</span>"), n + '<span class="popover-body-value">$' + r + "k</span>"
                                }
                            }
                        }
                    }, a);
                    var r = {
                        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                        datasets: [{
                            label: "Sales",
                            data: [25, 20, 30, 22, 17, 10, 18, 26, 28, 26, 20, 32],
                            barPercentage: .5,
                            barThickness: 20
                        }]
                    };
                    Charts.create(e, t, a, r)
                };
            e("#performanceChart"), e("#performanceAreaChart", "line", {
                    elements: {
                        line: {
                            fill: "start",
                            backgroundColor: settings.charts.colors.area
                        }
                    }
                }), t("#ordersChart"), t("#ordersChartSwitch"),
                function (e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "doughnut",
                        a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    a = Chart.helpers.merge({
                        tooltips: {
                            callbacks: {
                                title: function (e, t) {
                                    return t.labels[e[0].index]
                                },
                                label: function (e, t) {
                                    return "" + '<span class="popover-body-value">' + t.datasets[0].data[e.index] + "%</span>"
                                }
                            }
                        }
                    }, a);
                    var r = {
                        labels: ["Desktop", "Tablet", "Mobile"],
                        datasets: [{
                            data: [60, 25, 15],
                            backgroundColor: [settings.colors.primary[700], settings.colors.success[300], settings.colors.success[100]],
                            hoverBorderColor: "dark" == settings.charts.colorScheme ? settings.colors.gray[800] : settings.colors.white
                        }]
                    };
                    Charts.create(e, t, a, r)
                }("#devicesChart"), $('[data-toggle="chart"]:checked').each((function (e, t) {
                    Charts.add($(t))
                }))
        }()
    }
});