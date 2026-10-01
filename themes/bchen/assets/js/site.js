// Theme: light by default; dark only if the visitor chose it. Runs before paint (loaded in <head>).
(function () {
  var saved = null;
  try { saved = localStorage.getItem("theme"); } catch (e) {}
  document.documentElement.setAttribute("data-theme", saved === "dark" ? "dark" : "light");
})();

document.addEventListener("DOMContentLoaded", function () {
  var root = document.documentElement;

  var toggle = document.querySelector(".theme-toggle");
  if (toggle) {
    var sync = function () {
      var dark = root.getAttribute("data-theme") === "dark";
      toggle.setAttribute("aria-pressed", String(dark));
      toggle.setAttribute("aria-label", dark ? "Switch to light theme" : "Switch to dark theme");
    };
    sync();
    toggle.addEventListener("click", function () {
      var next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", next);
      try { localStorage.setItem("theme", next); } catch (e) {}
      sync();
    });
  }

  var header = document.querySelector(".site-header");
  var menu = document.querySelector(".menu-toggle");
  if (header && menu) {
    menu.addEventListener("click", function () {
      var open = header.getAttribute("data-open") === "true";
      header.setAttribute("data-open", String(!open));
      menu.setAttribute("aria-expanded", String(!open));
    });
  }

  // Homepage hero: an idea network drifting from the headline's "wonder" across to the portrait.
  // Links form between nodes that drift near each other and fade as they part. Paused while off
  // screen; a single still frame for reduced motion.
  var web = document.querySelector(".hero__web");
  if (web) {
    var NS = "http://www.w3.org/2000/svg";
    var still = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    var hero = web.parentNode;
    var anchor = hero.querySelector(".hero__title em"); // the network starts at this word
    var W = 0, H = 0, X0 = 0, AMP = 0, LINK = 0, PAD = 12, MAXOP = 0.7;
    var left = function () {
      return anchor ? Math.max(0, Math.round(anchor.getBoundingClientRect().left - hero.getBoundingClientRect().left)) : 0;
    };
    var nodes = [], pool = [], shown = 0, layer = null;
    var wave = function () {
      return { f: (2 * Math.PI) / (24 + Math.random() * 24), p: Math.random() * 2 * Math.PI }; // 24–48s period
    };

    var build = function () {
      W = hero.clientWidth; H = hero.clientHeight; X0 = left();
      var RW = W - X0; // nodes live between X0 and the right edge
      web.setAttribute("viewBox", "0 0 " + W + " " + H);
      web.style.setProperty("--web-x", X0 + "px"); // left edge of the CSS fade-in mask
      while (web.firstChild) web.removeChild(web.firstChild);
      layer = web.appendChild(document.createElementNS(NS, "g")); // links under nodes
      pool = []; shown = 0; nodes = [];
      // ~1 node per 20,000px², on a jittered grid so they spread evenly
      var n = Math.min(Math.max(Math.round(RW * H / 20000), 8), 36);
      var cols = Math.max(1, Math.round(Math.sqrt(n * RW / H))), rows = Math.max(1, Math.round(n / cols));
      var cw = RW / cols, ch = H / rows;
      AMP = Math.min(50, cw * 0.6, ch * 0.6); // drift radius in px
      LINK = Math.min(Math.max(Math.sqrt(RW * H / n) * 1.3, 110), 200); // link reach in px
      for (var i = 0; i < cols * rows; i++) {
        var hx = X0 + (i % cols + 0.2 + Math.random() * 0.6) * cw;
        var hy = (Math.floor(i / cols) + 0.2 + Math.random() * 0.6) * ch;
        var c = web.appendChild(document.createElementNS(NS, "circle"));
        var k = Math.random();
        c.setAttribute("r", k < 0.15 ? 4.5 : 3);
        if (k < 0.15) c.setAttribute("class", "solid");
        nodes.push({
          el: c,
          hx: Math.min(Math.max(hx, X0 + PAD + AMP), W - PAD - AMP), // keep the wander inside the region
          hy: Math.min(Math.max(hy, PAD + AMP), H - PAD - AMP),
          w: [wave(), wave(), wave(), wave()]
        });
      }
    };

    var draw = function (t) {
      nodes.forEach(function (n) {
        var w = n.w;
        n.x = n.hx + AMP * (0.6 * Math.sin(w[0].f * t + w[0].p) + 0.4 * Math.sin(w[1].f * t + w[1].p));
        n.y = n.hy + AMP * (0.6 * Math.sin(w[2].f * t + w[2].p) + 0.4 * Math.sin(w[3].f * t + w[3].p));
        n.el.setAttribute("cx", n.x.toFixed(1));
        n.el.setAttribute("cy", n.y.toFixed(1));
      });
      var used = 0;
      for (var i = 0; i < nodes.length; i++) {
        for (var j = i + 1; j < nodes.length; j++) {
          var a = nodes[i], b = nodes[j];
          var dx = a.x - b.x, dy = a.y - b.y, d2 = dx * dx + dy * dy;
          if (d2 >= LINK * LINK) continue;
          var s = 1 - Math.sqrt(d2) / LINK;
          var l = pool[used] || (pool[used] = layer.appendChild(document.createElementNS(NS, "line")));
          l.setAttribute("x1", a.x.toFixed(1)); l.setAttribute("y1", a.y.toFixed(1));
          l.setAttribute("x2", b.x.toFixed(1)); l.setAttribute("y2", b.y.toFixed(1));
          l.setAttribute("stroke-opacity", (MAXOP * s * s * (3 - 2 * s)).toFixed(3)); // fade in as they near
          used++;
        }
      }
      for (var m = used; m < shown; m++) pool[m].setAttribute("stroke-opacity", "0");
      shown = used;
    };

    var clock = 0, last = null, frame = null;
    var tick = function (now) {
      if (last !== null) clock += Math.min(now - last, 100) / 1000; // only advance while running
      last = now;
      draw(clock);
      frame = requestAnimationFrame(tick);
    };
    var start = function () { if (!still && frame === null) { last = null; frame = requestAnimationFrame(tick); } };
    var stop = function () { if (frame !== null) { cancelAnimationFrame(frame); frame = null; } };

    build();
    draw(clock);
    var rebuild = function () {
      // only on real layout changes, not small height jitter (e.g. mobile toolbars)
      if (Math.abs(hero.clientWidth - W) < 2 && Math.abs(hero.clientHeight - H) < 40 && Math.abs(left() - X0) < 2) return;
      build(); draw(clock);
    };
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(rebuild); // web fonts move "wonder"
    if ("ResizeObserver" in window) {
      var pending = null;
      new ResizeObserver(function () {
        clearTimeout(pending);
        pending = setTimeout(rebuild, 150);
      }).observe(hero);
    }
    if ("IntersectionObserver" in window) {
      new IntersectionObserver(function (entries) {
        entries[0].isIntersecting ? start() : stop();
      }).observe(hero);
    } else {
      start();
    }
  }
});
