const button = document.querySelector(".container .gen-pass");
const checkBoxs = document.querySelectorAll(".container .content .checkbox");

const range = document.querySelector(".range");

const pass = document.getElementById("pass");

range.addEventListener("input",()=>{
    document.getElementById("length").textContent = range.value;
});




function getRandomAlphabetOrNumberOrSymbol(){
    var length = range.value;
    var lowercaseCharacters = "abcdefghijklmnopqrstuvwxyz";
    var UppercaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var number = "0123456789";
    var symbol = "!@#$%^&*()_-+=<>?";
    var password = "";    
    var allChar="";

    if(checkBoxs[0].checked){
        allChar+=lowercaseCharacters;
    }
    if(checkBoxs[1].checked){
        allChar+=UppercaseCharacters;
    }
    if(checkBoxs[2].checked){
        allChar+=number;
    }
    if(checkBoxs[3].checked){
        allChar+=symbol;
    }

    let prevIndex = -1;
    var randomIndex = 0;

    for(let i=0; i<length; i++){
        randomIndex = Math.floor(Math.random() * allChar.length);
        password+=allChar[randomIndex];

    }
    return password;
}


button.addEventListener("click", ()=>{
    pass.value = getRandomAlphabetOrNumberOrSymbol();
})


copyIcon = document.querySelector(".container .text-area .copy-icon");

copyIcon.addEventListener("click", ()=>{
    if(pass.value != ""){
        navigator.clipboard.writeText(pass.value)
        copyIcon.title = "Password Copied"
    }
})

