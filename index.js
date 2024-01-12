const runnerButton = document.querySelector(".center_runner");
const tankButton = document.querySelector(".center_tank");
const lightButton = document.querySelector(".center_Lightweight");
const acceptButton = document.querySelector(".footer_rectangleAccept");
const declineButton = document.querySelector(".footer_rectangleDecline");
let option;


const runnerHandler = () => {
    if (runnerButton.classList.contains("clicked")) {
        runnerButton.classList.remove("clicked");
    }
    else {
        runnerButton.classList.add("clicked");
        tankButton.classList.remove("clicked");
        lightButton.classList.remove("clicked");
    }
};
const tankHandler = () => {
    if (tankButton.classList.contains("clicked")) {
        tankButton.classList.remove("clicked");
    }
    else {
        tankButton.classList.add("clicked");
        runnerButton.classList.remove("clicked");
        lightButton.classList.remove("clicked");
    }
};
const lightHandler = () => {
    if (lightButton.classList.contains("clicked")) {
        lightButton.classList.remove("clicked");
    }
    else {
        lightButton.classList.add("clicked");
        runnerButton.classList.remove("clicked");
        tankButton.classList.remove("clicked");
    }
};
const declineButtonHandler = () => {
    runnerButton.classList.remove("clicked");
    tankButton.classList.remove("clicked");
    lightButton.classList.remove("clicked");
};
const acceptButtonHandler = () =>{
    if(runnerButton.classList.contains("clicked")){
        option = 'Runner';
    }
    else if(tankButton.classList.contains("clicked")){
        option = 'Tank';
    }
    else if(lightButton.classList.contains("clicked")){
        option = 'Lightweight';
    }
    alert(option);
}
runnerButton.addEventListener("click", () => {
    runnerHandler();
});

tankButton.addEventListener("click", () => {
    tankHandler();
});

lightButton.addEventListener("click", () => {
    lightHandler();
});

acceptButton.addEventListener("click", () => {
    acceptButtonHandler();
});

declineButton.addEventListener("click", () => {
    declineButtonHandler();
});

window.addEventListener("keyup", (event) => {
    switch (event.key) {
        case "r":
            runnerHandler();
            break;
        case "t":
            tankHandler();
            break;
        case "l":
            lightHandler();
            break;
        default:
            break;
    }
});







