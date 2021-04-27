function navFunction() {
    var toggle = document.getElementById('myTopnav')
    if (toggle.className === "topNav") {
        toggle.className += " responsive";
    }
    else {
        toggle.className = "topNav";
    }
}