
function greet() {
    window.alert("Hello there !");

}

function init() {

    let images = document.createElement("img");
    document.getElementById("new_element").appendChild(images).src = "icons/flower2.png";

    let spans = document.getElementById("rainbow");
    let colors = ["red", "orange", "yellow", "green", "blue", "purple", "pink"];

    for (let i = spans.length - 1; i >= 0; i--) {
        spans[i].style.color = colors[i];
    }


}
