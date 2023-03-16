// Задание 1
// Описать в html тег input и тег ul. По нажатию на клавишу в инпуте в список ul должен добавляться элемент li. Содержимое li - нажатая клавиша.
const input1 = document.getElementById("input1");
const list = document.getElementById("key-list");

input1.addEventListener("keydown", (event) => {
    const li = document.createElement("li");
    li.innerText = event.key;
    list.appendChild(li);
})

// Задание 2
// Вставить в html тег input (просто предусмотреть в разметке).
// Обрабатывая событие keyup на теге input, выводить в консоль введенный текст каждый раз, как только клиент вписывает любой символ в поле (или стирает любой символ из поля). Вам понадобится считывать значение поля, это input.value
const input2 = document.getElementById("input2");

input2.addEventListener("keyup", (event) => {
    //console.log(input2.value);
    console.log(event.target.value);
})


// Задание 3
// Создать в html форму с инпутом и кнопкой. Также добавить в html тег ul. Когда форма отправляется, добавлять в список тег li. Его содержимое - введенный текст (input.value). После отправки формы инпут должен быть очищен (проставить пустую строку в value).
const input3 = document.getElementById("input3");
const submit = document.getElementById("submit-btn");
const listValue = document.getElementById("value-list");

submit.addEventListener("click", (event) => {
    const li = document.createElement("li");
    li.innerText = input3.value;
    listValue.appendChild(li);
    input3.value = "";
})

// Задание 4
// Калькулятор. 
// Создать в html форму с текстовым input, тегом select, вторым текстовым input и кнопкой. Добавить в html div. Внутри select будут options - арифметические знаки. В оба инпута пользователь вводит число. Когда пользователь отправляет форму (событие submit), над двумя числами выполняется действие, выбранное в select (чтобы получить выбранный пользователем option, мы "забираем" значение  select.value). Результат отображается в div.
// 1) решить с помощью if
// 2) решить с помощью evel (https://developer.mozilla.org/...)
const number1 = document.getElementById("number1");
const number2 = document.getElementById("number2");
const submitBtn = document.getElementById("submit");
const selectFunc = document.getElementById("selectFunc")
const form = document.getElementById("calc-form");
const res = document.getElementById("result");
res.style.background = "yellow";
res.style.width = "max-content";

const arrayFunc = ['+', '-', '*', '/', '%', 'x**n'];

const option0 = document.createElement("option");
option0.innerText = "Function";
option0.setAttribute("value", "");
option0.setAttribute("hidden", null);
selectFunc.appendChild(option0);
selectFunc.style.textAlign = 'center';

for(let i = 0; i < arrayFunc.length; i++){
    const option = document.createElement("option");
    option.innerText = arrayFunc[i];
    option.setAttribute("value", arrayFunc[i]);
    selectFunc.appendChild(option);
}

form.addEventListener("submit", (event) => { 
    event.preventDefault();
    let num1 = +number1.value;
    let num2 = +number2.value;
    if (selectFunc.value === '+'){
        res.innerText = eval('num1 + num2'); 
    } else if (selectFunc.value === '-'){
        res.innerText = eval('num1 - num2');  
    } else if (selectFunc.value === '*'){
        res.innerText = eval('num1 * num2');  
    } else if (selectFunc.value === '/'){
        res.innerText = eval('num1 / num2');  
    } else if (selectFunc.value === '%'){
        res.innerText = eval('num1 % num2');  
    } else if (selectFunc.value === 'x**n'){
        res.innerText = eval('num1 ** num2');  
    }
})

number1.addEventListener("click", () => {
    number1.value = "";
    number2.value = "";
    res.innerText = "";
    selectFunc.value = option0.value;
})


// Задание 5
// Вставить в разметку html тег button без js (просто предусмотреть в разметке). При наведении на кнопку изменять ее цвет каждый раз рандомным цветом. При выведении мышки за пределы кнопки поворачивать кнопку на рандомный угол от -180 до 180 градусов. Использовать обработку событий mouseenter, mouseleave на этой кнопке.
let color = '';
function getRandomRGB(){
    let a = getRandomInteger(0, 255);
    let b = getRandomInteger(0, 255);
    let c = getRandomInteger(0, 255);
    return `rgb(${a}, ${b}, ${c})`;
}
function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

const button = document.getElementById("button");

button.addEventListener("mouseenter", () => {
    button.style.backgroundColor = getRandomRGB();;
})

button.addEventListener("mouseleave", () => {
    button.style.transform = 'rotate(' + getRandomInteger(-180, 180) + 'deg)';
    button.style.transition = 'transform 0.3s cubic-bezier(0.17, 0.67, 0.83, 0.67)';
    button.classList.toggle('rotated');
})
