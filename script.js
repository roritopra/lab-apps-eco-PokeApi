function obtenerPikachu () {
    apiURL = ('https://pokeapi.co/api/v2/pokemon/pikachu')
    fetch (apiURL)
    .then(res=>res.json())
    .then(resJson=> {
        const gif = resJson.sprites.versions['generation-v']['black-white'].animated.front_default;
        const name = resJson.forms[0].name


        mostrarPikachu(gif, name)
        console.log(gif, name)
        
    })
    .catch(error=>error)
}

obtenerPikachu()

function mostrarPikachu(gif, name) {
    const pikachu = document.querySelector('.pikachu')
    pikachu.innerHTML = `

    <div class="pikachu-container">
        <h2> ${name} </h2>
        <img src=" ${gif} " alt="">
    </div>
    `
}

function obtenerCharmander() {
    apiURL = ('https://pokeapi.co/api/v2/pokemon/charmander')
    fetch (apiURL)
    .then(res=>res.json())
    .then(resJson=> {
        const gif = resJson.sprites.versions['generation-v']['black-white'].animated.front_default;
        const name = resJson.forms[0].name
        mostrarCharmander(gif, name)
        console.log(gif)
    })

    .catch(error=>error)
} 

obtenerCharmander()


function mostrarCharmander(gif, name) {
    const charmander = document.querySelector('.charmander')
    charmander.innerHTML = `

    <div class="pikachu-container">
        <h2> ${name} </h2>
        <img src=" ${gif} " alt="">
    </div>
    `
}

function obtenerBulbasaur() {
    apiURL = ('https://pokeapi.co/api/v2/pokemon/bulbasaur')
    fetch (apiURL)
    .then(res=>res.json())
    .then(resJson=> {
        const gif = resJson.sprites.versions['generation-v']['black-white'].animated.front_default;
        const name = resJson.forms[0].name
        mostrarBulbasaur(gif, name)
        console.log(gif)
    })

    .catch(error=>error)
} 

obtenerBulbasaur()

function mostrarBulbasaur(gif, name) {
    const bulbasaur = document.querySelector('.bulbasaur')
    bulbasaur.innerHTML = `

    <div class="pikachu-container">
        <h2> ${name} </h2>
        <img src=" ${gif} " alt="">
    </div>
    `
}

function obtenerSquirtle() {
    apiURL = ('https://pokeapi.co/api/v2/pokemon/squirtle')
    fetch (apiURL)
    .then(res=>res.json())
    .then(resJson=> {
        const gif = resJson.sprites.versions['generation-v']['black-white'].animated.front_default;
        const name = resJson.forms[0].name
        mostrarSquirtle(gif, name)
        console.log(gif)
    })

    .catch(error=>error)
} 

obtenerSquirtle()

function mostrarSquirtle(gif, name) {
    const squirtle = document.querySelector('.squirtle')
    squirtle.innerHTML = `

    <div class="pikachu-container">
        <h2> ${name} </h2>
        <img src=" ${gif} " alt="">
    </div>
    `
}