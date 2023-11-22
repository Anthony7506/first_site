const colors = ["CB997E", "#DDBEA9", "#FFE8D6", "#B7B7A4", "#6B705C"];
let currColor = 0;

function changeBackgroundColor() {
    if (currColor < colors.length) {
        document.body.style.backgroundColor = colors[currColor];
        currColor++;
    } else {
        currColor = 0;
        document.body.style.backgroundColor = colors[currColor];
    }
}

function changeTextColor() {
    const myColor = document.getElementById("inputColor").value;
    document.body.style.color = myColor;
}

document.getElementById("colorButton").addEventListener("click", changeBackgroundColor);
document.getElementById("inputColor").addEventListener("input", changeTextColor);
