// Wrap every letter in a span
$("#title .letters").each(function() {
  $(this).html(
    $(this)
      .text()
      .replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>")
  );
});

anime
  .timeline({ loop: false })
  .add({
    targets: "#title .line",
    scaleX: [0, 1],
    opacity: [0.5, 1],
    easing: "easeInOutExpo",
    duration: 900
  })
  .add({
    targets: "#title .letter",
    opacity: [0, 1],
    translateX: [40, 0],
    translateZ: 0,
    scaleX: [0.3, 1],
    easing: "easeOutExpo",
    duration: 800,
    offset: "-=600",
    delay: function(el, i) {
      return 150 + 25 * i;
    }
  });
