/*let element = document.getElementById('first-child');
element.innerText = 'Hello World';
console.log(element);

var elements = document.getElementsByTagName("div");
var elements = document.getElementsByClassName('child');


console.log(elements)
for(let number=0; number<=elements.length; number++ ) {
    //number + 1 => 0+1 1
    //number = 0;
    //elements.length = 7
    //0<7 ->true

    elements[number].style.color = 'white';
    //elements[1]
}
console.log(elements);

*/


let elements = document.querySelectorAll('.child');
console.log(elements)
elements.forEach(item => item.style.backgroundColor = 'orange')

let element = document.querySelector('#first-child');
//element.parentElement.parentElement.style.backgroundColor = '#ccc';
element.closest('.grand-parent').style.backgroundColor = '#ccc';

console.log(document.body)
console.log(document.head)

console.log(document.querySelector('#parent-1').children);
console.log(element.previousElementSibling);
console.log(element.nextElementSibling);

//document.querySelector('#link').id
let link = document.querySelector('#link')
console.log(link.getAttribute('href'));

link.setAttribute('href', 'https://www.w3schools.com/js/js_htmldom_elements.asp');





