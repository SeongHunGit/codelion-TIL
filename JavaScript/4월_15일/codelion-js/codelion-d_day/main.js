(() => {
  const now = new Date();
  const start = new Date("2022-03-28");

  const timeDiff = now.getTime() - start.getTime();
  const day = Math.floor(timeDiff / (1000 * 60 * 60 * 24) + 1);
  $("#love").text(day + "일째");

  const endDay = new Date("2022-08-01");
  const timeDiff2 = endDay.getTime() - now.getTime();
  const day2 = Math.floor(timeDiff2 / (1000 * 60 * 60 * 24));
  $("#end-day").text(day2 + "일 남음");

  const ms = start.getTime() + 833 * (1000 * 60 * 60 * 24);
  const tenThousand = new Date(ms);
  const tenThousandDate = tenThousand.getFullYear() + "." + (tenThousand.getMonth() + 1) + "." + tenThousand.getDate();
  $("#tenthousand-date").text(tenThousandDate);

  const timeDiff3 = tenThousand.getTime() - now.getTime();
  const day3 = Math.floor(timeDiff3 / (1000 * 60 * 60 * 24));
  $("#tenthousand").text(day3 + "일 남음");
})();
