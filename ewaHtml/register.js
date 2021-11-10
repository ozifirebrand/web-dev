document.addEventListener("DOMContentLoaded", ()=>{

    let registerObject = {};
    let loginObject = {};

    function confirmRegistration() {
        if (Object.keys(registerObject).length === 4) {
            try {
                let userRepository = localStorage.getItem("ewausers")
                if (userRepository === null) {
                    let repository = [registerObject]
                    localStorage.setItem("ewausers", JSON.stringify(repository))
                } else {
                    let previousRepository = JSON.parse(userRepository)
                    let updatedRepository = [...previousRepository, registerObject]
                    localStorage.setItem("ewausers", JSON.stringify(updatedRepository))
                }
            } catch (error) {
                console.log(error)
            }
        } else {
            alert("Incomplete user info")
        }
    }

    //buttonElement
    if (document.getElementsByClassName("register_btn").length>0){
        let button = document.getElementsByClassName("register_btn")[0]
        button.addEventListener("click", ()=>confirmRegistration())
    }
//Input fields
    function handleInputChange(e){
        registerObject = { ... registerObject, [e.target.name]: e.target.value }
    }


    function handleLoginChange(e){
        loginObject = {... loginObject, [e.target.name]:e.target.value}
    }


    if (document.getElementsByClassName("register_btn").length>0){
        let registerInputFields = document.getElementsByClassName("register_input");
        Array.from(registerInputFields).forEach((inputField)=>
            inputField.addEventListener("input", (e)=>handleInputChange(e)))
    }

    if (document.getElementsByClassName("login_input").length > 0){
        let loginInputFields = document.getElementsByClassName("login_input")
        Array.from(loginInputFields).forEach((inputField)=>
            inputField.addEventListener("input",(e)=>handleLoginChange(e)))
    }


    function confirmLogin(){
        let userRepository =JSON.parse(localStorage.getItem("ewausers"))
        let {email, password} = loginObject
        let userObject = userRepository.find(user => user.email ===email)
        if (userRepository.findIndex(user=>user.email ===email) !== -1){
            if (userObject.password === password){
                localStorage.setItem("ewauser", JSON.stringify(userObject))
                window.location.href="home.html"
            }else {
                alert("Please enter a correct password")
            }
        }else {
            alert("User does not exist")
        }
    }


    if (document.getElementsByClassName("login_input").length>0){
        let loginButton = document.getElementsByClassName("login_btn")[0]
        loginButton.addEventListener("click", ()=> confirmLogin())
    }

})
// function myFunction(){
//     let username = JSON.parse(localStorage.getItem("ewauser"))
//     document.getElementById("user_name").innerHTML = "Hey " + username.last_name
// }
//
// myFunction()