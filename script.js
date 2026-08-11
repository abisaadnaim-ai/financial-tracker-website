// Reveal-on-scroll for the site's redesign pass — any element with the
// `.reveal` class (see styles.css) starts faded/lowered and animates into
// place the first time it scrolls into view. Vanilla JS, no framework,
// shared across every page via a plain <script src="script.js" defer>
// (docs pages reference it as "../script.js").
//
// Graceful degradation: browsers without IntersectionObserver (extremely
// rare today) just get every .reveal element shown immediately rather than
// permanently invisible — motion is a nice-to-have here, never a
// requirement to read the page.
(function () {
  var revealEls = document.querySelectorAll(".reveal");
  if (!revealEls.length) return;

  if (!("IntersectionObserver" in window)) {
    revealEls.forEach(function (el) {
      el.classList.add("is-visible");
    });
    return;
  }

  var io = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -10% 0px" }
  );

  revealEls.forEach(function (el) {
    io.observe(el);
  });
})();
