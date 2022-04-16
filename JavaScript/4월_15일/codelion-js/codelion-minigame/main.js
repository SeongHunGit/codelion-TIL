let hp = 3;

$("#drone").click(function () {
  $("#spit").fadeIn();
  $("#spit").animate({ left: "+=250" });
});

// let hp = 3;

// $("#drone").click(function () {
//   $("#spit").fadeIn();
//   $("#spit").animate({ left: "+=250" });
//   $("#spit").fadeOut(function () {
//     hp = hp - 1;
//     $("#hp").text("HP: " + hp);
//     if (hp === 0) {
//       $("#bunker").fadeOut();
//     }
//   });
//   $("#spit").css({ left: "150px" });
// });
