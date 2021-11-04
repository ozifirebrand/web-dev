// console.log(document.getElementsByTagName("Body")[0].innerHTML)
document.addEventListener("DOMContentLoaded", ()=>{
    let button = document.getElementsByClassName("register_btn")[0]
    // console.log(button)
    button.addEventListener("click", ()=> console.log("register_btn_clicked"))

    function handleInputChange(e){
        console.log(e)
    }

    let inputFields = document.getElementsByTagName("input")
    Array.from(inputFields).forEach((inputField)=>inputField.addEventListener("input",(e)=> handleInputChange(e)))
    // for (let i =0; i<inputFields.length; i++){
    //     inputFields[i].addEventListener("input", (e)=>handleInputChange(e))
    // }
})