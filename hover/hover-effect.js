$(function () {
  var scrollButton = document.getElementById("scroll-button");

  scrollButton.addEventListener("mouseenter", function (event) {
    event.preventDefault();
    var elmntToView = document.getElementById("main-page");
    elmntToView.scrollIntoView({ behavior: "smooth" });
  });
});

//   $("a[href*=#]").on("mouseover", function (e) {
//     e.preventDefault();
//     var elmntToView = document.getElementById("main-page");
//     elmntToView.scrollIntoView({behavior: "smooth"});
//   //  var mainPageOffset = $("#main-page").offset().top;

//   //   $("html, body").animate(
//   //     { scrollTop: mainPageOffset },
//   //     500,
//   //     "linear"
//   //   );
//   });
// });
