
let thumb3 = slider2.querySelector('.thumb3');
thumb3.style.left = 0


thumb3.onmousedown = function(event3) {
    event3.preventDefault(); // prevent selection start (browser action)

    let shiftX = event3.clientX - thumb3.getBoundingClientRect().left;
    // shiftY not needed, the thumb moves only horizontally

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);

    function onMouseMove(event3) {
    let newLeft = event3.clientX - shiftX - slider2.getBoundingClientRect().left -10;

    // the pointer is out of slider => lock the thumb within the bounaries
    if (newLeft < 0) {
        newLeft = 0;
    }
    let rightEdge = slider2.offsetWidth - thumb3.offsetWidth;
    if (newLeft > rightEdge) {
        newLeft = rightEdge;
    }

    thumb3.style.left = newLeft + 'px';
    }

    function onMouseUp() {
    document.removeEventListener('mouseup', onMouseUp);
    document.removeEventListener('mousemove', onMouseMove);
    }

};

thumb3.ondragstart = function() {
    return false;
};