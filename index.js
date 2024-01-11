var clicked = document.querySelectorAll('.click');

var targetClasses = ['center_runner', 'center_tank', 'center_Lightweight',
'center_runner_Border_borderIcon','center_runner_Border_border','center_runner_Border_borderLeftRectangle','center_runner_Border_borderBorderkKey','center_runner_Border_borderBorderkKey_text',
'center_runnerBorder_thinLine','center_runnerBorder_thickLine','center_runner_Text',
'center_tank_Border_borderIcon','center_tank_Border_border','center_tank_Border_borderLeftRectangle','center_tank_Border_borderBorderkKey','center_tank_Border_borderBorderkKey_text',
'center_tankBorder_thinLine','center_tankBorder_thickLine','center_tank_Text',
'center_Lightweight_Border_borderIcon','center_Lightweight_Border_border','center_Lightweight_Border_borderLeftRectangle','center_Lightweight_Border_borderBorderkKey','center_Lightweight_Border_borderBorderkKey_text',
'center_LightweightBorder_thinLine','center_LightweightBorder_thickLine','center_Lightweight_Text',
];
var acceptDecline = ['footer_rectangleAccept', 'footer_rectangleDecline','footer_rectangleDecline_icon','footer_rectangleAccept_icon'];

clicked.forEach((button) => {
    button.addEventListener('click', (event) => {
        targetClasses.forEach((targetClass) => {
            if (event.target.classList.contains(targetClass)) {
                alert(targetClass);
            }
        });
        acceptDecline.forEach((rep) => {
            if (event.target.classList.contains(rep)) {
                alert(rep);
            }
        });
    });
});


