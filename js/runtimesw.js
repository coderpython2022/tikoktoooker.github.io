!function() {
    "use strict";
    function t(t, e, r, n) {
        return new (r || (r = Promise))((function(i, o) {
            function s(t) {
                try {
                    a(n.next(t))
                } catch (t) {
                    o(t)
                }
            }
            function c(t) {
                try {
                    a(n.throw(t))
                } catch (t) {
                    o(t)
                }
            }
            function a(t) {
                var e;
                t.done ? i(t.value) : (e = t.value,
                e instanceof r ? e : new r((function(t) {
                    t(e)
                }
                ))).then(s, c)
            }
            a((n = n.apply(t, e || [])).next())
        }
        ))
    }
    var e = "main_thread"
      , r = "service_worker"
      , n = "general_fetch"
      , i = "ready_for_msg"
      , o = "force_update_sw"
      , s = "__PNS_RUNTIME_SW_EVENT__"
      , c = "__PNS_RUNTIME_SE_ERROR__"
      , a = "__PNS_SW_CACHE_KEY__"
      , l = function(t) {
        if (t)
            try {
                return new URL(t)
            } catch (t) {
                return
            }
    };
    function u(t, e) {
        try {
            var r, n = new URL(e);
            return null !== (r = null == n ? void 0 : n.searchParams.get(t)) && void 0 !== r ? r : function(t, e) {
                var r = new RegExp("[?&]" + encodeURIComponent(e).replace(/[.*+\-?^${}()|[\]\\]/g, "\\$&") + "=([^&#]*)").exec(t);
                return r ? decodeURIComponent(r[1]) : null
            }(n.search, t)
        } catch (t) {
            return null
        }
    }
    function h(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var r = 0, n = new Array(e); r < e; r++)
            n[r] = t[r];
        return n
    }
    function f(t) {
        return function(t) {
            if (Array.isArray(t))
                return h(t)
        }(t) || function(t) {
            if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"])
                return Array.from(t)
        }(t) || function(t, e) {
            if (!t)
                return;
            if ("string" == typeof t)
                return h(t, e);
            var r = Object.prototype.toString.call(t).slice(8, -1);
            "Object" === r && t.constructor && (r = t.constructor.name);
            if ("Map" === r || "Set" === r)
                return Array.from(r);
            if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
                return h(t, e)
        }(t) || function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }
    var d = ["log", "error", "warn"];
    function p(t) {
        var e = {}
          , r = !0
          , n = !1
          , i = void 0;
        try {
            for (var o, s = function() {
                var r = o.value;
                e[r] = function() {
                    for (var e = arguments.length, n = new Array(e), i = 0; i < e; i++)
                        n[i] = arguments[i];
                    var o;
                    t() && (o = console)[r].apply(o, f(n))
                }
            }, c = d[Symbol.iterator](); !(r = (o = c.next()).done); r = !0)
                s()
        } catch (t) {
            n = !0,
            i = t
        } finally {
            try {
                r || null == c.return || c.return()
            } finally {
                if (n)
                    throw i
            }
        }
        return e
    }
    var y = p((function() {
        return !1
    }
    ));
    function m(t, e, r, n, i, o, s) {
        try {
            var c = t[o](s)
              , a = c.value
        } catch (t) {
            return void r(t)
        }
        c.done ? e(a) : Promise.resolve(a).then(n, i)
    }
    function v(t, e) {
        return null != e && "undefined" != typeof Symbol && e[Symbol.hasInstance] ? !!e[Symbol.hasInstance](t) : t instanceof e
    }
    function g(t, e) {
        var r, n, i, o, s = {
            label: 0,
            sent: function() {
                if (1 & i[0])
                    throw i[1];
                return i[1]
            },
            trys: [],
            ops: []
        };
        return o = {
            next: c(0),
            throw: c(1),
            return: c(2)
        },
        "function" == typeof Symbol && (o[Symbol.iterator] = function() {
            return this
        }
        ),
        o;
        function c(o) {
            return function(c) {
                return function(o) {
                    if (r)
                        throw new TypeError("Generator is already executing.");
                    for (; s; )
                        try {
                            if (r = 1,
                            n && (i = 2 & o[0] ? n.return : o[0] ? n.throw || ((i = n.return) && i.call(n),
                            0) : n.next) && !(i = i.call(n, o[1])).done)
                                return i;
                            switch (n = 0,
                            i && (o = [2 & o[0], i.value]),
                            o[0]) {
                            case 0:
                            case 1:
                                i = o;
                                break;
                            case 4:
                                return s.label++,
                                {
                                    value: o[1],
                                    done: !1
                                };
                            case 5:
                                s.label++,
                                n = o[1],
                                o = [0];
                                continue;
                            case 7:
                                o = s.ops.pop(),
                                s.trys.pop();
                                continue;
                            default:
                                if (!(i = s.trys,
                                (i = i.length > 0 && i[i.length - 1]) || 6 !== o[0] && 2 !== o[0])) {
                                    s = 0;
                                    continue
                                }
                                if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                    s.label = o[1];
                                    break
                                }
                                if (6 === o[0] && s.label < i[1]) {
                                    s.label = i[1],
                                    i = o;
                                    break
                                }
                                if (i && s.label < i[2]) {
                                    s.label = i[2],
                                    s.ops.push(o);
                                    break
                                }
                                i[2] && s.ops.pop(),
                                s.trys.pop();
                                continue
                            }
                            o = e.call(t, s)
                        } catch (t) {
                            o = [6, t],
                            n = 0
                        } finally {
                            r = i = 0
                        }
                    if (5 & o[0])
                        throw o[1];
                    return {
                        value: o[0] ? o[1] : void 0,
                        done: !0
                    }
                }([o, c])
            }
        }
    }
    p((function() {
        return !1
    }
    )),
    p((function() {
        return !0
    }
    ));
    var b = {
        ruleName: "default_rule",
        urlPattern: ["*"],
        replace: {
            "http:": "https:",
            "https://unpkg.byted-static.com/": "https://sf-unpkg.tiktokcdn.com/obj/unpkg-va/",
            "https://s1-imfile.feishucdn.com/": "https://staff-profile.tiktokcdn.com/",
            "https://s16-imfile-sg.feishucdn.com/": "https://staff-profile.tiktokcdn.com/",
            "https://s3-imfile.feishucdn.com/": "https://staff-profile.tiktokcdn.com/",
            "https://pan16.larksuitecdn.com/": "https://staff-profile.tiktokcdn.com/",
            "https://sf16-short-sg.bytegoofy.com/": "https://sf-static.tiktokcdn.com/obj/goofy-sg/",
            "https://mon.zijieapi.com": "https://mon.tiktokv.com",
            "https://verify.snssdk.com": "https://verification-va.byteoversea.com",
            "https://vcs.snssdk.com": "https://vcs-va.byteoversea.com"
        }
    }
      , _ = ["127.0.0.1", "localhost"]
      , w = ["is_test_only=1", "slardar_heatmap"];
    var k, R, E = "0", S = new RegExp("(cookie|auth|jwt|token|key|ticket|secret|credential|session|^accept$|^content-type$|password|^sec-|^user-agent$)","i"), T = new RegExp("(bearer|session)","i"), x = function(t) {
        var e = {};
        return t.forEach((function(t, r) {
            (function(t, e) {
                return !(!t || !e) && (S.test(t) || T.test(e))
            }
            )(r, t) || (e[r] = t)
        }
        )),
        e
    }, j = function(t) {
        var e = {};
        return t.forEach((function(t, r) {
            var n;
            v(t, File) ? Reflect.set(e, r, "file") : v(t, Blob) ? Reflect.set(e, r, "blob") : Reflect.set(e, r, void 0 === t ? "undefined" : (n = t) && "undefined" != typeof Symbol && n.constructor === Symbol ? "symbol" : typeof n)
        }
        )),
        e
    }, P = (k = function(t, e, r) {
        var n, i, o, s, c, a, l, u, h, f, d, p, y, m, v, b, _;
        return g(this, (function(g) {
            switch (g.label) {
            case 0:
                n = t.url,
                i = t.referrer,
                o = t.headers,
                s = t.method,
                c = t._NETWORK_INTERCEPTED,
                a = x(o),
                l = o.get("Content-Type") || "",
                u = "",
                h = "",
                f = "";
                try {
                    if (d = new URL(n),
                    r(d.hostname))
                        return [2];
                    u = d.search,
                    h = d.host,
                    f = d.pathname
                } catch (t) {
                    console.error(t)
                }
                p = {},
                g.label = 1;
            case 1:
                return g.trys.push([1, 8, , 9]),
                y = t.clone(),
                ["POST", "PUT"].includes(s) ? l.includes("application/json") ? [4, y.json()] : [3, 3] : [3, 7];
            case 2:
                return p = g.sent(),
                [3, 7];
            case 3:
                return l.includes("application/x-www-form-urlencoded") ? [4, y.text()] : [3, 5];
            case 4:
                return m = g.sent(),
                v = new URLSearchParams(m),
                p = function(t) {
                    var e = {};
                    return t.forEach((function(t, r) {
                        Reflect.set(e, r, t)
                    }
                    )),
                    e
                }(v),
                [3, 7];
            case 5:
                return l.includes("multipart/form-data") ? [4, y.formData()] : [3, 7];
            case 6:
                b = g.sent(),
                p = j(b),
                g.label = 7;
            case 7:
                return [3, 9];
            case 8:
                return g.sent(),
                [3, 9];
            case 9:
                return _ = {
                    request_url: n,
                    request_host: h,
                    request_path: f,
                    header_names: Array.from(o.keys()).join(","),
                    header_map: a,
                    referrer: i,
                    search: u,
                    body: p,
                    method: s,
                    contentType: l,
                    source: e
                },
                c && (_.rule_name = c.rule_name,
                _["x-pns-".concat(c.mode)] = 1),
                [2, _]
            }
        }
        ))
    }
    ,
    R = function() {
        var t = this
          , e = arguments;
        return new Promise((function(r, n) {
            var i = k.apply(t, e);
            function o(t) {
                m(i, r, n, o, s, "next", t)
            }
            function s(t) {
                m(i, r, n, o, s, "throw", t)
            }
            o(void 0)
        }
        ))
    }
    ,
    function(t, e, r) {
        return R.apply(this, arguments)
    }
    );
    const C = (e, r) => t(void 0, void 0, void 0, (function*() {
        const n = yield caches.open("pns_runtime_resource");
        ( (e, r) => {
            t(void 0, void 0, void 0, (function*() {
                const {url: t} = r
                  , n = u(a, t)
                  , i = yield e.keys();
                for (const t of i) {
                    const {url: r} = t;
                    n === u(a, r) && e.delete(t)
                }
            }
            ))
        }
        )(n, e),
        yield n.put(e, r)
    }
    ));
    function N(e) {
        const {request: r} = e
          , {url: n, method: i} = r;
        "GET" === i.toUpperCase() && "1" === u("__PNS_SW_CACHE__", n) && e.respondWith((e => t(void 0, void 0, void 0, (function*() {
            const t = yield caches.match(e);
            if (t)
                return t;
            const r = yield fetch(e);
            return C(e, r.clone()),
            r
        }
        )))(r))
    }
    function W(t, e) {
        if (Array.isArray(t) && Array.isArray(e)) {
            if (t.length !== e.length)
                return !1;
            for (let r = 0; r < t.length; r++) {
                const n = t[r]
                  , i = e[r];
                if ("object" == typeof n && "object" == typeof i) {
                    if (!W(n, i))
                        return !1
                } else if (n !== i)
                    return !1
            }
            return !0
        }
        {
            const r = Object.keys(t)
              , n = Object.keys(e);
            if (r.length !== n.length)
                return !1;
            for (const n of r) {
                const r = t[n]
                  , i = e[n];
                if ("object" == typeof r && "object" == typeof i) {
                    if (!W(r, i))
                        return !1
                } else if (r !== i)
                    return !1
            }
            return !0
        }
    }
    class A {
        constructor(t) {
            this._size = t,
            this.map = new Map,
            this.arr = []
        }
        get size() {
            return this.map.size
        }
        has(t) {
            return this.map.has(t)
        }
        get(t) {
            return this.sortKeyWithPriority(t),
            this.map.get(t)
        }
        set(t, e) {
            if (this.map.size >= this._size) {
                const t = this.arr.shift();
                void 0 !== t && this.map.delete(t)
            }
            return this.sortKeyWithPriority(t),
            this.map.set(t, e),
            this
        }
        delete(t) {
            const e = this.map.delete(t)
              , r = this.arr.indexOf(t);
            return -1 !== r && this.arr.splice(r, 1),
            e
        }
        clear() {
            this.map.clear(),
            this.arr = []
        }
        sortKeyWithPriority(t) {
            const e = this.arr.indexOf(t);
            -1 !== e && this.arr.splice(e, 1),
            this.arr.push(t)
        }
    }
    const O = "error_client";
    const M = new class {
        constructor() {
            this.clientReadyStatus = new A(20),
            this.pendingReports = new A(20)
        }
        flush(e) {
            return t(this, void 0, void 0, (function*() {
                const t = this.getClientId(e);
                this.clientReadyStatus.set(t, !0);
                const r = [];
                this.pendingReports.has(t) && (r.push(...this.pendingReports.get(t)),
                this.pendingReports.delete(t)),
                this.pendingReports.has(O) && (r.push(...this.pendingReports.get(O)),
                this.pendingReports.delete(O)),
                r.forEach((t => this.report(e, t)))
            }
            ))
        }
        report(e, r) {
            return t(this, void 0, void 0, (function*() {
                const t = this.getClientId(e);
                if (this.clientReadyStatus.get(t))
                    this.doReport(e, r);
                else if (this.clientReadyStatus.has(t) || (this.clientReadyStatus.set(t, !1),
                setTimeout(( () => {
                    this.flush(t)
                }
                ), 2e4)),
                this.pendingReports.has(t)) {
                    const e = this.pendingReports.get(t);
                    e.length > 100 && e.shift(),
                    e.push(r)
                } else
                    this.pendingReports.set(t, [r])
            }
            ))
        }
        getClientId(t) {
            return "string" == typeof t ? t : t.id
        }
        doReport(e, n) {
            return t(this, void 0, void 0, (function*() {
                let t;
                if (t = "string" == typeof e ? yield self.clients.get(e) : e,
                t)
                    try {
                        n instanceof Error ? (n.sw_version = "0.0.0",
                        t.postMessage({
                            event: c,
                            error: n
                        })) : t.postMessage({
                            event: s,
                            data: Object.assign(Object.assign({}, n), {
                                source: r,
                                sw_version: "0.0.0"
                            })
                        })
                    } catch (t) {
                        y.error("RuntimeMonitor fail to post message", t.message)
                    }
            }
            ))
        }
    }
    ;
    const I = new class {
        constructor() {
            this.fetchEventHandlers = []
        }
        emitFetchEvent(e) {
            const {request: r, clientId: n} = e;
            if (!n)
                return;
            let i = !1;
            const o = () => i = !0
              , s = e => t(this, void 0, void 0, (function*() {
                return yield M.report(n, e)
            }
            ));
            for (const t of this.fetchEventHandlers)
                try {
                    t({
                        request: r,
                        blockRequest: o,
                        sendToMainThread: s
                    })
                } catch (t) {
                    y.error("[RuntimeWorker] handler error", t),
                    M.report(n, t)
                }
            i ? e.respondWith(null) : N(e)
        }
        onFetch(t) {
            this.fetchEventHandlers.includes(t) || this.fetchEventHandlers.push(t)
        }
    }
      , U = ["mon-va.byteoversea.com"];
    var q = Object.freeze({
        __proto__: null,
        generalReportPlugin: () => ({
            name: "GeneralReportPlugin",
            setup: e => {
                e.onFetch(( ({request: e, sendToMainThread: r}) => t(void 0, void 0, void 0, (function*() {
                    const t = yield P(e, E, (t => U.some((e => t.endsWith(e)))));
                    r({
                        eventName: n,
                        eventDetail: t
                    })
                }
                ))))
            }
        })
    });
    const F = "http:"
      , H = "https:"
      , L = F.length
      , z = t => t.startsWith(F)
      , K = t => `https:${t.substring(L)}`;
    var $;
    const D = null !== ($ = "https://sf16-website-login.neutral.ttwstatic.com/obj/tiktok_web_login_static/tiktok_privacy_protection_framework/config/network.json") ? $ : "https://sf16-website-login.neutral.ttwstatic.com/obj/tiktok_web_login_static/tiktok_privacy_protection_framework/config/network.json";
    const B = new class {
        constructor() {
            this.rules = [b],
            this.clientRuleMap = new A(20),
            this.clientUrlMap = new A(20),
            this.timer = null,
            ( () => {
                const t = self.fetch;
                self.fetch = function(e, r) {
                    let n = "";
                    if ("string" == typeof e)
                        n = z(e) ? K(e) : e;
                    else if (e instanceof URL)
                        e.protocol === F && (e.protocol = H),
                        n = e;
                    else {
                        const {url: t, cache: r, credentials: i, headers: o, integrity: s, method: c, mode: a, redirect: l, referrer: u, referrerPolicy: h, body: f} = e;
                        n = z(t) ? new Request(K(t),{
                            cache: r,
                            credentials: i,
                            headers: o,
                            integrity: s,
                            method: c,
                            mode: a,
                            redirect: l,
                            referrer: u,
                            referrerPolicy: h,
                            body: f
                        }) : e
                    }
                    return t(n, r)
                }
            }
            )(),
            this.init()
        }
        intercept(t) {
            const {clientId: e} = t
              , r = this.clientUrlMap.has(e);
            let n, i = this.clientUrlMap.get(e);
            if (!i && (self.clients.get(e).then((t => {
                if (!t)
                    return;
                const e = l(t.url);
                e && this.clientUrlMap.set(t.id, e)
            }
            )),
            i = l(t.request.referrer),
            !i && !t.request.url.startsWith("http:")))
                return;
            if (this.clientRuleMap.has(e) ? n = this.clientRuleMap.get(e) : (n = this.getFirstMatchedRule(i),
            n && r && this.clientRuleMap.set(e, n)),
            !n)
                return;
            const {ruleName: o, replace: s, allowlist: c, blocklist: a, enableSameOriginBlock: u, addReplaceHeader: h} = n
              , {request: f} = t;
            let d = f.url;
            if (function(t, e) {
                var r = l(e);
                if (r) {
                    var n = r.search;
                    if (n)
                        for (var i = 0; i < w.length; i++)
                            if (-1 !== n.indexOf(w[i]))
                                return !0
                }
                var o = l(t);
                return !(!o || -1 === _.indexOf(o.hostname))
            }(d, i))
                return;
            let p = !1;
            if (s && (d = function(t, e) {
                var r = t
                  , n = Object.keys(e)
                  , i = !0
                  , o = !1
                  , s = void 0;
                try {
                    for (var c, a = n[Symbol.iterator](); !(i = (c = a.next()).done); i = !0) {
                        var l = c.value;
                        if (r.startsWith(l)) {
                            r = e[l] + t.substring(l.length);
                            break
                        }
                    }
                } catch (t) {
                    o = !0,
                    s = t
                } finally {
                    try {
                        i || null == a.return || a.return()
                    } finally {
                        if (o)
                            throw s
                    }
                }
                return r
            }(d, s)),
            (a || c) && (p = function(t, e) {
                var r = e.blocklist
                  , n = e.allowlist
                  , i = e.enableSameOriginBlock;
                if (r) {
                    var o = t.startsWith(location.origin)
                      , s = !0
                      , c = !1
                      , a = void 0;
                    try {
                        for (var l, u = r[Symbol.iterator](); !(s = (l = u.next()).done); s = !0) {
                            var h = l.value;
                            if (t.startsWith(h) && (!o || i && o))
                                return !0
                        }
                    } catch (t) {
                        c = !0,
                        a = t
                    } finally {
                        try {
                            s || null == u.return || u.return()
                        } finally {
                            if (c)
                                throw a
                        }
                    }
                }
                if (n && n.length > 0) {
                    var f = !1
                      , d = !0
                      , p = !1
                      , y = void 0;
                    try {
                        for (var m, v = n[Symbol.iterator](); !(d = (m = v.next()).done); d = !0) {
                            var g = m.value;
                            t.startsWith(g) && (f = !0)
                        }
                    } catch (t) {
                        p = !0,
                        y = t
                    } finally {
                        try {
                            d || null == v.return || v.return()
                        } finally {
                            if (p)
                                throw y
                        }
                    }
                    if (!f)
                        return !0
                }
                return !1
            }(d, {
                allowlist: c,
                blocklist: a,
                enableSameOriginBlock: u,
                origin: i ? i.origin : ""
            })),
            p) {
                const e = {
                    rule_name: o,
                    mode: "block",
                    hit_url: f.url,
                    source: E
                };
                return t.respondWith(new Response("request blocked",{
                    status: 410,
                    statusText: "cross border request is not allowed",
                    headers: {
                        "x-pns-blocked": "1"
                    }
                })),
                void (f._NETWORK_INTERCEPTED = e)
            }
            if (d !== f.url) {
                const e = {
                    rule_name: o,
                    mode: "replace",
                    hit_url: f.url,
                    source: E
                }
                  , {cache: r, credentials: n, headers: i, integrity: s, method: c, mode: a, redirect: l, referrer: u, referrerPolicy: p, body: y} = f
                  , m = new Request(d,{
                    cache: r,
                    credentials: n,
                    headers: i,
                    integrity: s,
                    method: c,
                    mode: a,
                    redirect: l,
                    referrer: u,
                    referrerPolicy: p,
                    body: y
                });
                return h ? t.respondWith(fetch(m).then((t => {
                    const e = t.clone()
                      , r = new Headers(e.headers);
                    return r.set("x-pns-replaced", "1"),
                    new Response(e.body,{
                        status: e.status,
                        statusText: e.statusText,
                        headers: r
                    })
                }
                ))) : t.respondWith(fetch(m)),
                void (f._NETWORK_INTERCEPTED = e)
            }
        }
        getFirstMatchedRule(t) {
            return t ? function(t, e) {
                var r = "string" == typeof t ? l(t) : t;
                if (!r)
                    return b;
                var n = "".concat(r.origin).concat(r.pathname)
                  , i = !0
                  , o = !1
                  , s = void 0;
                try {
                    for (var c, a = e[Symbol.iterator](); !(i = (c = a.next()).done); i = !0) {
                        var u = c.value;
                        if (u.urlPattern.some((function(t) {
                            return "*" === t || -1 !== n.indexOf(t)
                        }
                        )))
                            return u
                    }
                } catch (t) {
                    o = !0,
                    s = t
                } finally {
                    try {
                        i || null == a.return || a.return()
                    } finally {
                        if (o)
                            throw s
                    }
                }
            }(t, this.rules) : b
        }
        init() {
            return t(this, void 0, void 0, (function*() {
                try {
                    yield this.updateNetworkConfigFromCache(),
                    yield this.fetchAndCacheNetworkConfig()
                } catch (t) {
                    M.report(O, t)
                }
            }
            ))
        }
        fetchAndCacheNetworkConfig() {
            return t(this, void 0, void 0, (function*() {
                const t = new Error("fail to get latest config")
                  , e = yield fetch(D).catch(( () => {
                    throw t
                }
                ));
                if (200 !== e.status)
                    throw t;
                try {
                    (yield caches.open("pns-network-config")).put(D, e.clone())
                } catch (t) {}
                const r = yield e.clone().json();
                Array.isArray(r) && !W(r, this.rules) && (this.rules = r,
                this.clientRuleMap.clear()),
                this.timer && clearTimeout(this.timer),
                this.timer = setTimeout(( () => this.fetchAndCacheNetworkConfig()), 6e5)
            }
            ))
        }
        updateNetworkConfigFromCache() {
            return new Promise((e => {
                caches.match(D).then((r => t(this, void 0, void 0, (function*() {
                    if (r) {
                        const t = yield r.clone().json();
                        Array.isArray(t) && (this.rules = t)
                    }
                    e()
                }
                )))).catch(( () => {
                    e()
                }
                ))
            }
            ))
        }
    }
    ;
    Object.values(q).forEach((t => {
        t().setup(I)
    }
    )),
    self.addEventListener("fetch", (t => {
        null == B || B.intercept(t),
        I.emitFetchEvent(t)
    }
    )),
    self.addEventListener("activate", (t => {
        t.waitUntil(self.clients.claim().catch((t => {
            console.error(t)
        }
        )))
    }
    )),
    self.addEventListener("message", (t => {
        if (!t.data)
            return;
        const {data: r} = t;
        if (r.source === e && r.eventName === i) {
            const e = t.source;
            M.flush(e)
        }
        r.source === e && r.eventName === o && self.skipWaiting()
    }
    ))
}();
