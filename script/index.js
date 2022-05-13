const btn = document.querySelector("#btn"); // button
const radioButtons = document.querySelectorAll('input[name="input-rating"]'); // variable for radio buttons
let span = document.getElementById("choice"); // variable to replace span in thank-you card

// listens to click on btn and add the radioButton value checked to selectedRating
btn.addEventListener("click", () => {
  let selectedRating;
  for (const radioButton of radioButtons) {
    if (radioButton.checked) {
      selectedRating = radioButton.value;
      break;
    }
  }

  // shows thank-you card changing its display:style in block
  document.getElementById("thank-you").style.display = "block";

  // hides evaluation card changing its display:style in none
  document.getElementById("evaluation").style.display = "none";

  // replaces span tag with the selectedRating variable
  span.innerHTML = selectedRating;
});
