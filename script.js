document.addEventListener("DOMContentLoaded", () => {
    console.log("Welcome to the City of Gweru Website!");

    // Handle fault report form submission
    const faultForm = document.getElementById("fault-form");
    if (faultForm) {
        faultForm.addEventListener("submit", (e) => {
            e.preventDefault();
            alert("Thank you! Your fault report has been submitted.");
            faultForm.reset();
        });

        // Simulate payment processing
document.getElementById('payment-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent actual form submission for demo purposes
  
    const accountNumber = document.getElementById('account-number').value;
    const amount = document.getElementById('amount').value;
    const paymentMethod = document.getElementById('payment-method').value;
  
    if (!accountNumber || !amount || !paymentMethod) {
      alert('Please fill out all required fields.');
      return;
    }
  
    // Simulate payment success
    alert(`Payment of $${amount} for Account #${accountNumber} was successful!`);
    this.reset(); // Clear the form after submission
  });
    }

    // Councillor search function
    window.findCouncillor = function() {
        const ward = document.getElementById("ward-input").value;
        if (ward) {
            alert(`Searching for councillor in Ward ${ward}... (Feature coming soon!)`);
        } else {
            alert("Please enter a ward number.");
        }
    };
});

// Function for button alerts
function showAlert(message) {
    alert(message);
}