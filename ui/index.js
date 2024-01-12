const runnerButton = document.querySelector(".center_runner");
const tankButton = document.querySelector(".center_tank");
const lightButton = document.querySelector(".center_Lightweight");
const acceptButton = document.querySelector(".footer_rectangleAccept");
const declineButton = document.querySelector(".footer_rectangleDecline");
const container = document.querySelector(".container");

const runnerHandler = () => {
  if (runnerButton.classList.contains("clicked")) {
    runnerButton.classList.remove("clicked");
  } else {
    runnerButton.classList.add("clicked");
    tankButton.classList.remove("clicked");
    lightButton.classList.remove("clicked");
  }
};
const tankHandler = () => {
  if (tankButton.classList.contains("clicked")) {
    tankButton.classList.remove("clicked");
  } else {
    tankButton.classList.add("clicked");
    runnerButton.classList.remove("clicked");
    lightButton.classList.remove("clicked");
  }
};
const lightHandler = () => {
  if (lightButton.classList.contains("clicked")) {
    lightButton.classList.remove("clicked");
  } else {
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
const acceptButtonHandler = () => {
  let option;
  if (runnerButton.classList.contains("clicked")) {
    option = "runner";
  } else if (tankButton.classList.contains("clicked")) {
    option = "tank";
  } else if (lightButton.classList.contains("clicked")) {
    option = "light";
  }
  fetch(`https://${GetParentResourceName()}/accept`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
    body: JSON.stringify({
      option: option,
    }),
  });
  EscapeNUI();
};
const EscapeNUI = () => {
  container.style.display = "none";
  fetch(`https://${GetParentResourceName()}/escape`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
  });
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
    case "Escape":
      EscapeNUI();
      break;
    default:
      break;
  }
});
window.addEventListener("message", function (event) {
  const item = event.data;
  switch (item.action) {
    case "openClassUI":
      container.style.display = "flex";
      break;
    default:
      break;
  }
});
