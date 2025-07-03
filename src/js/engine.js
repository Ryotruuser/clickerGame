state = {
    view: {
        time: document.querySelector('.timer-value'),
        score: document.querySelector('.rank-value'),
        rank: document.querySelector('.score-value'),
        motivation: document.querySelector('.motivation-text'),
    },
    values:{
        time: 100,
        points:0,
        playerName: "",
        rank: "",
    }
}


getPlayerData = (name) => {
    state.values.playerName = prompt("Qual o sue nome forasteiro? ");
   
}

playGame = () => {
    console.log(state.values.playerName)
}







function init(){
    getPlayerData(state.values.playerName);
}

init();
