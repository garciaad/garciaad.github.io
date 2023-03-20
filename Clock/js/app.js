function updateTime() {
    const now = new Date();
    const date = now.toLocaleDateString();
    const time = now.toLocaleTimeString();
    document.querySelector(".date").innerHTML = date;
    document.querySelector(".time").innerHTML = time;
}

setInterval(updateTime, 1000);