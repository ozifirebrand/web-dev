document.addEventListener("DOMContentLoaded", ()=>{

    let registerObject = {};
    let repository = [
        {
            first_name: "ujay",
            last_name: "Eroms",
            email: "adaay@gmail.com",
            password: "1234859"
        },
        {
            first_name: "gideon",
            last_name: "Mojoyin",
            phone_number: "08099002244",
            password: "59838929"
        }
    ]

    //
    function confirmRegistration(){
        if (Object.keys(registerObject).length ===4) {
            let {first_name, password} = registerObject
            if (repository.findIndex(user => user.first_name === first_name) !== -1) {
                if (repository.find(user => user.first_name === first_name).password === password) {
                    window.location.href = "home.html"
                } else {
                    alert("Please enter a correct password")
                }
            } else {
                alert("User does not exist")
            }
        } else {
            alert("Incomplete user info")
        }
    }
    //buttonElement
    let button = document.getElementsByClassName("register_btn")[0];
    button.addEventListener("click", ()=> confirmRegistration());

    //Input flow
    function handleInputChange(e){
        registerObject = {
            ... registerObject, [e.target.name]: e.target.value
        }
    }

    let inputFields = document.getElementsByTagName("input");
    Array.from(inputFields).forEach((inputField)=>
        inputField.addEventListener("input",(e)=> handleInputChange(e)))
})