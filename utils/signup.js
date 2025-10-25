
const signUpBtn = document.getElementById("signup_btn")

const signUpForm = document.getElementById("signup_form")

signUpForm.addEventListener("submit", (e) => {
    e.preventDefault()
    
    const name = document.getElementById("name").value
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value
    const position = document.getElementById("position").value
    const department = document.getElementById("department").value

    const user = {
        name,
        email,
        password,
        position,
        department
    }

    fetch("https://health-result-project.onrender.com/signup", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    })
    .then(res => res.json())
    .then(data => {
        console.log(data)

        alert("User created successfully and Logged in")

        window.location.href = "/template/sendreport.html"
    })
    .catch(err => {
        console.log(err)
    })
})