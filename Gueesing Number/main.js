let inputElement = document.getElementById("inputText");
let randomNumber = Math.ceil(Math.random()*100);
console.log(randomNumber);
let result= document.getElementById("resultText")

function change(){
    let inputValue = parseInt(inputElement.value);
    console.log(inputValue);

    if(inputValue > randomNumber) {
        result.textContent = "Too High! Try Again"
        result.style.backgroundColor = "darkblue"
    }
    else if(inputValue < randomNumber){
        result.textContent = "Very Low! Try Again"
        result.style.backgroundColor ="darkblue";
    }
    else if(randomNumber === inputValue){
        result.textContent = "Congratulation! Your guess is correct";
        result.style.backgroundColor="green";
    }
    else {
        result.textContent ="Provide a valid user Input";
        result.style.backgroundColor="red";
    }
}