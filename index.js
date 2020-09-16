// Write your code here!
let main = document.querySelector('main#main');
main.remove();
let newHeader = document.createElement('h1');
newHeader.id = 'victory'
const newContent = document.createTextNode('is the champion');
newHeader.appendChild(newContent);
document.body.appendChild(newHeader);

let newParagraph = document.createElement('p');
const laugh = document.createTextNode('hahahaha');
newParagraph.appendChild(laugh);
document.body.appendChild(newParagraph);
