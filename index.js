document
  .getElementById("Calculate")
  .addEventListener("click", function(event) {
    let credits = [];
    let sgpas = [];
    for (let i = 1; i <= 4; i++) {
      credits.push(
        parseFloat(document.getElementById(`sem${i}_credits`).value)
      );
      sgpas.push(parseFloat(document.getElementById(`sem${i}_sgpa`).value));
    }

    let final_cgpa = 0;
    let total_credits = 0;
    for (let i in credits) {
      final_cgpa += credits[i] * sgpas[i];
      total_credits += credits[i];
    }
    final_cgpa /= total_credits;
    console.log(final_cgpa);
    document.getElementById("result").innerText = final_cgpa
  });