// Class for future updates

// class Pokemon{
//     constructor(name, healthPoints, speed, attack, defense, specialAttack, specialDefense, type) {
//         this.name = name;
//         this.healthPoints = healthPoints;
//         this.speed = speed;
//         this.attack = attack;
//         this.defense = defense;
//         this.specialAttack = specialAttack;
//         this.specialDefense = specialDefense;
//         this.type = type;
//         }
// }


//Pokemon 1
document.querySelector('#pokemon-1-button').addEventListener('click', selectPokemon1)

function selectPokemon1() {
    let pokemon = String(document.querySelector('#input-pokemon-1').value).toLowerCase();
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}/`)
        .then(res => res.json())
        .then(data => {
            console.log(data)

            document.querySelector('#pokemon-1-img').classList.remove('hidden');

            document.querySelector('#pokemon-1-img').src = data.sprites.back_default;
            document.querySelector('#pokemon-1-name').innerHTML = data.name[0].toUpperCase() + data.name.slice(1);
            document.querySelector('#pokemon-1-hp').innerHTML = `HP: ${data.stats[0].base_stat}`;
        })
        .catch(err => {
            console.log(`error ${err}`)
        })
}

// Pokemon 2
document.querySelector('#pokemon-2-button').addEventListener('click', selectPokemon2)

function selectPokemon2() {
    let pokemon = String(document.querySelector('#input-pokemon-2').value).toLowerCase();
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}/`)
        .then(res => res.json())
        .then(data => {
            console.log(data)

            document.querySelector('#pokemon-2-img').classList.remove('hidden');

            document.querySelector('#pokemon-2-img').src = data.sprites.front_default;
            document.querySelector('#pokemon-2-name').innerHTML = data.name[0].toUpperCase() + data.name.slice(1);
            document.querySelector('#pokemon-2-hp').innerHTML = `HP: ${data.stats[0].base_stat}`;
        })
        .catch(err => {
            console.log(`error ${err}`)
        })
}

