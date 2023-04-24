addEventListener("load", (event) => { });

document.addEventListener("mousemove", parallax)
function parallax(e) {

    document.querySelectorAll(".movers").forEach(function (move) {
        console.log('d')
        var moving_value = move.getAttribute("data-value");
        var x = e.clientX * moving_value;
        var y = e.clientY * moving_value;

        move.style.transform = "translateX(" + x + "px) translateY(" + y + "px)"
    })


}