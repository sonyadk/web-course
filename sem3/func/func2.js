{
// Дано: функция
  const mixin = function(){ 
   return this * this; 
  };

console.log(mixin.call(5));
console.log('Пока ответа нет!');
}