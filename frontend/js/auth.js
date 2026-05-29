const registerForm = document.getElementById("registerForm");

if(registerForm){

    registerForm.addEventListener("submit", async (e)=>{

        e.preventDefault();

        const username = registerForm[0].value;
        const email = registerForm[1].value;
        const password = registerForm[2].value;

        const response = await fetch(
            "http://localhost:5000/api/auth/register",
            {
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({
                    username,
                    email,
                    password
                })
            }
        );

        const data = await response.json();

        alert(data.message);

        window.location.href = "login.html";
    });
}

const loginForm = document.getElementById("loginForm");

if(loginForm){

    loginForm.addEventListener("submit", async (e)=>{

        e.preventDefault();

        const email = loginForm[0].value;
        const password = loginForm[1].value;

        const response = await fetch(
            "http://localhost:5000/api/auth/login",
            {
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({
                    email,
                    password
                })
            }
        );

        const data = await response.json();

        localStorage.setItem("token",data.token);

        alert("Login Successful");

        window.location.href = "index.html";
    });
}