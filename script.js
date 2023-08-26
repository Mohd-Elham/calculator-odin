let btn7 = document.querySelector('#btn7');
let btn8 = document.querySelector('#btn8');
let add = document.querySelector('#btnAdd');
let result = document.querySelector('.displayResult');
let equal = document.querySelector('#btnEqual');

btn7.addEventListener('click',function (){
    result.append('7');
});

btn8.addEventListener('click',function (){
    result.append('8');
});
add.addEventListener('click',function (){
    result.append('+');
});

equal.addEventListener('click', function(){
    ans = eval(result.textContent);
    // console.log(result.getAttribute());
    result.innerHTML = ans;
})