
const submitBtn =document.querySelector(".sub");


        submitBtn.addEventListener("click",()=>{
            const email = document.querySelector(".emails input").value;
            const name = document.querySelector(".names input").value;
            fetch(url, {
                method: 'POST',
                body: new URLSearchParams({ name, email })
            })
            .then(result => result.text())
            .then(resultafter => {
                if (resultafter === "success") {
                    localStorage.setItem("user", email);
                    window.location.href = "vote.html";
                } else {
                document.getElementById("show").innerText = "Wrong email or password";
                }
            });
        })