function getElem(a) {
    return document.getElementById(a);
}

function time() {
    let now = new Date();
    let options = { hour: 'numeric', minute: 'numeric'};
    getElem("time").innerHTML = now.toLocaleTimeString("en-US", options);
    setTimeout(time, 1000)
}

function date() {
    let options = { day: 'numeric', month: 'long', year: 'numeric'};
    let now = new Date();
    getElem("date").innerHTML = now.toLocaleDateString("en-US", options);
}

function weather( town ) {
    fetch("https://wttr.in/" + town + "?format=%c%t%")
        .then(response => response.text())
        .then(text => {
            document.getElementById("weather").innerHTML = text;
        })
}

// c    Weather condition,
// C    Weather condition textual name,
// x    Weather condition, plain-text symbol,
// h    Humidity,
// t    Temperature (Actual),
// f    Temperature (Feels Like),
// w    Wind,
// l    Location,
// m    Moon phase 🌑🌒🌓🌔🌕🌖🌗🌘,
// M    Moon day,
// p    Precipitation (mm/3 hours),
// P    Pressure (hPa),
// u    UV index (1-12),

// D    Dawn*,
// S    Sunrise*,
// z    Zenith*,
// s    Sunset*,
// d    Dusk*,
// T    Current time*,
// Z    Local timezone.


function main() {
    time();
    date();
    weather("Petaluma");
}