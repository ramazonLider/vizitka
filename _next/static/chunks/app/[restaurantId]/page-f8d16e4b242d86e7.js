(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [331],
  {
    2390: function (e, t, o) {
      "use strict";
      var n = o(5809),
        r = { "text/plain": "Text", "text/html": "Url", default: "Text" };
      function format(e) {
        var t = (/mac os x/i.test(navigator.userAgent) ? "⌘" : "Ctrl") + "+C";
        return e.replace(/#{\s*key\s*}/g, t);
      }
      function copy(e, t) {
        var o,
          i,
          a,
          c,
          s,
          l,
          d = !1;
        t || (t = {}), (o = t.debug || !1);
        try {
          if (
            ((a = n()),
            (c = document.createRange()),
            (s = document.getSelection()),
            ((l = document.createElement("span")).textContent = e),
            (l.ariaHidden = "true"),
            (l.style.all = "unset"),
            (l.style.position = "fixed"),
            (l.style.top = 0),
            (l.style.clip = "rect(0, 0, 0, 0)"),
            (l.style.whiteSpace = "pre"),
            (l.style.webkitUserSelect = "text"),
            (l.style.MozUserSelect = "text"),
            (l.style.msUserSelect = "text"),
            (l.style.userSelect = "text"),
            l.addEventListener("copy", function (n) {
              if ((n.stopPropagation(), t.format)) {
                if ((n.preventDefault(), void 0 === n.clipboardData)) {
                  o && console.warn("unable to use e.clipboardData"),
                    o && console.warn("trying IE specific stuff"),
                    window.clipboardData.clearData();
                  var i = r[t.format] || r.default;
                  window.clipboardData.setData(i, e);
                } else
                  n.clipboardData.clearData(),
                    n.clipboardData.setData(t.format, e);
              }
              t.onCopy && (n.preventDefault(), t.onCopy(n.clipboardData));
            }),
            document.body.appendChild(l),
            c.selectNodeContents(l),
            s.addRange(c),
            !document.execCommand("copy"))
          )
            throw Error("copy command was unsuccessful");
          d = !0;
        } catch (n) {
          o && console.error("unable to copy using execCommand: ", n),
            o && console.warn("trying IE specific stuff");
          try {
            window.clipboardData.setData(t.format || "text", e),
              t.onCopy && t.onCopy(window.clipboardData),
              (d = !0);
          } catch (n) {
            o && console.error("unable to copy using clipboardData: ", n),
              o && console.error("falling back to prompt"),
              (i = format(
                "message" in t ? t.message : "Copy to clipboard: #{key}, Enter"
              )),
              window.prompt(i, e);
          }
        } finally {
          s &&
            ("function" == typeof s.removeRange
              ? s.removeRange(c)
              : s.removeAllRanges()),
            l && document.body.removeChild(l),
            a();
        }
        return d;
      }
      e.exports = copy;
    },
    7509: function (e, t, o) {
      Promise.resolve().then(o.bind(o, 2270)),
        Promise.resolve().then(o.bind(o, 3562));
    },
    5667: function (e, t, o) {
      "use strict";
      o.d(t, {
        R: function () {
          return getDictionary;
        },
      });
      let n = {
          en: () =>
            o
              .e(421)
              .then(o.t.bind(o, 7421, 19))
              .then((e) => e.default),
          ru: () =>
            o
              .e(923)
              .then(o.t.bind(o, 9923, 19))
              .then((e) => e.default),
          uz: () =>
            o
              .e(278)
              .then(o.t.bind(o, 7278, 19))
              .then((e) => e.default),
        },
        getDictionary = async (e) =>
          "uz" === e ? n.uz() : "en" === e ? n.en() : n.ru();
    },
    2270: function (e, t, o) {
      "use strict";
      o.r(t),
        o.d(t, {
          default: function () {
            return AllLinks;
          },
        });
      var n = o(7437),
        r = o(504),
        i = o(6800),
        a = o(1396),
        c = o.n(a),
        s = o(62),
        l = o(2896),
        d = o(3286),
        u = o(6691),
        p = o.n(u);
      function AllLinks(e) {
        let { restaurant: t, params: o } = e,
          a = {
            menu: i.dRe,
            phone: i.j1w,
            location: i.opg,
            telegram: s.Uv8,
            instagram: s.Zzi,
            facebook: s.neY,
            website: l.g4A,
            youtube: s.opf,
          };
        return (0, n.jsxs)("div", {
          className: "bg-white p-4 flex flex-col gap-4 pb-20 min-h-[100%]",
          children: [
            t.data.links.map((e) =>
              (0, n.jsx)(
                "div",
                {
                  children:
                    "title" !== e.type.id
                      ? (0, n.jsx)(c(), {
                          href: e.link,
                          children: (0, n.jsxs)("div", {
                            className: "".concat(
                              e.type.id,
                              "-bg-color flex items-center gap-2 bg-[#D24089] py-2 px-4 rounded-[10px] h-[60px] hover:opacity-[0.8]"
                            ),
                            children: [
                              (0, n.jsx)(r.G, {
                                icon: a[e.type.id] || i.dRe,
                                size: "xl",
                                color: "#fff",
                                className: "w-[40px]",
                              }),
                              (0, n.jsxs)("div", {
                                children: [
                                  (0, n.jsx)("p", {
                                    className: "font-bold text-[#fff]",
                                    children: e.name,
                                  }),
                                  (0, n.jsx)("p", {
                                    className: "text-[12px] text-[#fff]",
                                    children: e.description,
                                  }),
                                ],
                              }),
                            ],
                          }),
                        })
                      : (0, n.jsxs)("div", {
                          children: [
                            (0, n.jsx)("div", {
                              className: "text-center font-medium text-[20px]",
                              children: e.name,
                            }),
                            (0, n.jsx)("p", {
                              className: "text-center text-[#aaa]",
                              children: e.description,
                            }),
                          ],
                        }),
                },
                e.id
              )
            ),

          ],
        });
      }
    },
    3562: function (e, t, o) {
      "use strict";
      o.r(t),
        o.d(t, {
          default: function () {
            return NavigationLinks;
          },
        });
      var n = o(7437),
        r = o(2265),
        i = o(6691),
        a = o.n(i),
        c = {
          src: "/_next/static/media/verifiedIcon.b496d6d2.svg",
          height: 48,
          width: 48,
          blurWidth: 0,
          blurHeight: 0,
        };
      let formatTimeWithoutSeconds = (e) => {
        if (!e) return "";
        let [t, o] = e.split(":"),
          n = "".concat(t, ":").concat(o);
        return n;
      };
      var s = o(504),
        l = o(1102),
        d = o(1557),
        u = {
          src: "/_next/static/media/telegram.d19f62a5.png",
          height: 512,
          width: 512,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAM1BMVEUDmeRfv+4Hm+UIp/QDn+twxvACmuUDneYCnulMaXEBofPC5/mW1fQTougwrur///+X1vRlhCiEAAAACnRSTlP8/bT/sP60Lu8ASghikgAAAAlwSFlzAAAOxAAADsQBlSsOGwAAADtJREFUeJwli0kOwCAMxEwTyJDQ5f+vrWhvlmwzY8ARk5BBKvCEq5ujsz9VaMO6F9qqVUv/Y1Pw7SPmCzcwAYaheqDyAAAAAElFTkSuQmCC",
          blurWidth: 8,
          blurHeight: 8,
        },
        p = {
          src: "/_next/static/media/facebook.943a925c.png",
          height: 512,
          width: 512,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAPFBMVEU8W5o8WJsrS49heqw7WppMaXE6WJc1VJQ8XJw7Vpc8WJU/X6E5WJrM1OSjsc9LaKRrgrHg5e98kLr4+fueqoZgAAAAC3RSTlP2Lvn+6gC0/LAvLvT9fioAAAAJcEhZcwAAPyoAAD8qAVIli8oAAAA/SURBVHicHclHDoAwDADBDbjE2CnA//+KxFwHvcwPa0pInXNJ0NPHIDv4fkcWUOueXvz1HNkJyblLAm0G1vQDSn4CCEWPJsgAAAAASUVORK5CYII=",
          blurWidth: 8,
          blurHeight: 8,
        },
        f = o(4433),
        y = o.n(f);
      o(3461);
      var h = o(6921),
        m = o(1396),
        b = o.n(m),
        x = o(6781),
        g = o(2996),
        v = o(5667);
      function ShareLink(e) {
        let { params: t, direction: o } = e,
          [i, a] = (0, r.useState)(!1),
          [c, f] = (0, r.useState)({}),
          m = (0, g.C)((e) => e.states.language);
        (0, r.useEffect)(() => {
          let fetchDictionary = async () => {
            let e = await (0, v.R)(m);
            f(e.menu);
          };
          fetchDictionary();
        }, [m]);
        let copyAndReplace = () => {
          let e = document.getElementById("buttonCopy"),
            t = document.getElementById("buttonCopied");
          (e.style.display = "none"),
            (t.style.display = "flex"),
            setTimeout(() => {
              (e.style.display = "flex"), (t.style.display = "none");
            }, 2e3);
        };
        return (0, n.jsxs)("div", {
          className: "!text-black",
          children: [
            (0, n.jsx)("span", {
              className:
                "bg-[#fff]/[0.15] rounded-[10px] h-[38px] w-[45px] flex items-center justify-center cursor-pointer",
              onClick: () => a(!0),
              children: (0, n.jsx)(s.G, {
                icon: l.A$k,
                size: "xl",
                color: "links" === o ? "#345488" : "#fff",
              }),
            }),
            (0, n.jsx)(d.Z, {
              open: i,
              onClose: () => a(!1),
              direction: "bottom",
              className:
                "rounded-tr-3xl rounded-tl-3xl absolute max-sm:!w-[100%] lg:!w-[40%] xl:!w-[25%] !m-auto",
              size: "auto",
              duration: 300,
              zIndex: 999,
              lockBackgroundScroll: !0,
              children: (0, n.jsxs)("div", {
                children: [
                  (0, n.jsxs)("div", {
                    className:
                      "flex items-center justify-between px-6 sm:px-6 mt-4",
                    children: [
                      (0, n.jsx)("span", {
                        className:
                          "text-[20px] font-bold leading-6 truncate w-[90%] text-center",
                        children: c.share,
                      }),
                      (0, n.jsx)("button", {
                        type: "button",
                        className:
                          "rounded-md text-gray-400 hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-white",
                        onClick: () => a(!1),
                        children: (0, n.jsx)(s.G, {
                          icon: l.WA2,
                          size: "2x",
                          color: "#C2A3E5",
                        }),
                      }),
                    ],
                  }),
                  (0, n.jsx)("hr", { className: "mt-4 border-[#74859E]" }),
                  (0, n.jsxs)("div", {
                    children: [
                      (0, n.jsx)(b(), {
                        href: "https://t.me/miraj_restaurant",
                        children: (0, n.jsxs)("div", {
                          className:
                            "flex items-center gap-4 border-b py-4 border-[#D0D7E1] px-6 activeLink",
                          children: [
                            (0, n.jsx)(y(), {
                              src: u,
                              width: 30,
                              height: 30,
                              layout: "fixed",
                              alt: "tg",
                            }),
                            (0, n.jsx)("span", { children: "Telegram" }),
                          ],
                        }),
                      }),
                      (0, n.jsx)(b(), {
                        href: "https://www.instagram.com/miraj_restoran_yangiyer",
                        children: (0, n.jsxs)("div", {
                          className:
                            "flex items-center gap-4 border-b py-4 border-[#D0D7E1] px-6 activeLink",
                          children: [
                            (0, n.jsx)(y(), {
                              src: p,
                              width: 30,
                              height: 30,
                              layout: "fixed",
                              alt: "tg",
                            }),
                            (0, n.jsx)("span", { children: "Instagram" }),
                          ],
                        }),
                      }),
                      (0, n.jsxs)("div", {
                        className: "mt-10 px-6 mb-12",
                        children: [
                          (0, n.jsx)(x.CopyToClipboard, {
                            text: "https://vizitka-woad.vercel.app/",
                            children: (0, n.jsx)(h.Z, {
                              btnType: "drawerTypeBg",
                              id: "buttonCopy",
                              onClick: () => copyAndReplace(),
                              children: "Копировать ссылку",
                            }),
                          }),
                          (0, n.jsx)(h.Z, {
                            btnType: "drawerType",
                            id: "buttonCopied",
                            style: { display: "none" },
                            className:
                              "flex items-center gap-1 border-[2px] border-[#1bc5bd] py-[6.2px] px-[8px] text-[#1bc5bd] font-bold rounded-[3px] cursor-pointer",
                            children: (0, n.jsxs)("span", {
                              className: "flex items-center gap-2 font-[500]",
                              children: [
                                (0, n.jsx)(s.G, {
                                  icon: l.LEp,
                                  size: "xl",
                                  color: "#671ABF",
                                }),
                                "Ссылка скопирована",
                              ],
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            }),
          ],
        });
      }
      function NavigationLinks(e) {
        var t, o, r, i, s, l, d, u, p, f;
        let { restaurant: y, params: h, dictionary: m } = e;
        return (0, n.jsxs)("div", {
          className:
            "bg-gradient-to-b from-[#671ABF] via-[#A03291] via-70% to-[#D24089] from-20% py-3 px-4 flex flex-col gap-4 justify-between !text-[#fff]",
          children: [
            (0, n.jsxs)("div", {
              className: "flex items-center justify-between",
              children: [
                (0, n.jsxs)("div", {
                  className: "flex items-center gap-3",
                  children: [
                    (0, n.jsx)(a(), {
                      src: "profile.JPG",
                      alt: y.data.alias,
                      width: 75,
                      height: 75,
                      className:
                        "rounded-[50px] border border-[#345488] p-[1px]",
                    }),
                    (0, n.jsx)("p", {
                      className: "text-[22px] font-bold inline leading-9",
                      children: (0, n.jsxs)("span", {
                        children: [
                          y.heading,
                          (0, n.jsx)(a(), {
                            src: c,
                            alt: "verified",
                            className: "inline ml-1 mt-[-2px]",
                            width: 22,
                            height: 22,
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
                (0, n.jsx)(ShareLink, { params: h }),
              ],
            }),
            y.data.profile && y.data.profile.bio
              ? (0, n.jsx)("p", {
                  className: " text-[14px] tracking-[0.02rem]",
                  children: y.data.profile.bio,
                })
              : null,
            y.data.profile &&
            (null === (t = y.data.profile) || void 0 === t
              ? void 0
              : t.weekdaysTimeFrom)
              ? (0, n.jsx)("hr", {})
              : null,
            (0, n.jsx)("div", {
              className: "flex items-center text-[14px]",
              children:
                y.data.profile &&
                (null === (o = y.data.profile) || void 0 === o
                  ? void 0
                  : o.weekdaysTimeFrom)
                  ? (0, n.jsxs)("div", {
                      className: "flex flex-col",
                      children: [
                        (0, n.jsxs)("span", {
                          children: [
                            m.weekdays,
                            formatTimeWithoutSeconds(
                              null === (r = y.data.profile) || void 0 === r
                                ? void 0
                                : r.weekdaysTimeFrom
                            ) &&
                            formatTimeWithoutSeconds(
                              null === (i = y.data.profile) || void 0 === i
                                ? void 0
                                : i.weekdaysTimeTo
                            )
                              ? " "
                                  .concat(m.from, " ")
                                  .concat(
                                    formatTimeWithoutSeconds(
                                      null === (s = y.data.profile) ||
                                        void 0 === s
                                        ? void 0
                                        : s.weekdaysTimeFrom
                                    ),
                                    " "
                                  )
                                  .concat(m.to, " ")
                                  .concat(
                                    formatTimeWithoutSeconds(
                                      null === (l = y.data.profile) ||
                                        void 0 === l
                                        ? void 0
                                        : l.weekdaysTimeTo
                                    )
                                  )
                              : "",
                          ],
                        }),
                        (0, n.jsxs)("span", {
                          children: [
                            m.weekend,
                            formatTimeWithoutSeconds(
                              null === (d = y.data.profile) || void 0 === d
                                ? void 0
                                : d.weekendsTimeFrom
                            ) &&
                            formatTimeWithoutSeconds(
                              null === (u = y.data.profile) || void 0 === u
                                ? void 0
                                : u.weekendsTimeTo
                            )
                              ? " "
                                  .concat(m.from, " ")
                                  .concat(
                                    formatTimeWithoutSeconds(
                                      null === (p = y.data.profile) ||
                                        void 0 === p
                                        ? void 0
                                        : p.weekendsTimeFrom
                                    ),
                                    " "
                                  )
                                  .concat(m.to, " ")
                                  .concat(
                                    formatTimeWithoutSeconds(
                                      null === (f = y.data.profile) ||
                                        void 0 === f
                                        ? void 0
                                        : f.weekendsTimeTo
                                    )
                                  )
                              : "",
                          ],
                        }),
                      ],
                    })
                  : "",
            }),
          ],
        });
      }
    },
    6921: function (e, t, o) {
      "use strict";
      o.d(t, {
        Z: function () {
          return Button;
        },
      });
      var n = o(7437),
        r = o(2404),
        i = o.n(r);
      function Button(e) {
        return (0, n.jsx)(
          "button",
          {
            disabled: e.disabled,
            className: [i().Button, i()[e.btnType]].join(" "),
            onClick: e.onClick,
            style: e.style,
            type: e.type,
            id: e.id,
            name: e.name,
            value: e.value,
            children: e.children,
          },
          e.keys
        );
      }
    },
    2996: function (e, t, o) {
      "use strict";
      o.d(t, {
        C: function () {
          return r;
        },
        T: function () {
          return useAppDispatch;
        },
      });
      var n = o(3198);
      let useAppDispatch = () => (0, n.I0)(),
        r = n.v9;
    },
    2404: function (e) {
      e.exports = {
        Button: "button_Button__5GTRp",
        signIn: "button_signIn__loNGK",
        addCart: "button_addCart__toXQF",
        existCart: "button_existCart__hKTfe",
        goToCart: "button_goToCart__189oQ",
        buy: "button_buy__hbx0w",
        foodeeLogin: "button_foodeeLogin__7tX9G",
        foodeeSend: "button_foodeeSend__uwjxG",
        homeFirstButton: "button_homeFirstButton___ecdj",
        homeSecondButton: "button_homeSecondButton__zgavE",
        drawerType: "button_drawerType__HdPSF",
        drawerTypeBg: "button_drawerTypeBg__HnHpc",
      };
    },
    3286: function (e, t) {
      "use strict";
      t.Z = {
        src: "/_next/static/media/foodee-logo-purple.7c04fc7b.svg",
        height: 26,
        width: 119,
        blurWidth: 0,
        blurHeight: 0,
      };
    },
    2303: function (e, t, o) {
      "use strict";
      function _typeof(e) {
        return (_typeof =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.CopyToClipboard = void 0);
      var n = _interopRequireDefault(o(2265)),
        r = _interopRequireDefault(o(2390)),
        i = ["text", "onCopy", "options", "children"];
      function _interopRequireDefault(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function ownKeys(e, t) {
        var o = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            o.push.apply(o, n);
        }
        return o;
      }
      function _objectSpread(e) {
        for (var t = 1; t < arguments.length; t++) {
          var o = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? ownKeys(Object(o), !0).forEach(function (t) {
                _defineProperty(e, t, o[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(o))
            : ownKeys(Object(o)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(o, t)
                );
              });
        }
        return e;
      }
      function _objectWithoutProperties(e, t) {
        if (null == e) return {};
        var o,
          n,
          r = _objectWithoutPropertiesLoose(e, t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          for (n = 0; n < i.length; n++)
            (o = i[n]),
              !(t.indexOf(o) >= 0) &&
                Object.prototype.propertyIsEnumerable.call(e, o) &&
                (r[o] = e[o]);
        }
        return r;
      }
      function _objectWithoutPropertiesLoose(e, t) {
        if (null == e) return {};
        var o,
          n,
          r = {},
          i = Object.keys(e);
        for (n = 0; n < i.length; n++)
          (o = i[n]), t.indexOf(o) >= 0 || (r[o] = e[o]);
        return r;
      }
      function _classCallCheck(e, t) {
        if (!(e instanceof t))
          throw TypeError("Cannot call a class as a function");
      }
      function _defineProperties(e, t) {
        for (var o = 0; o < t.length; o++) {
          var n = t[o];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n);
        }
      }
      function _createClass(e, t, o) {
        return (
          t && _defineProperties(e.prototype, t),
          o && _defineProperties(e, o),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          e
        );
      }
      function _inherits(e, t) {
        if ("function" != typeof t && null !== t)
          throw TypeError("Super expression must either be null or a function");
        (e.prototype = Object.create(t && t.prototype, {
          constructor: { value: e, writable: !0, configurable: !0 },
        })),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          t && _setPrototypeOf(e, t);
      }
      function _setPrototypeOf(e, t) {
        return (_setPrototypeOf =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function _createSuper(e) {
        var t = _isNativeReflectConstruct();
        return function () {
          var o,
            n = _getPrototypeOf(e);
          if (t) {
            var r = _getPrototypeOf(this).constructor;
            o = Reflect.construct(n, arguments, r);
          } else o = n.apply(this, arguments);
          return _possibleConstructorReturn(this, o);
        };
      }
      function _possibleConstructorReturn(e, t) {
        if (t && ("object" === _typeof(t) || "function" == typeof t)) return t;
        if (void 0 !== t)
          throw TypeError(
            "Derived constructors may only return object or undefined"
          );
        return _assertThisInitialized(e);
      }
      function _assertThisInitialized(e) {
        if (void 0 === e)
          throw ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function _isNativeReflectConstruct() {
        if (
          "undefined" == typeof Reflect ||
          !Reflect.construct ||
          Reflect.construct.sham
        )
          return !1;
        if ("function" == typeof Proxy) return !0;
        try {
          return (
            Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], function () {})
            ),
            !0
          );
        } catch (e) {
          return !1;
        }
      }
      function _getPrototypeOf(e) {
        return (_getPrototypeOf = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function _defineProperty(e, t, o) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: o,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = o),
          e
        );
      }
      var a = (function (e) {
        _inherits(CopyToClipboard, e);
        var t = _createSuper(CopyToClipboard);
        function CopyToClipboard() {
          var e;
          _classCallCheck(this, CopyToClipboard);
          for (var o = arguments.length, i = Array(o), a = 0; a < o; a++)
            i[a] = arguments[a];
          return (
            _defineProperty(
              _assertThisInitialized((e = t.call.apply(t, [this].concat(i)))),
              "onClick",
              function (t) {
                var o = e.props,
                  i = o.text,
                  a = o.onCopy,
                  c = o.children,
                  s = o.options,
                  l = n.default.Children.only(c),
                  d = (0, r.default)(i, s);
                a && a(i, d),
                  l &&
                    l.props &&
                    "function" == typeof l.props.onClick &&
                    l.props.onClick(t);
              }
            ),
            e
          );
        }
        return (
          _createClass(CopyToClipboard, [
            {
              key: "render",
              value: function () {
                var e = this.props,
                  t = (e.text, e.onCopy, e.options, e.children),
                  o = _objectWithoutProperties(e, i),
                  r = n.default.Children.only(t);
                return n.default.cloneElement(
                  r,
                  _objectSpread(
                    _objectSpread({}, o),
                    {},
                    { onClick: this.onClick }
                  )
                );
              },
            },
          ]),
          CopyToClipboard
        );
      })(n.default.PureComponent);
      (t.CopyToClipboard = a),
        _defineProperty(a, "defaultProps", { onCopy: void 0, options: void 0 });
    },
    6781: function (e, t, o) {
      "use strict";
      var n = o(2303).CopyToClipboard;
      (n.CopyToClipboard = n), (e.exports = n);
    },
    5809: function (e) {
      e.exports = function () {
        var e = document.getSelection();
        if (!e.rangeCount) return function () {};
        for (
          var t = document.activeElement, o = [], n = 0;
          n < e.rangeCount;
          n++
        )
          o.push(e.getRangeAt(n));
        switch (t.tagName.toUpperCase()) {
          case "INPUT":
          case "TEXTAREA":
            t.blur();
            break;
          default:
            t = null;
        }
        return (
          e.removeAllRanges(),
          function () {
            "Caret" === e.type && e.removeAllRanges(),
              e.rangeCount ||
                o.forEach(function (t) {
                  e.addRange(t);
                }),
              t && t.focus();
          }
        );
      };
    },
  },
  function (e) {
    e.O(0, [511, 159, 85, 958, 306, 789, 971, 472, 744], function () {
      return e((e.s = 7509));
    }),
      (_N_E = e.O());
  },
]);
