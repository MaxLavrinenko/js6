// 1) Створити масив з 20 чисел та:
//  a) відсортувати його від меншого до більшого.
// let arr = [10,2,4,3,78,39,22,88,43,7];
// let arr1= arr.sort((a,b)=>{
//     return a-b;
// });
// console.log(arr1);
//  b) відсортувати його від більшого до меншого.
// let arr = [10,2,4,3,78,39,22,88,43,7];
// let arr1 = arr.sort((a,b)=>{
//     return b-a;
// })
// console.log(arr1);
//  c) Відфілтрувати числа які є кратними 3.
// let arr = [10,2,4,3,78,39,22,88,43,7];
// let arr1 =arr.filter((value)=>{
// return value % 3 ===0;
// }) ;
// console.log(arr1);
//  d) Відфілтрувати числа які є більшими за 10.
// let arr = [10,2,4,3,78,39,22,88,43,7];
// let arr1 =arr.filter((value)=>{
// return value >= 10;
// }) ;
// console.log(arr1);
//  e) Проітерувати його forEach та вивести кожеш елмент за допомогою document.write
// let arr = [10,2,4,3,78,39,22,88,43,7];
//  arr.forEach((value) => {
//     document.write(value);
//     document.write(`<br>`);
// });
//  f) За допомогою map збільшити кожен елемент в масиві в три рази.
// let arr = [10,2,4,3,78,39,22,88,43,7];
// let arr1 = arr.map(value => value*3);
// console.log(arr1);
//  g) Порахувати загальну суму всіх елментів у масиві (reduce)
// let arr = [10,2,4,3,78,39,22,88,43,7];
// let arr1 = arr.reduce((acc,currentValue) => {
//     return acc += currentValue;
// },0)


// 2) Створити масив з 20 стрічок та:
//  a) Відсортувати його в алфавітному порядку
// let arr= ['Vlad','Ira','Oleg','Sasha','Sveta','Alex','Max','Igor','Yaroslav','Ula'];
// let arr1 = arr.sort();
// console.log(arr1);
//  b) Відсортувати в зворотньому порядку
// let arr= ['Vlad','Ira','Oleg','Sasha','Sveta','Alex','Max','Igor','Yaroslav','Ula'];
// let arr1 = arr.sort((a,b)=>{
//     if(a<b){
//         return 1;
//     }
//     return -1;
// });
// console.log(arr1);
//  c) Отримати в новому масиві тільки ті слова, довжина яких більша за 4 букви (filter)
// let arr= ['Vlad','Ira','Oleg','Sasha','Sveta','Alex','Max','Igor','Yaroslav','Ula'];
// let arr1 =arr.filter(name => {
//     return name.length > 4;
// })
// console.log(arr1);
//  d) Змінити кожне слово в масиві додавши на початок 'Sam says *ваше слово*'
//  let arr= ['Vlad','Ira','Oleg','Sasha','Sveta','Alex','Max','Igor','Yaroslav','Ula'];
//  let arr1 = [];
// arr.forEach(value => {
//     value = `Sam says ${value}`;
//     arr1.push(value);
// });
// arr.map(value => {
//     value = `Sam says ${value}`;
//     arr1.push(value);
// })
// console.log(arr1);


// 3) Все робити тільки за допомогою методів масивів!
// Дано масив :
// const users = [
//    {name: 'vasya', age: 31, isMarried: false},
//    {name: 'petya', age: 30, isMarried: true},
//    {name: 'kolya', age: 29, isMarried: true},
//    {name: 'olya', age: 28, isMarried: false},
//    {name: 'max', age: 30, isMarried: true},
//    {name: 'anya', age: 31, isMarried: false},
//    {name: 'oleg', age: 28, isMarried: false},
//    {name: 'andrey', age: 29, isMarried: true},
//    {name: 'masha', age: 30, isMarried: true},
//    {name: 'olya', age: 31, isMarried: false},
//    {name: 'max', age: 31, isMarried: true}
// ];
// a) відсортувати його за  віком (зростання , а потім окремо спадання)
// b) відсортувати його за кількістю знаків в імені  (зростання , а потім окремо спадання)
// c) пройтись по ньому та додати кожному юзеру поле id - яке характеризує унікальний індентифікатор (По якому принципу його створювати - ваше рішення),
//    та зберегти це в новий масив (первинний масив залишиться без змін)
// d) відсортувати його за індентифікатором
// e) Всі хто одружений мають попасти у новий масив та отрмати квартиру (reduce)