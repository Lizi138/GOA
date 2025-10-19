        document.addEventListener("DOMContentLoaded", function () {
            const form = document.querySelector(".booking-form");
            const inputs = form.querySelectorAll("input, select, textarea");

            form.addEventListener("submit", function (e) {
                e.preventDefault(); 
                let isValid = true;

                inputs.forEach(input => {
                    input.style.border = "none";
                    if (input.value.trim() === "") {
                        input.style.border = "2px solid red";
                        isValid = false;
                    }
                });

                if (isValid) {
                    alert("✅ Booking Successful! Thank you for reserving your spot.");
                    form.reset();
                } else {
                    alert("⚠️ Please fill all required fields correctly.");
                }
            });
        });
