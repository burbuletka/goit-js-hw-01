'use strict'

let credits = 23580;
let pricePerDroid = 3000;
let droid = Number(prompt('Введіть кількість дроідів'));
let totalsprice;

if(droid==0 || droids==null){
   console.log('Скасовано користувачем!');
}else{
   totalsprice = Number(pricePerDroid * droid);
   if(totalsprice>credits){
      console.log('Недостатньо коштів на рахунку!');
   }else{
      console.log('Ви купили', droid, 'дроїдів, на рахунку залишилося', credits-totalsprice)
   }
}