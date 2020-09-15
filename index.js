let element = document.querySelector("main#main");
element.remove();

let newHeader = document.createElement('h1#victory');
document.body.appendChild(newHeader);
newHeader.innerHTML = "Lisa is the champion";
