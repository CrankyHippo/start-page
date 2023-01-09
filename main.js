function gebi(a) {
    return document.getElementById(a);
}

function time() {
    let now = new Date();
    let options = { hour: 'numeric', minute: 'numeric'};
    gebi("time").innerHTML = now.toLocaleTimeString("en-US", options);
    setTimeout(time, 5000)
}

function date() {
    let options = { day: 'numeric', month: 'long', year: 'numeric'};
    let now = new Date();
    gebi("date").innerHTML = now.toLocaleDateString("en-US", options);
}

function weather( town ) {
    fetch("https://wttr.in/" + town + "?format=%c+%t")
        .then(response => response.text())
        .then(text => {
            document.getElementById("weather").innerHTML = text;
        })
}

function main() {
    time();
    date();
    weather("Petaluma");
}