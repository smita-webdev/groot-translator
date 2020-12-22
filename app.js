//Selectors
const btnTranslate = document.querySelector("#btn-translate");
const inputTxt = document.querySelector("#txt-input");
const outputTxt = document.querySelector("#txt-output");

//Event listeners
btnTranslate.addEventListener("click", clickHandler);

//Functions
let serverURL = "https://api.funtranslations.com/translate/groot.json";

function createURL(text) {
    return serverURL + "?" + "text=" + text
}

function errorHandler(error) {
    console.log("Some Error Occured", error);
    alert("Oops something went wrong!");
}

function clickHandler() {

    let content = inputTxt.value;

    //Making call to server
    fetch(createURL(content))
        .then(response => response.json())
        .then(json => {
            outputTxt.innerText = json.contents.translated;

        })
        .catch(errorHandler);
};