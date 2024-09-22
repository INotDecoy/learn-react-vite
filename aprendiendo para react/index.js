/* const ul = document.createElement('ul') */
/* fetch('https://jsonplaceholder.typicode.com/posts')
.then(function (response){
    return response.json()
}).then(function (data) {
    console.log(data)
    let i = 0
    data.forEach(function (post){
        const li = document.createElement('li')
        i += 1
        li.innerText = post.title
        ul.append(li)

        li.style = ('margin: 10px;')
    
        })
        ul.style = ('background: lightgray; border-radius: 1rem; color: darkblue; ')
        document.body.append(ul);
        
    }) */
/* async function loadData(){
    const response = await fetch ("https://jsonplaceholder.typicode.com/posts")
 
    const data = await response.json()
    data.forEach(function (post){
        const li = document.createElement('li')
        li.innerText = post.title
        ul.append(li)

        li.style = ('margin: 10px;')

        })
        ul.style = ('background: lightgray; border-radius: 1rem; color: darkblue; ')
        document.body.append(ul);
    }


loadData()
console.log() */


/* const person = {
    name:'ryan',
    address:{
        city:'london'
    },
    location: {}
}
console.log(person.location?.city)
 */
/* import addModule from "./add.j s";

console.log(addModule)
 */
/* const user = {
    name:"ryan",
    lastname:"ray"
}

const address = {
    street:"main street 123",
    city:"santiago"
}

const userInfo ={
    ...user,
    ...address
}
console.log(user)
console.log(address)
console.log(userInfo)

 */

/* 
const names = ['ryan','joe','maria']
const newNames = ['marcos','mario','lila']
// Formas de concantenar
console.log([...names,...newNames])
console.log(names.concat(newNames))
 */
// for (let i = 0; i < names.length; i++) {
//     const element = names[i];
//     console.log(element)
// }
/* 

//Entra el arreglo anterior y se puede alterar 
const newNames = names.map(function (name){
    return `Hola ${name}`
})


//Encontrar un objeto para sacarlo del arreglo
const nameFound = names.find(function  (name){
    if (name === 'joe'){
        return name
    }
})
// Filtrar nombres , para crear un nuevo arreglo
const nameFilter = names.filter(function  (name){
    if (name !== 'joe'){
        return name
    }
})
console.log(names)
console.log(nameFilter ) */

/* const background ='orange'
const color = 'blue'
const isAuthorized = false;

const button = document.createElement('button');
button.innerText = 'Click me'
button.style = `background: ; color: white;`
button.style = `background:${isAuthorized ? 'peru': background}; color: $;`




button.addEventListener('click',() =>{
    if (isAuthorized){
        return alert('Clickeado')
    }
    alert("No esta autorizado")
})
document.body.append(button)

 */
/* const showText = () => {
    return 'Hola mundo'
}
const showNumber = () => 22;
const showBoolean = () => true;
const showArray = () => [1,2,3];
const showObject = () =>({name:'ryan'})

console.log(showText())
console.log(showNumber())
console.log(showBoolean())
console.log(showArray())
console.log(showObject()) */



/* function add(x,y){
    return x + y
}
const add = (x , y)=> {
    return x + y 
} */


/* const user = {
    name: 'joe',
    age: 30
}

function printInfo(user){
    const {name, age} = user;

    console.log(name,age);
    return '<h1>Hola '+ age +'</h1>'
}

console.log(printInfo(user))

document.body.innerHTML = printInfo(user)
 */
/* const title = document.createElement('h1')
title.innerText = "Hola mundo"
document.body.append(title)

const btn = document.createElement('button')
btn.innerText = "Enviar"
document.body.append(btn)

btn.addEventListener('click', function(){
    let parrafo = document.createElement('p')
    parrafo.innerText = 'Mofongo'
    alert('Se creo un Mofongo')
    document.body.append(parrafo)
})

const btn2 = document.createElement('button')
btn2.innerText = "Borrar todo"
document.body.append(btn2)

btn2.addEventListener('click', function(){
    let nuevo = document.querySelector('p')
    nuevo.remove('p');

})
 */
 