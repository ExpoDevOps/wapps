const button = document.getElementById("button");
let isClicked = false;

button.addEventListener("click", () => {
    if (isClicked) {
        button.src = "button-blue-with-text.svg";
    } else {
        button.src = "button-white-with-text.svg";
    }
    isClicked = !isClicked;
});