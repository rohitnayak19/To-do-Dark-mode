const games = [
  { title: "The Legend of Zelda: Breath of the Wild", genre: ["Adventure", "Action"] },
  { title: "FIFA 23", genre: ["Sports"] },
  { title: "Minecraft", genre: ["Adventure", "Simulation"] },
  { title: "Call of Duty: Modern Warfare", genre: ["Shooter", "War", "Action"] },
  { title: "Rocket League", genre: ["Sports", "Action"] },
  { title: "Assassin's Creed Valhalla", genre: ["Adventure", "Action"] },
  { title: "The Witcher 3: Wild Hunt", genre: ["Adventure", "Action"] },
  { title: "Total War: Warhammer III", genre: ["Strategy", "War", "Simulation"] },
  { title: "Animal Crossing", genre: ["Simulation", "Casual"] },
//   { title: "Minecraft", genre: ["Sandbox", "Survival"] },
  { title: "Don't Starve", genre: ["Survival", "Adventure"] },
];


const gameGenre = document.getElementById('filter-games')
const searchGenre = document.getElementById('search-game')
const list = document.getElementById('list');
function displayGames(games){
    list.innerHTML =""
    games.forEach((game) =>{
        let li = document.createElement('li')
        li.innerHTML = `${game.title}`
        list.appendChild(li)
    })
}

// console.log(gameGenre.value);

function filteredGames(){
    const selectedGenre = gameGenre.value
    const selectedSearch = searchGenre.value
    console.log(selectedGenre);
    const filtredGame = games.filter((game) =>{
        const matchSearch = game.title.toLowerCase().includes(selectedSearch)
       const matchGenre = selectedGenre === 'all' || game.genre.includes(selectedGenre)
       return matchGenre && matchSearch
    })

    console.log(filtredGame);
    
    displayGames(filtredGame)
}
gameGenre.addEventListener('change', filteredGames)
searchGenre.addEventListener('input' ,filteredGames)

displayGames(games)