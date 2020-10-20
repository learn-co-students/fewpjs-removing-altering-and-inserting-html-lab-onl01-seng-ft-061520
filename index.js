// Write your code here!
document.getElementById('main').remove();

let newHeader = document.createElement('h1');
newHeader.id = 'victory';
newHeader.innerHTML = 'RAY is the champion';
document.body.append(newHeader);
