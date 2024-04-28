
// Define JSON payload
let fav_games = {
    "games": [
        { "title": "Stardew Valley", "description": "Farming Sim", "price": 14.99 },
        { "title": "Fallout New Vegas", "description": "Action Roleplay", "price": 9.99 },
        { "title": "Minecraft", "description": "Sandbox", "price": 29.99 },
        { "title": "Dave the Diver", "description": "Casual RPG", "price": 19.99 },
        { "title": "Omori", "description": "Psychological Horror RPG", "price": 19.99 },
        { "title": "Noita", "description": "Platform Roguelike", "price": 19.99 },
        { "title": "Spelunky 2", "description": "Platform Roguelike", "price": 19.99 },
        { "title": "Persona 3 Reload", "description": "Adventure/Stategy RPG", "price": 69.99 },
    ]
};

let jsonString = JSON.stringify(fav_games);

fav_games = JSON.parse(jsonString);

const table = document.getElementById("games");

// Loop through all of the items in the JSON and extract the data and put it into a table
