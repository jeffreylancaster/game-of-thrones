// from jason davies: https://www.jasondavies.com/maps/rotate/

! function() {
    function t(t, n, e) {
        var a = t.translate(),
            o = Math.atan2(n[1] - a[1], n[0] - a[0]) - Math.atan2(e[1] - a[1], e[0] - a[0]);
        return [Math.cos(o / 2), 0, 0, Math.sin(o / 2)]
    }

    function n(t, n) {
        var e = t.invert(n);
        return e && isFinite(e[0]) && isFinite(e[1]) && i(e)
    }

    function e(t) {
        var n = .5 * t[0] * d,
            e = .5 * t[1] * d,
            a = .5 * t[2] * d,
            o = Math.sin(n),
            r = Math.cos(n),
            c = Math.sin(e),
            i = Math.cos(e),
            s = Math.sin(a),
            l = Math.cos(a);
        return [r * i * l + o * c * s, o * i * l - r * c * s, r * c * l + o * i * s, r * i * s - o * c * l]
    }

    function a(t, n) {
        var e = t[0],
            a = t[1],
            o = t[2],
            r = t[3],
            c = n[0],
            i = n[1],
            s = n[2],
            l = n[3];
        return [e * c - a * i - o * s - r * l, e * i + a * c + o * l - r * s, e * s - a * l + o * c + r * i, e * l + a * s - o * i + r * c]
    }

    function o(t, n) {
        if (t && n) {
            var e = l(t, n),
                a = Math.sqrt(s(e, e)),
                o = .5 * Math.acos(Math.max(-1, Math.min(1, s(t, n)))),
                r = Math.sin(o) / a;
            return a && [Math.cos(o), e[2] * r, -e[1] * r, e[0] * r]
        }
    }

    function r(t, n) {
        var e = Math.max(-1, Math.min(1, s(t, n))),
            a = 0 > e ? -1 : 1,
            o = Math.acos(a * e),
            r = Math.sin(o);
        return r ? function(e) {
            var c = a * Math.sin((1 - e) * o) / r,
                i = Math.sin(e * o) / r;
            return [t[0] * c + n[0] * i, t[1] * c + n[1] * i, t[2] * c + n[2] * i, t[3] * c + n[3] * i]
        } : function() {
            return t
        }
    }

    function c(t) {
        return [Math.atan2(2 * (t[0] * t[1] + t[2] * t[3]), 1 - 2 * (t[1] * t[1] + t[2] * t[2])) * h, Math.asin(Math.max(-1, Math.min(1, 2 * (t[0] * t[2] - t[3] * t[1])))) * h, Math.atan2(2 * (t[0] * t[3] + t[1] * t[2]), 1 - 2 * (t[2] * t[2] + t[3] * t[3])) * h]
    }

    function i(t) {
        var n = t[0] * d,
            e = t[1] * d,
            a = Math.cos(e);
        return [a * Math.cos(n), a * Math.sin(n), Math.sin(e)]
    }

    function s(t, n) {
        for (var e = 0, a = t.length, o = 0; a > e; ++e) o += t[e] * n[e];
        return o
    }

    function l(t, n) {
        return [t[1] * n[2] - t[2] * n[1], t[2] * n[0] - t[0] * n[2], t[0] * n[1] - t[1] * n[0]]
    }

    function u(t) {
        for (var n = 0, e = arguments.length, a = []; ++n < e;) a.push(arguments[n]);
        var o = d3.dispatch.apply(null, a);
        return o.of = function(n, e) {
            return function(a) {
                try {
                    var r = a.sourceEvent = d3.event;
                    a.target = t, d3.event = a, o[a.type].apply(n, e)
                } finally {
                    d3.event = r
                }
            }
        }, o
    }
    var d = Math.PI / 180,
        h = 180 / Math.PI;
    d3.geo.zoom = function() {
        function s(t) {
            v++ || t({
                type: "zoomstart"
            })
        }

        function l(t) {
            t({
                type: "zoom"
            })
        }

        function d(t) {
            --v || t({
                type: "zoomend"
            })
        }
        var h, f, p, v = 0,
            g = u(m, "zoomstart", "zoom", "zoomend"),
            m = d3.behavior.zoom().on("zoomstart", function() {
                var r = d3.mouse(this),
                    i = e(h.rotate()),
                    u = n(h, r);
                u && (p = u), M.call(m, "zoom", function() {
                    h.scale(z.k = d3.event.scale);
                    var e = d3.mouse(this),
                        s = o(p, n(h, e));
                    h.rotate(z.r = c(i = s ? a(i, s) : a(t(h, r, e), i))), r = e, l(g.of(this, arguments))
                }), s(g.of(this, arguments))
            }).on("zoomend", function() {
                M.call(m, "zoom", null), d(g.of(this, arguments))
            }),
            M = m.on,
            z = {
                r: [0, 0, 0],
                k: 1
            };
        return m.rotateTo = function(t) {
            var n = o(i(t), i([-z.r[0], -z.r[1]]));
            return c(a(e(z.r), n))
        }, m.projection = function(t) {
            return arguments.length ? (h = t, z = {
                r: h.rotate(),
                k: h.scale()
            }, m.scale(z.k)) : h
        }, m.duration = function(t) {
            return arguments.length ? (f = t, m) : f
        }, m.event = function(t) {
            t.each(function() {
                var t = d3.select(this),
                    n = g.of(this, arguments),
                    a = z,
                    o = d3.transition(t);
                if (o !== t) {
                    o.each("start.zoom", function() {
                        this.__chart__ && (z = this.__chart__), h.rotate(z.r).scale(z.k), s(n)
                    }).tween("zoom:zoom", function() {
                        var t = m.size()[0],
                            i = r(e(z.r), e(a.r)),
                            s = d3.geo.distance(z.r, a.r),
                            u = d3.interpolateZoom([0, 0, t / z.k], [s, 0, t / a.k]);
                        return f && o.duration(f(.001 * u.duration)),
                            function(e) {
                                var a = u(e);
                                this.__chart__ = z = {
                                    r: c(i(a[0] / s)),
                                    k: t / a[2]
                                }, h.rotate(z.r).scale(z.k), m.scale(z.k), l(n)
                            }
                    }).each("end.zoom", function() {
                        d(n)
                    });
                    try {
                        o.each("interrupt.zoom", function() {
                            d(n)
                        })
                    } catch (i) {}
                } else this.__chart__ = z, s(n), l(n), d(n)
            })
        }, d3.rebind(m, g, "on")
    }
}(),
function() {
    function t(t, n, e) {
        var a = n.projection();
        t.append("path").datum(d3.geo.graticule()).attr("class", "graticule").attr("d", n), t.append("path").datum({
            type: "Sphere"
        }).attr("class", "foreground").attr("d", n)
        /*.on("mousedown.grab", function() {
            var n;
            e && (n = t.insert("path", ".foreground").datum({
                type: "Point",
                coordinates: a.invert(d3.mouse(this))
            }).attr("class", "point").attr("d", o));
            var o = d3.select(this).classed("zooming", !0),
                r = d3.select(window).on("mouseup.grab", function() {
                    o.classed("zooming", !1), r.on("mouseup.grab", null), e && n.remove()
                })
        })*/
    }

    function n(t, n) {
        return d3.geo.orthographic().precision(.5).clipAngle(90).clipExtent([
            [-1, -1],
            [t + 1, n + 1]
        ]).translate([t / 2, n / 2]).scale(t / 2 - 10).rotate([0, -30])
    }
    var e = 180 / Math.PI,
        a = 600, //width
        o = 600, //height
        r = d3.dispatch("world"),
        c = -1;
    d3.selectAll("#geoMap").data([n(a, o).scale(245).translate([a / 2, .56 * o]).translate([a / 2, o / 2]).scale(250).rotate([0, -30])]).append("svg").attr("width", a).attr("height", o).each(function(n) {
            var e = d3.geo.path().projection(n),
                a = d3.select(this).call(t, e, !0);
            a.selectAll(".foreground").call(d3.geo.zoom().projection(n).scaleExtent([.7 * n.scale(), 10 * n.scale()]).on("zoom.redraw", function() {
                d3.event.sourceEvent.preventDefault && d3.event.sourceEvent.preventDefault(), a.selectAll("path").attr("d", e)
            })), r.on("world." + ++c, function() {
                a.selectAll("path").attr("d", e)
            })
        }),
        function() {
            function e() {
                d.selectAll("path").attr("d", l)
            }
            var a = 350,
                o = 350,
                c = n(a, o),
                i = n(a, o),
                s = d3.geo.path().projection(c),
                l = d3.geo.path().projection(i),
                u = d3.select("#comparison").append("svg").attr("width", a).attr("height", o).call(t, s, !0);
            u.selectAll(".foreground").call(d3.behavior.drag().origin(function() {
                var t = c.rotate();
                return {
                    x: t[0],
                    y: -t[1]
                }
            }).on("drag", function() {
                c.rotate([d3.event.x, -d3.event.y]), u.selectAll("path").attr("d", s)
            }));
            var d = d3.select("#comparison").append("svg").attr("width", a).attr("height", o).call(t, l, !0);
            d.selectAll(".foreground").call(d3.geo.zoom().projection(i).on("zoom", e)), r.on("world.comparison0", function() {
                u.selectAll("path").attr("d", s)
            }), r.on("world.comparison1", e)
        }(),d3.json("../data/lands-of-ice-and-fire.json", function(t, n) {
            d3.selectAll("svg").insert("path", ".foreground").datum(topojson.feature(n, n.objects.land)).attr("class", "land"),
            d3.selectAll("svg").insert("path", ".foreground").datum(topojson.mesh(n, n.objects.countries)).attr("class", "mesh"),
            d3.selectAll("svg").insert("path", ".foreground").datum(topojson.feature(n, n.objects.places)).attr("class", "point"),
            r.world()
        })
}();