// Function to update the donation amount display based on the slider
function updateAmount() {
  const amount = document.getElementById("donation-amount").value;
  document.getElementById("amount-display").textContent = `$${amount}`;
}

// Function to confirm the donation (you can add more logic here for actual submission)
function donate() {
  const amount = document.getElementById("donation-amount").value;
  alert(`Thank you for donating $${amount}! Your support means a lot.`);
}

// cotact section 
function showAlert() {
  alert("Thank you for submitting!");
}