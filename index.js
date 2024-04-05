document
  .getElementById("Calculate")
  .addEventListener("click", function (event) {
    let credits = [];
    let sgpas = [];
    for (let i = 1; i <= 4; i++) {
      credits.push(parseInt(document.getElementById(`sem${i}_credits`).value));
      sgpas.push(
        parseFloat(document.getElementById(`sem${i}_sgpa`).value) || 0
      );
    }

    let final_cgpa = 0;
    let total_credits = 0;
    for (let i in credits) {
      final_cgpa += credits[i] * sgpas[i];
      if (sgpas[i] != 0) {
        total_credits += credits[i];
      }
    }
    final_cgpa /= total_credits;
    // console.log(final_cgpa);
    if (total_credits == 0) {
      document.getElementById("result").innerText = "Enter Valid SGPAs";
      return;
    }
    document.getElementById("result").innerText = final_cgpa;
  });

let def_credits = [26, 24, 14, 14];
document.getElementById("Reset").addEventListener("click", function (event) {
  // console.log(event.target.id)
  for (let i = 0; i < 4; i++) {
    document.getElementById(`sem${i + 1}_credits`).value = def_credits[i];
  }
  // let myinput = document.getElementById("sem4_credits");
  // myinput.value = 0
});

// var myinput = document.getElementById("myinput").value.defaultValue;
// myinput.value = myinput.defaultValue;
function notNumber(event) {
  // console.log(event)
  if (event.target.id.includes("credits")) {
    if (
      !(
        (event.keyCode >= 48 && event.keyCode <= 57) ||
        event.keyCode == 8 ||
        event.key == "ArrowLeft" ||
        event.key == "ArrowRight"
      )
    ) {
      event.preventDefault();
      return false;
    }
  }
  else {
    if (
      !(
        (event.keyCode >= 48 && event.keyCode <= 57) ||
        event.keyCode == 8 ||
        event.keyCode == 190 ||
        event.key == "ArrowLeft" ||
        event.key == "ArrowRight"
      )
    ) {
      event.preventDefault();
      return false;
    }
  }
  // return true;
}

for (let i = 1; i <= 4; i++) {
  document
    .getElementById(`sem${i}_credits`)
    .addEventListener("keydown", notNumber);
  document
    .getElementById(`sem${i}_sgpa`)
    .addEventListener("keydown", notNumber);
}
