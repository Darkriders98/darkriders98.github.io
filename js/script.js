
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
        if (event.target.src) {
            var filename = event.target.src.replace(/^.*[\\\/]/, '');
        }
        if (filename === "flower1.png"){
            event.target.src = "icons/flower2.png";
        }else event.target.src = "icons/flower1.png";
    };

    document.getElementById("event").addEventListener("mouseover", changeSrc);

}

function addItem() {

    let input = document.getElementById("shopping_input");
    let text = document.createTextNode(input.value);

    if (text.length>0 && text != ''){

        let li = document.createElement("li");
        li.appendChild(text);

        let imp = document.getElementById("important");
        let gro = document.getElementById("grocerie");

        if(imp.checked){
            li.style.color = "red";
            imp.checked = false;
        }

        if(gro.checked){
            li.style["text-decoration"] = "underline";
            gro.checked = false;
        }

        let list = document.getElementById("shopping_list");
        list.appendChild(li);

        input.placeholder = "Item you need to buy";
        input.value = '';

    }

}

function removeItem() {

}

