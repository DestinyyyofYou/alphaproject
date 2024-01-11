const runnerButton = document.querySelector(".center_runner");
const tankButton = document.querySelector(".center_tank");
const lightButton = document.querySelector(".center_Lightweight");
const acceptButton = document.querySelector(".footer_rectangleAccept");
const declineButton = document.querySelector(".footer_rectangleDecline");
var option;
const runnerHandler = () => {
    $('.center_runner').hover(
        function () {
            $(this).addClass('hovered');
        },
        function () {
            $(this).removeClass('hovered');
        }
    );
    $('.center_runner').one('click',function () {
        $(this).toggleClass('clicked');
        console.log('a');
    })
    $('.center_runner').keyup(function (event) {
        if (event.key === 'r') {
            $(this).toggleClass('clicked');
        }
    });
    // alert('Runner clicked');
};
const tankHandler = () => {
    $('.center_tank').hover(
        function () {
            $(this).addClass('hovered');
        },
        function () {
            $(this).removeClass('hovered');
        }
    );
    $('.center_tank').click(function () {
        $(this).toggleClass('clicked');
        alert('Tank clicked');
    })
};
const lightHandler = () => {
    $('.center_Lightweight').hover(
        function () {
            $(this).addClass('hovered');
        },
        function () {
            $(this).removeClass('hovered');
        }
    );
    $('.center_Lightweight').click(function () {
        $(this).toggleClass('clicked');
        alert('Lightweight clicked');
    })
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







