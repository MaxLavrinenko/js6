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
//     users.sort((a,b)=>{
//         return a.age-b.age
//     });
// b) відсортувати його за кількістю знаків в імені  (зростання , а потім окремо спадання)
// users.sort((a,b)=>{
//     return a.name.length-b.name.length
// });
//////////////////////////////////////////
// users.sort((a,b)=>{
//     console.log(a.name.length);
//     return b.name.length-a.name.length
// })
//
// c) пройтись по ньому та додати кожному юзеру поле id - яке характеризує унікальний індентифікатор
// (По якому принципу його створювати - ваше рішення),
//    та зберегти це в новий масив (первинний масив залишиться без змін)
// const usersWithId = users.map((value,index) => ({...value,id:index+1}));
// // d) відсортувати його за індентифікатором
// usersWithId.sort((a,b)=>{
//     return b.id - a.id
// });
// // e) Всі хто одружений мають попасти у новий масив та отрмати квартиру (reduce)
// const usersWithFlat = users.reduce((acc,value)=>{
//    if(value.isMarried === true){
//       value.flat = true;
//       acc.push(value);
//    }
//    return acc;
// },[]);
// console.log(usersWithFlat);
//////////////////

// const cars = [
//    {producer:"subaru",model: "wrx",year: 2010, color:"blue",type: "sedan",engine: "ej204x",volume: 2,power: 400},
//    {producer:"subaru",model: "legacy",year: 2007, color:"silver",type: "sedan",engine: "ez30",volume: 3,power: 250},
//    {producer:"subaru",model: "tribeca",year: 2011, color:"white",type: "jeep",engine: "ej20",volume: 2,power: 300},
//    {producer:"subaru",model: "leone",year: 1998, color:"yellow",type: "sedan",engine: "ez20x",volume: 2,power: 140},
//    {producer:"subaru",model: "impreza",year: 2014, color:"red",type: "sedan",engine: "ej204x",volume: 2,power: 200},
//    {producer:"subaru",model: "outback",year: 2014, color:"red",type: "hachback",engine: "ej204",volume: 2,power: 165},
//    {producer:"bmw",model: "115",year: 2013, color:"red",type: "hachback",engine: "f15",volume: 1.5,power: 120},
//    {producer:"bmw",model: "315",year: 2010, color:"white",type: "sedan",engine: "f15",volume: 1.5, power: 120},
//    {producer:"bmw",model: "650",year: 2009, color:"black",type: "coupe",engine: "f60",volume: 6,power: 350},
//    {producer:"bmw",model: "320",year: 2012, color:"red",type: "sedan",engine: "f20",volume: 2,power: 180},
//    {producer:"mercedes",model: "e200",year: 1990, color:"silver",type: "sedan",engine: "eng200",volume: 2,power: 180},
//    {producer:"mercedes",model: "e63",year: 2017, color:"yellow",type: "sedan",engine: "amg63",volume:3,power: 400},
//    {producer:"mercedes",model: "c250",year: 2017, color:"red",type: "sedan",engine: "eng25",volume: 2.5,power: 230}
// ];
//
// Відфільтрувати масив за наступними крітеріями :
// - двигун більше 3х літрів
//     const normMotor = [];
//     cars.filter(value =>{value.volume >= 3? normMotor.push(value): console.log('malovato');})
//     console.log(normMotor);
// - двигун = 2л
// const paketMoloka = [];
// cars.filter(value => {value.volume === 2? paketMoloka.push(value):console.log('ne 2.0');});
// console.log(paketMoloka);
// - виробник мерс
// const daimler = [];
// cars.filter(value => { value.producer ==='mercedes'? daimler.push(value): console.log('ne mercedes')});
// console.log(daimler);
// - двигун більше 3х літрів + виробник мерседес
// cars.filter(value => {
//    if(value.volume >= 3 && value.producer === 'mercedes'){
//       console.log(value);
//    }
// });
// - двигун більше 3х літрів + виробник субару
// cars.filter(value => {
//    if(value.volume >= 3 && value.producer === 'subaru'){
//       console.log(value);
//    }
// });
// - сили більше ніж 300
// cars.filter(value => {
//    if(value.power >= 300){
//       console.log(value);
//    }
// });
// - сили більше ніж 300 + виробник субару
// cars.filter(value => {
//    if(value.power >= 300 && value.producer === 'subaru'){
//       console.log(value);
//    }
// });
// - мотор серіі ej
// cars.filter(value => {
//  if(value.engine.startsWith('ej')){
//     console.log(value);
//  }
// });
// - сили більше ніж 300 + виробник субару + мотор серіі ej
// cars.filter(value => {
//    if(value.power >= 300 && value.producer === 'subaru' && value.engine.startsWith('ej')){
//       console.log(value);
//    }
// });
// - двигун меньше 3х літрів + виробник мерседес
// cars.filter(value => {
//    if(value.volume >= 3 && value.producer === 'mercedes'){
//       console.log(value);
//    }
// });
// - двигун більше 2л + сили більше 250
// cars.filter(value => {
//    if(value.volume >= 2 && value.power >= 250){
//       console.log(value);
//    }
// });
// - сили більше 250  + виробник бмв
// cars.filter(value => {
//    if (value.power >= 250 && value.producer === 'bmw'){
//       console.log(value);
//    }
// });

//- взять слдующий массив
// const usersWithAddress = [
//    {id: 9, name: 'vasya', age: 31, isMarried: false, address: {city: 'Kyiv', street: 'Gongadze', number: 16}},
//    {id: 2, name: 'petya', age: 30, isMarried: true, address: {city: 'Rivne', street: 'Zelena', number: 1}},
//    {id: 4, name: 'kolya', age: 29, isMarried: true, address: {city: 'Lviv', street: 'Pasichna', number: 121}},
//    {id: 3, name: 'olya', age: 28, isMarried: false, address: {city: 'Rivne', street: 'Shevchenko', number: 90}},
//    {id: 8, name: 'max', age: 30, isMarried: true, address: {city: 'Lviv', street: 'Kriva Lipa', number: 115}},
//    {id: 6, name: 'anya', age: 31, isMarried: false, address: {city: 'Lviv', street: 'Shevchenko', number: 2}},
//    {id: 10, name: 'oleg', age: 28, isMarried: false, address: {city: 'Kyiv', street: 'Centralna', number: 22}},
//    {id: 5, name: 'andrey', age: 29, isMarried: true, address: {city: 'Lviv', street: 'Gorodotska', number: 43}},
//    {id: 1, name: 'masha', age: 30, isMarried: true, address: {city: 'Kyiv', street: 'Peremogi', number: 12}},
//    {id: 7, name: 'olya', age: 31, isMarried: false, address: {city: 'Lviv', street: 'Naukova', number: 16}},
//    {id: 11, name: 'max', age: 31, isMarried: true, address: {city: 'Rivne', street: 'Ivana Franka', number: 121}}
// ];
//
// -- Відсортувати їх по ID
// usersWithAddress.sort((a,b)=>{
//    return a.id - b.id
// });
// -- Відсортувати їх по ID в зворотньому порядку
// usersWithAddress.sort((a,b)=>{
//    return b.id -a.id;
// });
// -- Відсортувати по віку
// usersWithAddress.sort((a,b)=>{
//    return a.age - b.age;
// });
// -- Відсортувати по віку в зворотньому порядку
// usersWithAddress.sort((a,b)=>{
//    b.age-a.age;
// });
// -- Відсорутвати по імені
// usersWithAddress.sort((a,b)=>{
//    if(a.name > b.name){
//       return 1;
//    }
//    return -1;
// });
// -- Відсорутвати по назві вулиці
// usersWithAddress.sort((a,b)=>{
//    if (a.address.street > b.address.street){
//       return 1;
//    }
//    return -1;
// });
// -- Відсорутвати по номеру будинку
// usersWithAddress.sort((a,b)=>{
//    return a.address.number - b.address.number;
// });
// -- Залигити тільки тих, хто молодший ніж 30 (filter)
// const younger = [];
// usersWithAddress.filter(value => {
//    if(value.age < 30){
//       younger.push(value);
//    }
// });
// -- Залишити тільки одружених
// const married = [];
// usersWithAddress.filter(value => {
//    if(value.isMarried === true){
//      married.push(value);
//    }
// });
// -- Залишити тільки одружених, які молодні за 30
// const justMaried=[];
// usersWithAddress.filter(value => {
//    if(value.isMarried === true && value.age < 30){
//       justMaried.push(value);
//    }
// });
// -- Залишити лише тих, в кого парні номери будинків.
// const parniadd = [];
// usersWithAddress.filter(value => {
//    if(value.address.number % 2 === 0){
//       parniadd.push(value);
//    }
// });
// -- Порахувати загальний вік всіх людей. (reduce)
// let res = usersWithAddress.reduce((acc,user)=>{
//    return acc +user.age;
// },0)
// -- Ті, хто одружений і старий за 30 має отримати обєкти child і попасти в новий масив (reduce)
// const oldMarried = usersWithAddress.reduce((acc,user)=>{
//    if(user.isMarried === true && user.age >= 30){
//       user.child = {name: user.id +1};
//      acc.push(user)
//    } return acc;
// },[])
// console.log(oldMarried);