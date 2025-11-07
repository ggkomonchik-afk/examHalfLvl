//Level 1
// let name = prompt('Ism yozing')

// alert(`Salom ${name}`)

// let age = prompt('yoshizni yozing')

// if (age > 17) {
//     alert('Вы совершеннолетний')
//     console.log('Вы совершеннолетний');
// } 
// else {
//     alert('Вы не совершеннолетний')
//     console.log('Вы не совершеннолетний');
    
// }

//level 2
// let name2 = prompt('Ism yozing').trim()
// let year = prompt('Hozirgi yilni yozing').trim()
// let birthYear = prompt('Tug‘ilgan yilizni yozing').trim()

// let age = year - birthYear
// let randomId = Math.round(Math.random() * 1000000)

// let category = ''

// if (age >= 0 && age <= 10) {
//   category = 'ребёнок';
// } else if (age >= 11 && age <= 17) {
//   category = 'подросток';
// } else if (age >= 18 && age <= 50) {
//   category = 'взрослый';
// } else if (age >= 51 && age <= 100) {
//   category = 'пожилой человек';
// } else {
//   category = 'более высокий возраст'
// }

// let object = {
//     name:name2,
//     age:age,
//     id:randomId,
//     category:category
// }

// alert(`Привет, ${name2}! Тебе ${age} лет, ты — ${category}. Твой ID: ${randomId}`)

// console.log(object);

//level 3
let name3 = prompt('Ism yozing').trim()
let yearRn = prompt('Hozirgi yilni yozing').trim()
let birthYears = prompt('Tug‘ilgan yilizni yozing').trim()
let city = prompt('Shaxarizni yozing').trim()

let age = yearRn - birthYears
let randomId = Math.round(Math.random() * 1000000)

let objectTwo = {
    name:name3,
    age:age,
    id:randomId,
    city:city,
    birthYears:birthYears,
    yearRn:yearRn
}

console.log(objectTwo);

alert(`Привет, ${name2}! Тебе ${age} лет и твой город ${city}. Твой ID: ${randomId}`)