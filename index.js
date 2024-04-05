document
  .getElementById("Calculate")
  .addEventListener("click", function (event) {
    let credits = [];
    let sgpas = [];
    for (let i = 1; i <= 4; i++) {
      credits.push(
        parseFloat(document.getElementById(`sem${i}_credits`).value) 
      );
      sgpas.push(parseFloat(document.getElementById(`sem${i}_sgpa`).value) || 0);
    }

    let final_cgpa = 0;
    let total_credits = 0;
    for (let i in credits) {
      final_cgpa += credits[i] * sgpas[i];
      if (sgpas[i] == 0){
        total_credits += 0;
      }
      else {
        total_credits += credits[i];
      }
    }
    final_cgpa /= total_credits;
    console.log(final_cgpa);
    document.getElementById("result").innerText = final_cgpa;
  });

let def_credits = [26,24,14,14]
document
  .getElementById("Reset")
  .addEventListener("click", function (event) {
    // console.log(event)
    for (let i = 0; i < 4; i++){
      document.getElementById(`sem${i+1}_credits`).value = def_credits[i]
    }
    // let myinput = document.getElementById("sem4_credits");
    // myinput.value = 0
  });

  // var myinput = document.getElementById("myinput").value.defaultValue;
  // myinput.value = myinput.defaultValue;