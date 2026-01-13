// --------------------------Signup--------Logic-start---------------------------
 let form = document.querySelector("#form")
        let nameInput = document.querySelector("#fullname")
        let emailInput = document.querySelector("#email")
        let phonenoInput = document.getElementById("phoneno")
        let passwordInput = document.getElementById("password")
        let confirmPInput = document.getElementById("Confirmpassword")

        let nameError = document.querySelector("#nameError")
        let emailError = document.querySelector("#emailError")
        let phonenoError = document.querySelector("#phonenoError")
        let passwordError = document.getElementById("passwordError")
        let confirmError = document.getElementById("ConfirmedError")
        let passwordPattern = /^(?=.*[A-Za-z])(?=.*\d).{8,}$/;
        
        
        
        
        form.addEventListener("submit", function (e) {
            e.preventDefault();
            
            let password = passwordInput.value.trim();
            let confirmP = confirmPInput.value.trim();
            let isValid = true;

            
            function clearError() {
                document.querySelectorAll(".error").forEach((errElement) => {
                    // console.log(errElement);
                    errElement.textContent = ""
                    
                })
                document.querySelectorAll(".invalid").forEach((errInput) => {
                    errInput.classList.remove("invalid")
                })
            }
            clearError();
            
            function showErr(input, errElement, message) {
                
                errElement.innerText = message
                input.classList.add("invalid")
                
            }
            
            if (nameInput.value.trim().length < 3) {
                isValid = false;
                showErr(nameInput, nameError, "Name must be atleast 3 characters")
            }
            
            if (!emailInput.value.includes("@")) {
                showErr(emailInput, emailError, "Enter valid mail")
                isValid = false;
                
            }
            
            if(phonenoInput.value.trim().length !== 10){
                showErr(phonenoInput,phonenoError,"Phone Number should have 10 digits")
                isValid = false;
            }
            
            if(password.length < 8 || (!passwordPattern.test(password)) ){
                showErr(passwordInput,passwordError,"password should contain atleast 8 characters with numbers and alphabets")
                isValid = false;
                
            }
            
            if(password!== confirmP ){
                showErr(confirmPInput,confirmError,"Password do not match")
                isValid=false;
            }
            
            
            
            
            if (!isValid) return



            localStorage.setItem("email1",emailInput.value);
            localStorage.setItem("password1",passwordInput.value);


            window.location.href = "Login.html";

            form.reset()

        })

        // -----------------------------------------signUpLogicEnd------------------------------------------


        // ----------------------------------------signInLogicStart------------------------------------------
        // --------------------signin logic is present in the same signin file itself-----
        // ----------------------------SignInLogicEnd---------------------------------------------------------