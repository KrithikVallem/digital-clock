function getNewTime() {
    const d = new Date();
    const h = addPaddingZero(d.getHours());
    const m = addPaddingZero(d.getMinutes());
    const s = addPaddingZero(d.getSeconds());

    const newTime = `${h}:${m}:${s}`;

    document.querySelector("#time24").innerText = newTime;
    document.querySelector("#time12").innerText = convertTo12(h,m,s);
}

/* turns 1:5:7 into 01:05:07 */
function addPaddingZero(num) {
    if (num < 10) {
        return "0" + num;
    }
    else {
        return num;
    }
}

function convertTo12(h,m,s) {
    let suffix = "AM";
    
    // hour 0 is 12:00 AM
    if (h === 0) {
        h = 12;
    }
    // times like 13:00 are actually 1:00 PM in 12 hour format
    else if (h > 12) {
        h -= 12;
        suffix = "PM";
    }

    return `${h}:${m}:${s} ${suffix}`;
}

setInterval(getNewTime, 1000);
