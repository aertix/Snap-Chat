const img = document.querySelector('.textImg')
window.addEventListener("scroll", () => {
    console.log(window.scrollY)
    if (window.scrollY >= 468) {
        img.style.marginTop = 468 + "px";
        img.style.position = 'relative';
    }
    else {
        img.style.marginTop = window.scrollY + "px";
        img.style.position = 'relative';
    }
})