
function greet() {
    window.alert("Hello there !");

}

function init() {

    let images = document.createElement("img");
    document.getElementById("new_element").appendChild(images).src = "icons/flower2.png";

    let spans = document.getElementById("rainbow").getElementsByTagName("span");
    let colors = [ "red", "orange", "yellow", "green", "blue", "purple", "pink"];

    for (let i = spans.length - 1; i >= 0; i--) {
        spans[i].style.color = colors[i];
    }

    let changeSrc = function(event) {
        let filename = event.target.src.replace(/^.*[\\\/]/, '');
        if (filename === "flower1.png") {
            event.target.src = "icons/flower2.png";
        }
        else event.target.src = "icons/flower1.png";
    };

    document.getElementById("event").addEventListener("mouseover", changeSrc);

}