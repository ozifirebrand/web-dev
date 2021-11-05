console.log(document.getElementsByTagName("Body")[0].innerHTML)
document.addEventListener("DOMContentLoaded", ()=>{

    let registerObject = {}

    //buttonElement
    let button = document.getElementsByClassName("register_btn")[0]
    button.addEventListener("click", ()=> console.log("register_btn_clicked"))

    //Input flow
    function handleInputChange(e){
        registerObject = {... registerObject, [e.target.name]: e.target.value}
        console.log(e)
    }

    let inputFields = document.getElementsByTagName("input")
    Array.from(inputFields).forEach((inputField)=>inputField.addEventListener("input",(e)=> handleInputChange(e)))
})