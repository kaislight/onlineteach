
let thumb4 = slider3.querySelector('.thumb4');
thumb4.style.left = 0


thumb4.onmousedown = function(event) {
    event.preventDefault(); // prevent selection start (browser action)

    let shiftX = event.clientX - thumb4.getBoundingClientRect().left;
    // shiftY not needed, the thumb moves only horizontally

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);

    function onMouseMove(event) {
    let newLeft = event.clientX - shiftX - slider3.getBoundingClientRect().left -10;

    // the pointer is out of slider => lock the thumb within the bounaries
    if (newLeft < 0) {
        newLeft = 0;
    }
    let rightEdge = slider3.offsetWidth - thumb4.offsetWidth;
    if (newLeft > rightEdge) {
        newLeft = rightEdge;
    }

    thumb4.style.left = newLeft + 'px';
    }

    function onMouseUp() {
    document.removeEventListener('mouseup', onMouseUp);
    document.removeEventListener('mousemove', onMouseMove);
    }

};

thumb4.ondragstart = function() {
    return false;
};