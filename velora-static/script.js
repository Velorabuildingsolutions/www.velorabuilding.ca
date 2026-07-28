/* VELORA Building Solutions — vanilla JS */
(function () {
  "use strict";

  /* Mobile menu */
  var burger = document.querySelector(".burger");
  var menu = document.getElementById("mobileMenu");
  if (burger && menu) {
    burger.addEventListener("click", function () {
      var open = menu.classList.toggle("open");
      burger.setAttribute("aria-expanded", open ? "true" : "false");
      burger.textContent = open ? "\u2715" : "\u2630";
    });
    menu.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        menu.classList.remove("open");
        burger.setAttribute("aria-expanded", "false");
        burger.textContent = "\u2630";
      });
    });
  }

  /* FAQ accordion */
  document.querySelectorAll(".faq-q").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var item = btn.closest(".faq-item");
      var isOpen = item.classList.contains("open");
      document.querySelectorAll(".faq-item.open").forEach(function (o) {
        o.classList.remove("open");
        o.querySelector(".faq-q").setAttribute("aria-expanded", "false");
        o.querySelector(".mark").textContent = "+";
      });
      if (!isOpen) {
        item.classList.add("open");
        btn.setAttribute("aria-expanded", "true");
        btn.querySelector(".mark").textContent = "\u2212";
      }
    });
  });

  /* Before / after sliders */
  document.querySelectorAll("[data-ba]").forEach(function (root) {
    var wrap = root.querySelector(".ba-wrap");
    var top = root.querySelector(".ba-top");
    var topImg = top.querySelector("img");
    var divider = root.querySelector(".ba-divider");
    var range = root.querySelector(".ba-range");
    function size() { topImg.style.width = wrap.offsetWidth + "px"; }
    function set(v) {
      top.style.width = v + "%";
      divider.style.left = v + "%";
    }
    size();
    window.addEventListener("resize", size);
    range.addEventListener("input", function () { set(range.value); });
    set(range.value);
  });

  /* Lightbox */
  var lb = document.getElementById("lightbox");
  if (lb) {
    var lbImg = lb.querySelector("img");
    document.querySelectorAll("[data-lightbox]").forEach(function (img) {
      img.addEventListener("click", function () {
        lbImg.src = img.currentSrc || img.src;
        lbImg.alt = img.alt || "";
        lb.classList.add("open");
      });
    });
    function closeLb() { lb.classList.remove("open"); lbImg.removeAttribute("src"); }
    lb.addEventListener("click", function (e) { if (e.target !== lbImg) closeLb(); });
    lb.querySelector(".lb-close").addEventListener("click", closeLb);
    document.addEventListener("keydown", function (e) { if (e.key === "Escape") closeLb(); });
  }

  /* Quote / contact form */
  document.querySelectorAll("form[data-quote]").forEach(function (form) {
    form.addEventListener("submit", function (e) {
      var msg = form.querySelector(".form-msg");
      /* If the Formspree endpoint has not been configured yet, do not pretend to send. */
      if (form.action.indexOf("YOUR_FORM_ID") !== -1) {
        e.preventDefault();
        if (msg) {
          msg.textContent = "The form isn't connected yet \u2014 please call 250 300 8029 or email velorabuilding@gmail.com. (Site owner: add your Formspree endpoint in the form's action attribute.)";
          msg.classList.add("show");
        }
      }
    });
  });

  /* Subtle scroll reveal (respects prefers-reduced-motion via CSS) */
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); }
      });
    }, { threshold: 0.08 });
    document.querySelectorAll(".rv").forEach(function (el) { io.observe(el); });
  }
})();
