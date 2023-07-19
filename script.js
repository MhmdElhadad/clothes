   document.getElementById("checkout-form").addEventListener("submit", function(event) {
   event.preventDefault();
  
 
    const formData = new FormData(event.target);
    const name = formData.get("name");
    const address = formData.get("address");
    const cardNumber = formData.get("card");
    const expiryDate = formData.get("expiry");

    const successMessage = "Payment and shipping were successful!";
    document.getElementById("result-message").textContent = successMessage;
   });
  