/*
Template Name: Color Admin - Responsive Admin Dashboard Template build with Twitter Bootstrap 4
Version: 4.3.0
Author: Sean Ngu
Website: http://www.seantheme.com/color-admin-v4.3/admin/
*/ var floatSubMenuTimeout,
    targetFloatMenu,
    handleSlimScroll = function () {
        "use strict";
        $.when(
            $("[data-scrollbar=true]").each(function () {
                generateSlimScroll($(this));
            })
        ).done(function () {
            $('[data-scrollbar="true"]').mouseover();
        });
    },
    generateSlimScroll = function (e) {
        if (!$(e).attr("data-init")) {
            var a = $(e).attr("data-height"),
                t = { height: (a = a || $(e).height()) };
            /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ? ($(e).css("height", a), $(e).css("overflow-x", "scroll")) : $(e).slimScroll(t), $(e).attr("data-init", !0), $(".slimScrollBar").hide();
        }
    },
    handleSidebarMenu = function () {
        "use strict";
        var t = $(".sidebar").attr("data-disable-slide-animation") ? 0 : 250;
        $(".sidebar .nav > .has-sub > a").click(function () {
            var a = $(this).next(".sub-menu"),
                e = $(".sidebar .nav > li.has-sub > .sub-menu").not(a);
            0 === $(".page-sidebar-minified").length &&
                ($(e).closest("li").addClass("closing"),
                $(e).slideUp(t, function () {
                    $(e).closest("li").addClass("closed").removeClass("expand closing");
                }),
                $(a).is(":visible") ? $(a).closest("li").addClass("closing").removeClass("expand") : $(a).closest("li").addClass("expanding").removeClass("closed"),
                $(a).slideToggle(t, function () {
                    var e = $(this).closest("li");
                    $(a).is(":visible") ? ($(e).addClass("expand"), $(e).removeClass("closed")) : ($(e).addClass("closed"), $(e).removeClass("expand")), $(e).removeClass("expanding closing");
                }));
        }),
            $(".sidebar .nav > .has-sub .sub-menu li.has-sub > a").click(function () {
                if (0 === $(".page-sidebar-minified").length) {
                    var a = $(this).next(".sub-menu");
                    $(a).is(":visible") ? $(a).closest("li").addClass("closing").removeClass("expand") : $(a).closest("li").addClass("expanding").removeClass("closed"),
                        $(a).slideToggle(t, function () {
                            var e = $(this).closest("li");
                            $(a).is(":visible") ? ($(e).addClass("expand"), $(e).removeClass("closed")) : ($(e).addClass("closed"), $(e).removeClass("expand")), $(e).removeClass("expanding closing");
                        });
                }
            });
    },
    handleMobileSidebarToggle = function () {
        var n = !1;
        $(".sidebar").bind("click touchstart", function (e) {
            0 !== $(e.target).closest(".sidebar").length ? (n = !0) : ((n = !1), e.stopPropagation());
        }),
            $(document).bind("click touchstart", function (e) {
                0 === $(e.target).closest(".sidebar").length && (n = !1),
                    0 !== $(e.target).closest("#float-sub-menu").length && (n = !0),
                    e.isPropagationStopped() ||
                        !0 === n ||
                        ($("#page-container").hasClass("page-sidebar-toggled") && ((n = !0), $("#page-container").removeClass("page-sidebar-toggled")),
                        $(window).width() <= 767 && $("#page-container").hasClass("page-right-sidebar-toggled") && ((n = !0), $("#page-container").removeClass("page-right-sidebar-toggled")));
            }),
            $("[data-click=right-sidebar-toggled]").click(function (e) {
                e.stopPropagation();
                var a = "#page-container",
                    t = "page-right-sidebar-collapsed";
                (t = $(window).width() < 979 ? "page-right-sidebar-toggled" : t),
                    $(a).hasClass(t) ? $(a).removeClass(t) : !0 !== n ? $(a).addClass(t) : (n = !1),
                    $(window).width() < 480 && $("#page-container").removeClass("page-sidebar-toggled"),
                    $(window).trigger("resize");
            }),
            $("[data-click=sidebar-toggled]").click(function (e) {
                e.stopPropagation();
                var a = "page-sidebar-toggled",
                    t = "#page-container";
                $(t).hasClass(a) ? $(t).removeClass(a) : !0 !== n ? $(t).addClass(a) : (n = !1), $(window).width() < 480 && $("#page-container").removeClass("page-right-sidebar-toggled");
            });
    },
    handleSidebarMinify = function () {
        $(document).on("click", "[data-click=sidebar-minify]", function (e) {
            e.preventDefault();
            var a = "page-sidebar-minified",
                t = "#page-container";
            $(t).hasClass(a)
                ? $(t).removeClass(a)
                : ($(t).addClass(a),
                  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) &&
                      ($('#sidebar [data-scrollbar="true"]').css("margin-top", "0"), $('#sidebar [data-scrollbar="true"]').css("overflow-x", "scroll"))),
                $(window).trigger("resize");
        });
    },
    handlePageContentView = function () {
        "use strict";
        var e = "",
            a = "",
            t = handleCheckBootstrapVersion();
        3 <= t && t < 4 ? ((e = "hide"), (a = "in")) : 4 <= t && t < 5 && ((e = "d-none"), (a = "show")),
            $(window).on("load", function () {
                $.when($("#page-loader").addClass(e)).done(function () {
                    $("#page-container").addClass(a);
                });
            });
    },
    panelActionRunning = !1,
    handlePanelAction = function () {
        "use strict";
        if (panelActionRunning) return !1;
        (panelActionRunning = !0),
            $(document).on("hover", "[data-click=panel-remove]", function (e) {
                $(this).attr("data-init") || ($(this).tooltip({ title: "Remove", placement: "bottom", trigger: "hover", container: "body" }), $(this).tooltip("show"), $(this).attr("data-init", !0));
            }),
            $(document).on("click", "[data-click=panel-remove]", function (e) {
                e.preventDefault();
                var a = handleCheckBootstrapVersion();
                4 <= a && a < 5 ? $(this).tooltip("dispose") : $(this).tooltip("destroy"), $(this).closest(".panel").remove();
            }),
            $(document).on("hover", "[data-click=panel-collapse]", function (e) {
                $(this).attr("data-init") || ($(this).tooltip({ title: "Collapse / Expand", placement: "bottom", trigger: "hover", container: "body" }), $(this).tooltip("show"), $(this).attr("data-init", !0));
            }),
            $(document).on("click", "[data-click=panel-collapse]", function (e) {
                e.preventDefault(), $(this).closest(".panel").find(".panel-body").slideToggle();
            }),
            $(document).on("hover", "[data-click=panel-reload]", function (e) {
                $(this).attr("data-init") || ($(this).tooltip({ title: "Reload", placement: "bottom", trigger: "hover", container: "body" }), $(this).tooltip("show"), $(this).attr("data-init", !0));
            }),
            $(document).on("click", "[data-click=panel-reload]", function (e) {
                e.preventDefault();
                var a = $(this).closest(".panel");
                if (!$(a).hasClass("panel-loading")) {
                    var t = $(a).find(".panel-body");
                    $(a).addClass("panel-loading"),
                        $(t).prepend('<div class="panel-loader"><span class="spinner-small"></span></div>'),
                        setTimeout(function () {
                            $(a).removeClass("panel-loading"), $(a).find(".panel-loader").remove();
                        }, 2e3);
                }
            }),
            $(document).on("hover", "[data-click=panel-expand]", function (e) {
                $(this).attr("data-init") || ($(this).tooltip({ title: "Expand / Compress", placement: "bottom", trigger: "hover", container: "body" }), $(this).tooltip("show"), $(this).attr("data-init", !0));
            }),
            $(document).on("click", "[data-click=panel-expand]", function (e) {
                e.preventDefault();
                var a = $(this).closest(".panel"),
                    t = $(a).find(".panel-body"),
                    n = 40;
                if (0 !== $(t).length) {
                    var o = $(a).offset().top;
                    n = $(t).offset().top - o;
                }
                if ($("body").hasClass("panel-expand") && $(a).hasClass("panel-expand")) $("body, .panel").removeClass("panel-expand"), $(".panel").removeAttr("style"), $(t).removeAttr("style");
                else if (($("body").addClass("panel-expand"), $(this).closest(".panel").addClass("panel-expand"), 0 !== $(t).length && 40 != n)) {
                    var i = 40;
                    $(a)
                        .find(" > *")
                        .each(function () {
                            var e = $(this).attr("class");
                            "panel-heading" != e && "panel-body" != e && (i += $(this).height() + 30);
                        }),
                        40 != i && $(t).css("top", i + "px");
                }
                $(window).trigger("resize");
            });
    },
    handleDraggablePanel = function () {
        "use strict";
        var e = $('.panel:not([data-sortable="false"])').parent("[class*=col]");
        $(e).sortable({
            handle: ".panel-heading",
            connectWith: ".row > [class*=col]",
            stop: function (e, a) {
                a.item.find(".panel-title").append('<i class="fa fa-refresh fa-spin m-l-5" data-id="title-spinner"></i>'), handleSavePanelPosition(a.item);
            },
        });
    },
    handelTooltipPopoverActivation = function () {
        "use strict";
        0 !== $('[data-toggle="tooltip"]').length && $("[data-toggle=tooltip]").tooltip(), 0 !== $('[data-toggle="popover"]').length && $("[data-toggle=popover]").popover();
    },
    handleScrollToTopButton = function () {
        "use strict";
        var e = handleCheckBootstrapVersion(),
            a = "";
        3 <= e && e < 4 ? (a = "in") : 4 <= e && e < 5 && (a = "show"),
            $(document).scroll(function () {
                200 <= $(document).scrollTop() ? $("[data-click=scroll-top]").addClass(a) : $("[data-click=scroll-top]").removeClass(a);
            }),
            $("[data-click=scroll-top]").click(function (e) {
                e.preventDefault(), $("html, body").animate({ scrollTop: $("body").offset().top }, 500);
            });
    },
    handleThemePageStructureControl = function () {
        if (
            ($(document).on("click", ".theme-list [data-theme]", function () {
                var e = $(this).attr("data-theme-file");
                $("#theme").attr("href", e), $(".theme-list [data-theme]").not(this).closest("li").removeClass("active"), $(this).closest("li").addClass("active"), Cookies.set("theme", $(this).attr("data-theme"));
            }),
            Cookies && Cookies.get("theme") && 0 !== $(".theme-list [data-theme]").length && $('.theme-list [data-theme="' + Cookies.get("theme") + '"]').trigger("click"),
            $(document).on("change", ".theme-panel [name=header-styling]", function () {
                var e = 1 == $(this).val() ? "navbar-default" : "navbar-inverse",
                    a = 1 == $(this).val() ? "navbar-inverse" : "navbar-default";
                $("#header").removeClass(a).addClass(e), Cookies.set("header-styling", $(this).val());
            }),
            Cookies && Cookies.get("header-styling"))
        ) {
            var e = '.theme-panel [name="header-styling"]';
            0 !== $(e).length && ($(e + ' option[value="' + Cookies.get("header-styling") + '"]').prop("selected", !0), $(e).trigger("change"));
        }
        if (
            ($(document).on("change", ".theme-panel [name=sidebar-styling]", function () {
                2 == $(this).val() ? $("#sidebar").addClass("sidebar-grid") : $("#sidebar").removeClass("sidebar-grid"), Cookies.set("sidebar-styling", $(this).val());
            }),
            Cookies && Cookies.get("sidebar-styling"))
        ) {
            e = '.theme-panel [name="sidebar-styling"]';
            0 !== $(e).length && ($(e + ' option[value="' + Cookies.get("sidebar-styling") + '"]').prop("selected", !0), $(e).trigger("change"));
        }
        if (
            ($(document).on("change", ".theme-panel [name=content-gradient]", function () {
                2 == $(this).val() ? $("#page-container").addClass("gradient-enabled") : $("#page-container").removeClass("gradient-enabled"), Cookies.set("content-gradient", $(this).val());
            }),
            Cookies && Cookies.get("content-gradient"))
        ) {
            e = '.theme-panel [name="content-gradient"]';
            0 !== $(e).length && ($(e + ' option[value="' + Cookies.get("content-gradient") + '"]').prop("selected", !0), $(e).trigger("change"));
        }
        if (
            ($(document).on("change", ".theme-panel [name=content-styling]", function () {
                2 == $(this).val() ? $("body").addClass("flat-black") : $("body").removeClass("flat-black"), Cookies.set("content-styling", $(this).val());
            }),
            Cookies && Cookies.get("content-styling"))
        ) {
            e = '.theme-panel [name="content-styling"]';
            0 !== $(e).length && ($(e + ' option[value="' + Cookies.get("content-styling") + '"]').prop("selected", !0), $(e).trigger("change"));
        }
        if (
            ($(document).on("change", ".theme-panel [name=direction]", function () {
                2 == $(this).val() ? $("body").addClass("rtl-mode") : $("body").removeClass("rtl-mode"), Cookies.set("direction", $(this).val());
            }),
            Cookies && Cookies.get("direction"))
        ) {
            e = '.theme-panel [name="direction"]';
            0 !== $(e).length && ($(e + ' option[value="' + Cookies.get("direction") + '"]').prop("selected", !0), $(e).trigger("change"));
        }
        $(document).on("change", ".theme-panel [name=sidebar-fixed]", function () {
            1 == $(this).val()
                ? (2 == $(".theme-panel [name=header-fixed]").val() &&
                      (alert("Default Header with Fixed Sidebar option is not supported. Proceed with Fixed Header with Fixed Sidebar."),
                      $('.theme-panel [name=header-fixed] option[value="1"]').prop("selected", !0),
                      $("#page-container").addClass("page-header-fixed")),
                  $("#page-container").addClass("page-sidebar-fixed"),
                  $("#page-container").hasClass("page-sidebar-minified") || generateSlimScroll($('.sidebar [data-scrollbar="true"]')))
                : ($("#page-container").removeClass("page-sidebar-fixed"),
                  0 !== $(".sidebar .slimScrollDiv").length &&
                      ($(window).width() <= 979
                          ? $(".sidebar").each(function () {
                                if (!$("#page-container").hasClass("page-with-two-sidebar") || !$(this).hasClass("sidebar-right")) {
                                    $(this).find(".slimScrollBar").remove(), $(this).find(".slimScrollRail").remove(), $(this).find('[data-scrollbar="true"]').removeAttr("style");
                                    var e = $(this).find('[data-scrollbar="true"]').parent(),
                                        a = $(e).html();
                                    $(e).replaceWith(a);
                                }
                            })
                          : 979 < $(window).width() &&
                            ($('.sidebar [data-scrollbar="true"]').slimScroll({ destroy: !0 }), $('.sidebar [data-scrollbar="true"]').removeAttr("style"), $('.sidebar [data-scrollbar="true"]').removeAttr("data-init"))),
                  0 === $("#page-container .sidebar-bg").length && $("#page-container").append('<div class="sidebar-bg"></div>'));
        }),
            $(document).on("change", ".theme-panel [name=header-fixed]", function () {
                1 == $(this).val()
                    ? ($("#header").addClass("navbar-fixed-top"), $("#page-container").addClass("page-header-fixed"), Cookies.set("header-fixed", !0))
                    : (1 == $(".theme-panel [name=sidebar-fixed]").val() &&
                          (alert("Default Header with Fixed Sidebar option is not supported. Proceed with Default Header with Default Sidebar."),
                          $('.theme-panel [name=sidebar-fixed] option[value="2"]').prop("selected", !0),
                          $(".theme-panel [name=sidebar-fixed]").trigger("change"),
                          0 === $("#page-container .sidebar-bg").length && $("#page-container").append('<div class="sidebar-bg"></div>')),
                      $("#header").removeClass("navbar-fixed-top"),
                      $("#page-container").removeClass("page-header-fixed"),
                      Cookies.set("header-fixed", !1));
            });
    },
    handleThemePanelExpand = function () {
        $(document).on("click", '[data-click="theme-panel-expand"]', function () {
            var e = ".theme-panel",
                a = "active";
            $(e).hasClass(a) ? $(e).removeClass(a) : $(e).addClass(a);
        });
    },
    handleAfterPageLoadAddClass = function () {
        0 !== $("[data-pageload-addclass]").length &&
            $(window).on("load", function () {
                $("[data-pageload-addclass]").each(function () {
                    var e = $(this).attr("data-pageload-addclass");
                    $(this).addClass(e);
                });
            });
    },
    handleSavePanelPosition = function (a) {
        "use strict";
        if (0 !== $(".ui-sortable").length) {
            var t = [];
            $.when(
                $(".ui-sortable").each(function () {
                    var e = $(this).find("[data-sortable-id]");
                    if (0 !== e.length) {
                        var a = [];
                        $(e).each(function () {
                            var e = $(this).attr("data-sortable-id");
                            a.push({ id: e });
                        }),
                            t.push(a);
                    } else t.push([]);
                    0;
                })
            ).done(function () {
                var e = window.location.href;
                (e = (e = e.split("?"))[0]),
                    localStorage.setItem(e, JSON.stringify(t)),
                    $(a)
                        .find('[data-id="title-spinner"]')
                        .delay(500)
                        .fadeOut(500, function () {
                            $(this).remove();
                        });
            });
        }
    },
    handleLocalStorage = function () {
        "use strict";
        try {
            if ("undefined" != typeof Storage && "undefined" != typeof localStorage) {
                var e = window.location.href;
                e = (e = e.split("?"))[0];
                var a = localStorage.getItem(e);
                if (a) {
                    a = JSON.parse(a);
                    var t = 0;
                    $.when(
                        $('.panel:not([data-sortable="false"])')
                            .parent('[class*="col-"]')
                            .each(function () {
                                var e = a[t],
                                    o = $(this);
                                e &&
                                    $.each(e, function (e, a) {
                                        var t = $('[data-sortable-id="' + a.id + '"]').not('[data-init="true"]');
                                        if (0 !== $(t).length) {
                                            var n = $(t).clone();
                                            $(t).remove(), $(o).append(n), $('[data-sortable-id="' + a.id + '"]').attr("data-init", "true");
                                        }
                                    }),
                                    t++;
                            })
                    ).done(function () {
                        window.dispatchEvent(new CustomEvent("localstorage-position-loaded"));
                    });
                }
            } else alert("Your browser is not supported with the local storage");
        } catch (e) {
            console.log(e);
        }
    },
    handleResetLocalStorage = function () {
        "use strict";
        $(document).on("click", "[data-click=reset-local-storage]", function (e) {
            e.preventDefault();
            $("body").append(
                '<div class="modal fade" data-modal-id="reset-local-storage-confirmation">    <div class="modal-dialog">        <div class="modal-content">            <div class="modal-header">                <h4 class="modal-title"><i class="fa fa-redo m-r-5"></i> Reset Local Storage Confirmation</h4>                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>            </div>            <div class="modal-body">                <div class="alert alert-info m-b-0">Would you like to RESET all your saved widgets and clear Local Storage?</div>            </div>            <div class="modal-footer">                <a href="javascript:;" class="btn btn-sm btn-default" data-dismiss="modal"><i class="fa fa-times"></i> No</a>                <a href="javascript:;" class="btn btn-sm btn-inverse" data-click="confirm-reset-local-storage"><i class="fa fa-check"></i> Yes</a>            </div>        </div>    </div></div>'
            ),
                $('[data-modal-id="reset-local-storage-confirmation"]').modal("show");
        }),
            $(document).on("hidden.bs.modal", '[data-modal-id="reset-local-storage-confirmation"]', function (e) {
                $('[data-modal-id="reset-local-storage-confirmation"]').remove();
            }),
            $(document).on("click", "[data-click=confirm-reset-local-storage]", function (e) {
                e.preventDefault();
                var a = window.location.href;
                (a = (a = a.split("?"))[0]), localStorage.removeItem(a), location.reload();
            });
    },
    handleIEFullHeightContent = function () {
        0 < window.navigator.userAgent.indexOf("MSIE ") &&
            $('.vertical-box-row [data-scrollbar="true"][data-height="100%"]').each(function () {
                var e = $(this).closest(".vertical-box-row"),
                    a = $(e).height();
                $(e).find(".vertical-box-cell").height(a);
            });
    },
    handleUnlimitedTabsRender = function () {
        function a(e, a) {
            var t = $(e).closest(".tab-overflow"),
                n = $("body").hasClass("rtl-mode") ? "margin-right" : "margin-left",
                o = parseInt($(t).find(".nav.nav-tabs").css(n)),
                i = $(t).width(),
                s = 0,
                l = 0;
            switch (
                ($(t)
                    .find("li")
                    .each(function () {
                        $(this).hasClass("next-button") || $(this).hasClass("prev-button") || (s += $(this).width());
                    }),
                a)
            ) {
                case "next":
                    (r = s + o - i) <= i
                        ? ((l = r - o),
                          setTimeout(function () {
                              $(t).removeClass("overflow-right");
                          }, 150))
                        : (l = i - o - 80),
                        0 !== l &&
                            ($("body").hasClass("rtl-mode")
                                ? $(t)
                                      .find(".nav.nav-tabs")
                                      .animate({ marginRight: "-" + l + "px" }, 150, function () {
                                          $(t).addClass("overflow-left");
                                      })
                                : $(t)
                                      .find(".nav.nav-tabs")
                                      .animate({ marginLeft: "-" + l + "px" }, 150, function () {
                                          $(t).addClass("overflow-left");
                                      }));
                    break;
                case "prev":
                    var r;
                    (l = (r = -o) <= i ? ($(t).removeClass("overflow-left"), 0) : r - i + 80),
                        $("body").hasClass("rtl-mode")
                            ? $(t)
                                  .find(".nav.nav-tabs")
                                  .animate({ marginRight: "-" + l + "px" }, 150, function () {
                                      $(t).addClass("overflow-right");
                                  })
                            : $(t)
                                  .find(".nav.nav-tabs")
                                  .animate({ marginLeft: "-" + l + "px" }, 150, function () {
                                      $(t).addClass("overflow-right");
                                  });
            }
        }
        function e() {
            $(".tab-overflow").each(function () {
                !(function (e, a) {
                    var t = "li.active";
                    $(e).find("li").first().hasClass("nav-item") && (t = $(e).find(".nav-item .active").closest("li"));
                    var n = $("body").hasClass("rtl-mode") ? "margin-right" : "margin-left",
                        o = (parseInt($(e).css(n)), $(e).width()),
                        i = $(e).find(t).width(),
                        s = -1 < a ? a : 150,
                        l = 0;
                    if (
                        ($(e)
                            .find(t)
                            .prevAll()
                            .each(function () {
                                i += $(this).width();
                            }),
                        $(e)
                            .find("li")
                            .each(function () {
                                l += $(this).width();
                            }),
                        o <= i)
                    ) {
                        var r = i - o;
                        l != i && (r += 40),
                            $("body").hasClass("rtl-mode")
                                ? $(e)
                                      .find(".nav.nav-tabs")
                                      .animate({ marginRight: "-" + r + "px" }, s)
                                : $(e)
                                      .find(".nav.nav-tabs")
                                      .animate({ marginLeft: "-" + r + "px" }, s);
                    }
                    i != l && o <= l ? $(e).addClass("overflow-right") : $(e).removeClass("overflow-right"), o <= i && o <= l ? $(e).addClass("overflow-left") : $(e).removeClass("overflow-left");
                })(this, 0);
            });
        }
        $('[data-click="next-tab"]').click(function (e) {
            e.preventDefault(), a(this, "next");
        }),
            $('[data-click="prev-tab"]').click(function (e) {
                e.preventDefault(), a(this, "prev");
            }),
            $(window).resize(function () {
                $(".tab-overflow .nav.nav-tabs").removeAttr("style"), e();
            }),
            e();
    },
    handleUnlimitedTopMenuRender = function () {
        "use strict";
        function a(e, a) {
            var t = $(e).closest(".nav"),
                n = $("body").hasClass("rtl-mode") ? "margin-right" : "margin-left",
                o = parseInt($(t).css(n)),
                i = $(".top-menu").width() - 88,
                s = 0,
                l = 0;
            switch (
                ($(t)
                    .find("li")
                    .each(function () {
                        $(this).hasClass("menu-control") || (s += $(this).width());
                    }),
                a)
            ) {
                case "next":
                    (r = s + o - i) <= i
                        ? ((l = r - o + 128),
                          setTimeout(function () {
                              $(t).find(".menu-control.menu-control-right").removeClass("show");
                          }, 150))
                        : (l = i - o - 128),
                        0 !== l &&
                            ($("body").hasClass("rtl-mode")
                                ? $(t).animate({ marginRight: "-" + l + "px" }, 150, function () {
                                      $(t).find(".menu-control.menu-control-left").addClass("show");
                                  })
                                : $(t).animate({ marginLeft: "-" + l + "px" }, 150, function () {
                                      $(t).find(".menu-control.menu-control-left").addClass("show");
                                  }));
                    break;
                case "prev":
                    var r;
                    (l = (r = -o) <= i ? ($(t).find(".menu-control.menu-control-left").removeClass("show"), 0) : r - i + 88),
                        $("body").hasClass("rtl-mode")
                            ? $(t).animate({ marginRight: "-" + l + "px" }, 150, function () {
                                  $(t).find(".menu-control.menu-control-right").addClass("show");
                              })
                            : $(t).animate({ marginLeft: "-" + l + "px" }, 150, function () {
                                  $(t).find(".menu-control.menu-control-right").addClass("show");
                              });
            }
        }
        function e() {
            var e = $(".top-menu .nav"),
                a = $(".top-menu .nav > li"),
                t = $(".top-menu .nav > li.active"),
                n = $(".top-menu"),
                o = $("body").hasClass("rtl-mode") ? "margin-right" : "margin-left",
                i = (parseInt($(e).css(o)), $(n).width() - 128),
                s = $(".top-menu .nav > li.active").width(),
                l = 0;
            if (
                ($(t)
                    .prevAll()
                    .each(function () {
                        s += $(this).width();
                    }),
                $(a).each(function () {
                    $(this).hasClass("menu-control") || (l += $(this).width());
                }),
                i <= s)
            ) {
                var r = s - i + 128;
                $("body").hasClass("rtl-mode") ? $(e).animate({ marginRight: "-" + r + "px" }, 0) : $(e).animate({ marginLeft: "-" + r + "px" }, 0);
            }
            s != l && i <= l ? $(e).find(".menu-control.menu-control-right").addClass("show") : $(e).find(".menu-control.menu-control-right").removeClass("show"),
                i <= s && i <= l ? $(e).find(".menu-control.menu-control-left").addClass("show") : $(e).find(".menu-control.menu-control-left").removeClass("show");
        }
        $('[data-click="next-menu"]').click(function (e) {
            e.preventDefault(), a(this, "next");
        }),
            $('[data-click="prev-menu"]').click(function (e) {
                e.preventDefault(), a(this, "prev");
            }),
            $(window).resize(function () {
                $(".top-menu .nav").removeAttr("style"), e();
            }),
            e();
    },
    handleTopMenuSubMenu = function () {
        "use strict";
        $(".top-menu .sub-menu .has-sub > a").click(function () {
            var e = $(this).closest("li").find(".sub-menu").first(),
                a = $(this).closest("ul").find(".sub-menu").not(e);
            $(a)
                .not(e)
                .slideUp(250, function () {
                    $(this).closest("li").removeClass("expand");
                }),
                $(e).slideToggle(250, function () {
                    var e = $(this).closest("li");
                    $(e).hasClass("expand") ? $(e).removeClass("expand") : $(e).addClass("expand");
                });
        });
    },
    handleMobileTopMenuSubMenu = function () {
        "use strict";
        $(".top-menu .nav > li.has-sub > a").click(function () {
            if ($(window).width() <= 767) {
                var e = $(this).closest("li").find(".sub-menu").first(),
                    a = $(this).closest("ul").find(".sub-menu").not(e);
                $(a)
                    .not(e)
                    .slideUp(250, function () {
                        $(this).closest("li").removeClass("expand");
                    }),
                    $(e).slideToggle(250, function () {
                        var e = $(this).closest("li");
                        $(e).hasClass("expand") ? $(e).removeClass("expand") : $(e).addClass("expand");
                    });
            }
        });
    },
    handleTopMenuMobileToggle = function () {
        "use strict";
        $('[data-click="top-menu-toggled"]').click(function () {
            $(".top-menu").slideToggle(250);
        });
    },
    handleClearSidebarSelection = function () {
        $(".sidebar .nav > li, .sidebar .nav .sub-menu").removeClass("expand").removeAttr("style");
    },
    handleClearSidebarMobileSelection = function () {
        $("#page-container").removeClass("page-sidebar-toggled");
    },
    handleCheckBootstrapVersion = function () {
        return parseInt($.fn.tooltip.Constructor.VERSION);
    },
    handleCheckScrollClass = function () {
        0 < $(window).scrollTop() ? $("#page-container").addClass("has-scroll") : $("#page-container").removeClass("has-scroll");
    },
    handlePageScrollClass = function () {
        $(window).on("scroll", function () {
            handleCheckScrollClass();
        }),
            handleCheckScrollClass();
    },
    handleToggleNavProfile = function () {
        var i = $(".sidebar").attr("data-disable-slide-animation") ? 0 : 250;
        $('[data-toggle="nav-profile"]').click(function (e) {
            e.preventDefault();
            var a = $(this).closest("li"),
                t = $(".sidebar .nav.nav-profile"),
                n = "expanding",
                o = "closing";
            $(t).is(":visible") ? ($(a).removeClass("active"), $(t).removeClass(o)) : ($(a).addClass("active"), $(t).addClass(n)),
                $(t).slideToggle(i, function () {
                    $(t).is(":visible") ? ($(t).addClass("expand"), $(t).removeClass("closed")) : ($(t).addClass("closed"), $(t).removeClass("expand")), $(t).removeClass(n + " " + o);
                });
        });
    },
    handleSidebarScrollMemory = function () {
        if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))
            try {
                if ("undefined" != typeof Storage && "undefined" != typeof localStorage) {
                    $('.sidebar [data-scrollbar="true"]')
                        .slimScroll()
                        .bind("slimscrolling", function (e, a) {
                            localStorage.setItem("sidebarScrollPosition", a + "px");
                        });
                    var e = localStorage.getItem("sidebarScrollPosition");
                    e && $('.sidebar [data-scrollbar="true"]').slimScroll({ scrollTo: e });
                }
            } catch (e) {
                console.log(e);
            }
    },
    handleMouseoverFloatSubMenu = function (e) {
        clearTimeout(floatSubMenuTimeout);
    },
    handleMouseoutFloatSubMenu = function (e) {
        floatSubMenuTimeout = setTimeout(function () {
            $("#float-sub-menu").remove();
        }, 150);
    },
    handleSidebarMinifyFloatMenu = function () {
        $(document).on("click", "#float-sub-menu li.has-sub > a", function (e) {
            var a = $(this).next(".sub-menu"),
                t = $(a).closest("li"),
                r = !1,
                d = !1;
            $(a).is(":visible") ? ($(t).addClass("closing"), (r = !0)) : ($(t).addClass("expanding"), (d = !0)),
                $(a).slideToggle({
                    duration: 250,
                    progress: function () {
                        var e = $("#float-sub-menu"),
                            a = $(e).height(),
                            t = $(e).offset(),
                            n = $(e).attr("data-offset-top"),
                            o = $(e).attr("data-menu-offset-top"),
                            i = t.top - $(window).scrollTop(),
                            s = $(window).height();
                        if (
                            (r &&
                                n < i &&
                                ((i = n < i ? n : i),
                                $("#float-sub-menu").css({ top: i + "px", bottom: "auto" }),
                                $("#float-sub-menu-arrow").css({ top: "20px", bottom: "auto" }),
                                $("#float-sub-menu-line").css({ top: "20px", bottom: "auto" })),
                            d && s - i < a)
                        ) {
                            var l = s - o - 22;
                            $("#float-sub-menu").css({ top: "auto", bottom: 0 }), $("#float-sub-menu-arrow").css({ top: "auto", bottom: l + "px" }), $("#float-sub-menu-line").css({ top: "20px", bottom: l + "px" });
                        }
                    },
                    complete: function () {
                        $(a).is(":visible") ? $(t).addClass("expand") : $(t).addClass("closed"), $(t).removeClass("closing expanding");
                    },
                });
        }),
            $(".sidebar .nav > li.has-sub > a").hover(
                function () {
                    if ($("#page-container").hasClass("page-sidebar-minified")) {
                        clearTimeout(floatSubMenuTimeout);
                        var e = $(this).closest("li").find(".sub-menu").first();
                        if (targetFloatMenu == this && 0 !== $("#float-sub-menu").length) return;
                        targetFloatMenu = this;
                        var a = $(e).html();
                        if (a) {
                            var t = $("#sidebar").offset(),
                                n = $("#page-container").hasClass("page-with-right-sidebar") ? $(window).width() - t.left : t.left + 60,
                                o = $(e).height(),
                                i = $(this).offset().top - $(window).scrollTop(),
                                s = $("#page-container").hasClass("page-with-right-sidebar") ? "auto" : n,
                                l = $("#page-container").hasClass("page-with-right-sidebar") ? n : "auto",
                                r = $(window).height();
                            if (
                                (0 === $("#float-sub-menu").length
                                    ? ((a =
                                          '<div class="float-sub-menu-container" id="float-sub-menu" data-offset-top="' +
                                          i +
                                          '" data-menu-offset-top="' +
                                          i +
                                          '" onmouseover="handleMouseoverFloatSubMenu(this)" onmouseout="handleMouseoutFloatSubMenu(this)">\t<div class="float-sub-menu-arrow" id="float-sub-menu-arrow"></div>\t<div class="float-sub-menu-line" id="float-sub-menu-line"></div>\t<ul class="float-sub-menu">' +
                                          a +
                                          "</ul></div>"),
                                      $("#page-container").append(a))
                                    : ($("#float-sub-menu").attr("data-offset-top", i), $("#float-sub-menu").attr("data-menu-offset-top", i), $(".float-sub-menu").html(a)),
                                o < r - i)
                            )
                                $("#float-sub-menu").css({ top: i, left: s, bottom: "auto", right: l }), $("#float-sub-menu-arrow").css({ top: "20px", bottom: "auto" }), $("#float-sub-menu-line").css({ top: "20px", bottom: "auto" });
                            else {
                                $("#float-sub-menu").css({ bottom: 0, top: "auto", left: s, right: l });
                                var d = r - i - 21;
                                $("#float-sub-menu-arrow").css({ top: "auto", bottom: d + "px" }), $("#float-sub-menu-line").css({ top: "20px", bottom: d + "px" });
                            }
                        } else $("#float-sub-menu").remove(), (targetFloatMenu = "");
                    }
                },
                function () {
                    $("#page-container").hasClass("page-sidebar-minified") &&
                        (floatSubMenuTimeout = setTimeout(function () {
                            $("#float-sub-menu").remove(), (targetFloatMenu = "");
                        }, 250));
                }
            );
    },
    CLEAR_OPTION = "",
    handleAjaxMode = function (c) {
        var h = c.emptyHtml ? c.emptyHtml : '<div class="p-t-40 p-b-40 text-center f-s-20 content"><i class="fa fa-warning fa-lg text-muted m-r-5"></i> <span class="f-w-600 text-inverse">Error 404! Page not found.</span></div>',
            e = c.ajaxDefaultUrl ? c.ajaxDefaultUrl : "";
        function u(e) {
            e
                ? ($("#page-content-loader").remove(), $("body").removeClass("page-content-loading"))
                : 0 === $("#page-content-loader").length && ($("body").addClass("page-content-loading"), $("#content").append('<div id="page-content-loader"><span class="spinner"></span></div>'));
        }
        function a(e, a, t) {
            var n, o, i;
            Pace.restart(),
                u(!1),
                $(
                    ".jvectormap-label, .jvector-label, .AutoFill_border ,#gritter-notice-wrapper, .ui-autocomplete, .colorpicker, .FixedHeader_Header, .FixedHeader_Cloned .lightboxOverlay, .lightbox, .introjs-hints, .nvtooltip, #float-sub-menu"
                ).remove(),
                $.fn.DataTable && $(".dataTable").DataTable().destroy(),
                $("#page-container").hasClass("page-sidebar-toggled") && $("#page-container").removeClass("page-sidebar-toggled"),
                (n = '#sidebar [data-toggle="ajax"][href="' + e + '"]'),
                0 !== $(n).length && ($("#sidebar li").removeClass("active"), $(n).closest("li").addClass("active"), $(n).parents().addClass("active")),
                CLEAR_OPTION && (App.clearPageOption(CLEAR_OPTION), (CLEAR_OPTION = "")),
                t || ((o = e.replace("#", "")), (i = window.navigator.userAgent.indexOf("MSIE ")) && 0 < i && i < 9 ? (window.location.href = o) : history.pushState("", "", "#" + o));
            var s = "#content",
                l = e.replace("#", ""),
                r = c.ajaxType ? c.ajaxType : "GET",
                d = c.ajaxDataType ? c.ajaxDataType : "html";
            a && ((d = $(a).attr("data-type") ? $(a).attr("data-type") : d), (targetDataDataType = $(a).attr("data-data-type") ? $(a).attr("data-data-type") : d)),
                $.ajax({
                    url: l,
                    type: r,
                    dataType: d,
                    success: function (e) {
                        $(s).html(e);
                    },
                    error: function (e, a, t) {
                        $(s).html(h);
                    },
                }).done(function () {
                    u(!0), $("html, body").animate({ scrollTop: 0 }, 0), App.initComponent();
                });
        }
        "" === (e = window.location.hash ? window.location.hash : e) ? $("#content").html(h) : a(e, "", !0),
            $(window).on("hashchange", function () {
                window.location.hash && a(window.location.hash, "", !0);
            }),
            $(document).on("click", '[data-toggle="ajax"]', function (e) {
                e.preventDefault(), a($(this).attr("href"), this);
            });
    },
    handleSetPageOption = function (e) {
        e.pageContentFullHeight && $("#page-container").addClass("page-content-full-height"),
            e.pageSidebarLight && $("#page-container").addClass("page-with-light-sidebar"),
            e.pageSidebarRight && $("#page-container").addClass("page-with-right-sidebar"),
            e.pageSidebarWide && $("#page-container").addClass("page-with-wide-sidebar"),
            e.pageSidebarMinified && $("#page-container").addClass("page-sidebar-minified"),
            e.pageSidebarTransparent && $("#sidebar").addClass("sidebar-transparent"),
            e.pageContentFullWidth && $("#content").addClass("content-full-width"),
            e.pageContentInverseMode && $("#content").addClass("content-inverse-mode"),
            e.pageBoxedLayout && $("body").addClass("boxed-layout"),
            e.clearOptionOnLeave && (CLEAR_OPTION = e);
    },
    handleClearPageOption = function (e) {
        e.pageContentFullHeight && $("#page-container").removeClass("page-content-full-height"),
            e.pageSidebarLight && $("#page-container").removeClass("page-with-light-sidebar"),
            e.pageSidebarRight && $("#page-container").removeClass("page-with-right-sidebar"),
            e.pageSidebarWide && $("#page-container").removeClass("page-with-wide-sidebar"),
            e.pageSidebarMinified && $("#page-container").removeClass("page-sidebar-minified"),
            e.pageSidebarTransparent && $("#sidebar").removeClass("sidebar-transparent"),
            e.pageContentFullWidth && $("#content").removeClass("content-full-width"),
            e.pageContentInverseMode && $("#content").removeClass("content-inverse-mode"),
            e.pageBoxedLayout && $("body").removeClass("boxed-layout");
    },
    handleToggleNavbarSearch = function () {
        $('[data-toggle="navbar-search"]').click(function (e) {
            e.preventDefault(), $(".header").addClass("header-search-toggled");
        }),
            $('[data-dismiss="navbar-search"]').click(function (e) {
                e.preventDefault(), $(".header").removeClass("header-search-toggled");
            });
    },
    App = (function () {
        "use strict";
        var a;
        return {
            init: function (e) {
                e && (a = e), this.initLocalStorage(), this.initSidebar(), this.initTopMenu(), this.initComponent(), this.initThemePanel(), this.initPageLoad(), $(window).trigger("load"), a && a.ajaxMode && this.initAjax();
            },
            initSidebar: function () {
                handleSidebarMenu(),
                    handleMobileSidebarToggle(),
                    handleSidebarMinify(),
                    handleSidebarMinifyFloatMenu(),
                    handleToggleNavProfile(),
                    handleToggleNavbarSearch(),
                    (!a || (a && !a.disableSidebarScrollMemory)) && handleSidebarScrollMemory();
            },
            initSidebarSelection: function () {
                handleClearSidebarSelection();
            },
            initSidebarMobileSelection: function () {
                handleClearSidebarMobileSelection();
            },
            initTopMenu: function () {
                handleUnlimitedTopMenuRender(), handleTopMenuSubMenu(), handleMobileTopMenuSubMenu(), handleTopMenuMobileToggle();
            },
            initPageLoad: function () {
                handlePageContentView();
            },
            initComponent: function () {
                (!a || (a && !a.disableDraggablePanel)) && handleDraggablePanel(),
                    handleIEFullHeightContent(),
                    handleSlimScroll(),
                    handleUnlimitedTabsRender(),
                    handlePanelAction(),
                    handleScrollToTopButton(),
                    handleAfterPageLoadAddClass(),
                    handlePageScrollClass(),
                    767 < $(window).width() && handelTooltipPopoverActivation();
            },
            initLocalStorage: function () {
                (!a || (a && !a.disableLocalStorage)) && handleLocalStorage();
            },
            initThemePanel: function () {
                handleThemePageStructureControl(), handleThemePanelExpand(), handleResetLocalStorage();
            },
            initAjax: function () {
                handleAjaxMode(a), $.ajaxSetup({ cache: !0 });
            },
            setPageTitle: function (e) {
                document.title = e;
            },
            setPageOption: function (e) {
                handleSetPageOption(e);
            },
            clearPageOption: function (e) {
                handleClearPageOption(e);
            },
            restartGlobalFunction: function () {
                this.initLocalStorage(), this.initTopMenu(), this.initComponent();
            },
            scrollTop: function () {
                $("html, body").animate({ scrollTop: $("body").offset().top }, 0);
            },
        };
    })();
