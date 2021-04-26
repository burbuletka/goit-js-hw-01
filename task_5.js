'use strict'

let deliveryprice;
let NameOfCountry = (prompt('Введіть назву країни в яку хочете відправити товар: ')).toLowerCase();
console.log(NameOfCountry);


switch(NameOfCountry){

   case 'китай':
      deliveryprice = 100;
      console.log('Доставка в', NameOfCountry, 'буде коштувати', deliveryprice, 'кредитів');
      break
   case 'чилі':
      deliveryprice = 250;
      console.log('Доставка в', NameOfCountry, 'буде коштувати', deliveryprice, 'кредитів');
      break
   
   case 'австралія':
      deliveryprice = 170;
      console.log('Доставка в', NameOfCountry, 'буде коштувати', deliveryprice, 'кредитів');
      break

   case 'індія':
      deliveryprice = 80;
      console.log('Доставка в', NameOfCountry, 'буде коштувати', deliveryprice, 'кредитів');
      break

   case 'ямайка':
      deliveryprice = 120;
      console.log('Доставка в', NameOfCountry, 'буде коштувати', deliveryprice, 'кредитів');
      break

   default:
      alert('У вашій країні доставка недоступна');
}