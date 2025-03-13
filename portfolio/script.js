document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.querySelector("#contactForm");

    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {
            event.preventDefault();
            
            let name = document.querySelector("#name").value;
            let email = document.querySelector("#email").value;
            let message = document.querySelector("#message").value;
            
            if (name.trim() === "" || email.trim() === "" || message.trim() === "") {
                alert("Please fill out all fields before submitting.");
                return;
            }
            
            alert("Thank you, " + name + "! Your message has been sent successfully.");
            
            contactForm.reset();
        });
    }

    document.getElementById("currentYear").textContent = new Date().getFullYear();
});
