'use strict'

const ADMIN_PASSWORD = 'parol';
let message;
message = prompt('Введіть пароль: ');

if (message == null) {
    console.log('Скасовано користувачем!');
}
if (message == 'parol') {
    console.log('Ласкаво просимо!');
} else {
    console.log('Доступ заборонений, невірний пароль!');
}
alert(message)