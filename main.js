var newItemCounter = 1;
var myList = document.getElementById('myList');
var myButton = document.getElementById('myButton');
var myHeadline = document.getElementById('myHeadline');
var listItems = document.getElementById('myList').getElementsByTagName('li');

myList.addEventListener('click', activateItem);

for (var i = 0; i < listItems.length; i++) {
    listItems[i].addEventListener("click", activateItem);
}

function activateItem() {

    if (e.target.nodeName == "LI") {
        myHeadline.innerHTML = e.target.innerHTML;
        for (var i = 0; i < e.target.parentNode.children.length; i++) {
            e.target.parentNode.children[i].classList.remove('active');
        }
        e.target.classList.add('active');
    }
}

myButton.addEventListener('click', createNewItem);

function createNewItem() {
    myList.innerHTML += "<li>New Item" + newItemCounter + "</li>";
    newItemCounter++;
}