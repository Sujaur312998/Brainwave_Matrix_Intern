function updateTime() {
    var dt = new Date();
    document.getElementById("datetime").innerHTML = dt.toLocaleString();
}

// Update the time every second
setInterval(updateTime, 1000);

// Call it once to set the time immediately when the page loads
updateTime();
