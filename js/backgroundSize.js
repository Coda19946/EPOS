let coverSize = true;

//jquerry
$(document).ready(() => {
  $(".contact").click(() => {
    if (coverSize) {
      $(".contact").css("background-color", "#FFDAB9");
      coverSize = false;
    } else {
      $(".contact").css("background-color", "#FFDAC1");
      coverSize = true;
    }
  });
});
