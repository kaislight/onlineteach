let thumb = slider.querySelector('.thumb');
let thumb2 = slider.querySelector('.thumb2');
let thumb5 = slider.querySelector('.thumb5');
thumb.style.left = 0
thumb2.style.left = 0
thumb5.style.left = 880

thumb.onmousedown = function(event) {
    event.preventDefault(); // prevent selection start (browser action)

    let shiftX = event.clientX - thumb.getBoundingClientRect().left;
    // shiftY not needed, the thumb moves only horizontally

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);

    function onMouseMove(event) {
    let newLeft = event.clientX - shiftX - slider.getBoundingClientRect().left;

    // the pointer is out of slider => lock the thumb within the bounaries
    if (newLeft < 0) {
        newLeft = 0;
    }
    let rightEdge = slider.offsetWidth - thumb.offsetWidth;
    if (newLeft > thumb2.getBoundingClientRect().left- slider.getBoundingClientRect().left - 10) {
        newLeft = thumb2.getBoundingClientRect().left- slider.getBoundingClientRect().left - 10;
    }

    thumb.style.left = newLeft + 'px';
    
    }

    function onMouseUp() {
    document.removeEventListener('mouseup', onMouseUp);
    document.removeEventListener('mousemove', onMouseMove);
    }

};

thumb2.onmousedown = function(event2) {
    event2.preventDefault(); // prevent selection start (browser action)

    let shiftX = event2.clientX - thumb2.getBoundingClientRect().left;
    // shiftY not needed, the thumb moves only horizontally

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);

    function onMouseMove(event2) {
    let newLeft = event2.clientX - shiftX - slider.getBoundingClientRect().left -10;

    // the pointer is out of slider => lock the thumb within the bounaries
    if (newLeft < thumb.getBoundingClientRect().left- slider.getBoundingClientRect().left) {
        newLeft = thumb.getBoundingClientRect().left- slider.getBoundingClientRect().left;
    }
    let rightEdge = slider.offsetWidth - thumb2.offsetWidth;
    if (newLeft > rightEdge -10) {
        newLeft = rightEdge -10;
    }

    thumb2.style.left = newLeft + 'px';
    }

    function onMouseUp() {
    document.removeEventListener('mouseup', onMouseUp);
    document.removeEventListener('mousemove', onMouseMove);
    }

};


thumb.ondragstart = function() {
    return false;
};

thumb2.ondragstart = function() {
    return false;
};
