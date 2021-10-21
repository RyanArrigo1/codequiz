const questions = [
    {
        question:"Commonly used data types do not include?", 
        choices:["Strings", "Booleans", "Alerts", "Numbers"],
        answer:"Alerts"
    },

    {
        question:"Commonly used data types do not include?", 
        choices:["Strings", "Booleans", "Alerts", "Numbers"],
        answer:"Alerts"   
    },

    {
        question:"Commonly used data types do not include?", 
        choices:["Strings", "Booleans", "Alerts", "Numbers"],
        answer:"Alerts"
    },

    {
        question:"Commonly used data types do not include?", 
        choices:["Strings", "Booleans", "Alerts", "Numbers"],
        answer:"Alerts"
    },

    {
        question:"Commonly used data types do not include?", 
        choices:["Strings", "Booleans", "Alerts", "Numbers"],
        answer:"Alerts"
    },
]

startGame()

function startGame() {
    var questionEl = document.querySelector("#questions")
    var startButton = document.createElement("h1")
    startButton.setAttribute("id", "start-button")
    startButton.textContent = "Start Game"
    document.body.append(startButton)
}

