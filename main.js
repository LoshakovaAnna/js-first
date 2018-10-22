/*let userPassword=prompt('Введите пароль');
const originPassword='qwer1234';

if (userPassword===originPassword){
    alert('ok');
}
else{
    alert('wrong passwod');
}*/

let numberOne=prompt('Введите первое число');

let numberTwo=prompt('Введите второе число');
//let numberThree=+numberOne + (+numberTwo);
let numberThree=parseInt(numberOne) + parseInt(numberTwo);
alert(numberThree);
