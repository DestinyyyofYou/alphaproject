const runnerButton = document.querySelector(".center_runner");
const tankButton = document.querySelector(".center_tank");
const lightButton = document.querySelector(".center_Lightweight");
const acceptButton = document.querySelector(".footer_rectangleAccept");
const declineButton = document.querySelector(".footer_rectangleDecline");

const runnerHandler = () => {
  alert("Click runner");
};
const tankHandler = () => {
  alert("Click tank");
};
const lightHandler = () => {
  alert("Click light");
};
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
  alert("Click accept");
});

declineButton.addEventListener("click", () => {
  alert("Click decline");
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
