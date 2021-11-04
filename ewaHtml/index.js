// console.log(document.getElementsByTagName("Body")[0].innerHTML)
document.addEventListener("DOMContentLoaded", ()=>{
    let button = document.getElementsByClassName("register_btn")[0]
    // console.log(button)
    button.addEventListener("click", ()=> console.log("register_btn_clicked"))

    function handleInputChange(e){
        console.log(e.target.name, e.target.value)
    }
    let inputFields = document.getElementsByTagName("input")
    inputFields.forEach(inputField => inputField.addEventListener("change", handleInputChange))
})