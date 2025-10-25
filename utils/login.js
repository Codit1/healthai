
const loginBtn = document.getElementById("login_btn")

const loginForm = document.getElementById("login_form")

loginForm.addEventListener("submit", (e) => {
    e.preventDefault()
    
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value

    const user = {
        email,
        password
    }

    console.log(user)

    if( email !== "" && password !== ""){
        fetch("https://health-result-project.onrender.com/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)

            alert(data.message)

            setTimeout( () => {
                window.location.href = "/template/sendreport.html"
            }, 2000)
        })
        .catch(err => {
            console.log(err)
        })
    }
    
})