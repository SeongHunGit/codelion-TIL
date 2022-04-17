let num = 1;

const q = {
  1: { title: "문제 1번", type: "EI", A: "E", B: "I" },
  2: { title: "문제 2번", type: "EI", A: "E", B: "I" },
  3: { title: "문제 3번", type: "EI", A: "E", B: "I" },
  4: { title: "문제 4번", type: "SN", A: "S", B: "N" },
  5: { title: "문제 5번", type: "SN", A: "S", B: "N" },
  6: { title: "문제 6번", type: "SN", A: "S", B: "N" },
  7: { title: "문제 7번", type: "TF", A: "T", B: "F" },
  8: { title: "문제 8번", type: "TF", A: "T", B: "F" },
  9: { title: "문제 9번", type: "TF", A: "T", B: "F" },
  10: { title: "문제 10번", type: "JP", A: "J", B: "P" },
  11: { title: "문제 11번", type: "JP", A: "J", B: "P" },
  12: { title: "문제 12번", type: "JP", A: "J", B: "P" },
};
const result = {
  ISTJ: { animal: "하마", explain: "하마 설명", img: "./imges/lion.jpg" },
  ENFP: { animal: "멋쟁이 사자", explain: "멋쟁이 사자 설명", img: "./imges/lion.jpg" },
  ISTJ: { animal: "호랑이", explain: "호랑이 설명", img: "./imges/lion.jpg" },
};

function start() {
  $(".start").hide();
  $(".question").show();
  next();
}
$("#A").click(function () {
  var type = $("#type").val();
  var preValue = $("#" + type).val();
  $("#" + type).val(parseInt(preValue) + 1);
  next();
});
$("#B").click(function () {
  next();
});
function next() {
  if (num === 13) {
    $(".question").hide();
    $(".result").show();
    let mbti = "";
    $("#EI").val() < 2 ? (mbti += "I") : (mbti += "E");
    $("#SN").val() < 2 ? (mbti += "N") : (mbti += "S");
    $("#TF").val() < 2 ? (mbti += "F") : (mbti += "T");
    $("#JP").val() < 2 ? (mbti += "P") : (mbti += "J");
    $("#img").attr("src", result[mbti]["img"]);
    $("#animal").html(result[mbti]["animal"]);
    $("#explain").html(result[mbti]["explain"]);
  } else {
    $(".progress-bar").attr("style", "width: calc(100 / 12 *" + num + "%)");
    $("#title").html(q[num]["title"]);
    $("#type").val(q[num]["type"]);
    $("#A").html(q[num]["A"]);
    $("#B").html(q[num]["B"]);
    num++;
  }
}
