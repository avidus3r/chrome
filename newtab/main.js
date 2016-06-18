function startTime() {
    var today = new Date();
    var meridian = "AM";
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);

    if(h > 12){
        h = h-12;
        meridian = "PM"
    }

    document.querySelector('.datetime').innerHTML =
        '<span class="hours">' + h + '</span>' + ":" + '<span class="minutes">' + m + '<span class="seconds"><sup>' + s + '</sup><sub>' + meridian + '</sub></span>';
    var t = setTimeout(startTime, 500);
}
function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}

document.addEventListener('DOMContentLoaded', function(){
    var height = window.innerHeight,
        width = window.innerWidth,
        imgUrl = 'https://unsplash.it/' + width + '/' + height + '?random';

    document.body.style.backgroundImage = 'url("' + imgUrl + '")';
    document.body.style.backgroundPosition = 'top left';
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundSize = '100% auto';
    document.body.style.color = '#fff';
    startTime();
});