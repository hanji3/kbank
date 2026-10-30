document.addEventListener("DOMContentLoaded", function () {
  // 변수 지정

  // 헤더
  const depth1 = document.querySelectorAll(".depth1");
  const depth2 = ".depth2";
  const hdBg = document.querySelector(".hd-bg");

  let depth2Height = [];

  depth2Height[0] =
    depth1[0].querySelector(depth2).offsetHeight + 68;

  depth2Height[1] =
    depth1[1].querySelector(depth2).offsetHeight + 68;

  depth1.forEach(function (item) {
    item.classList.add("disable");
  });

  let num;

  // 함수

  depth1.forEach(function (item) {

    // mouseenter
    item.addEventListener("mouseenter", function () {
      num = Array.from(depth1).indexOf(this);

      hdBg.style.height = depth2Height[num] + "px";

      depth1.forEach(function (el) {
        el.classList.remove("active");
        el.classList.add("disable");
      });

      this.classList.remove("disable");
      this.classList.add("active");
    });

    // mouseleave
    item.addEventListener("mouseleave", function () {
      hdBg.style.height = "0px";

      this.classList.remove("active");
      this.classList.add("disable");
    });
  });

  // hdBg mouseleave
  hdBg.addEventListener("mouseleave", function () {
    this.style.height = "0px";

    depth1.forEach(function (item) {
      item.classList.remove("active");
      item.classList.add("disable");
    });
  });
});