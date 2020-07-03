function getNewTime() {
    const d = new Date();
    const h24 = d.getHours().addPaddingZero();
    const h12 = d.getHours().convertHoursTo12();
    const m = d.getMinutes().addPaddingZero();
    const s = d.getSeconds().addPaddingZero();
    const amPm = (d.getHours() < 12) ? "AM" : "PM";

    document.querySelector("#time24").innerText = `${h24}:${m}:${s}`;
    document.querySelector("#time12").innerText = `${h12}:${m}:${s} ${amPm}`;

    // make everything appear all at once instead of showing up separately
    document.body.style.visibility = "visible";
}

/* turns 1:5:7 into 01:05:07 */
Number.prototype.addPaddingZero = function() {
    if (this.valueOf() < 10) {
        return "0" + this.valueOf();
    }
    else {
        // converting to string so the function returns a string every time
        return this.valueOf().toString(10);
    }
};

Number.prototype.convertHoursTo12 = function() {
    // hour 0 is 12:00 AM
    if (this.valueOf() === 0) {
        return 12;
    }
    // PM times like 13:00 are 1:00 PM
    else if (this.valueOf() > 12) {
        return this.valueOf() - 12;
    }
    // all AM times other than 12:00 AM
    else {
        return this.valueOf();
    }
};

setInterval(getNewTime, 1*1000);
