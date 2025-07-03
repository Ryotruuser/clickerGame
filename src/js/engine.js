state = {
    view: {
        timer: document.querySelector('.timer-value'),
        score: document.querySelector('.score-value'),
        rank: document.querySelector('.rank-value'),
        motivation: document.querySelector('.motivation-text'),
    },
    values:{
        time: 100,
        points:0,
        playerName: "",
        rank: "",
    },
    actions: {
        timerId: null,
        countDownTimer: setInterval(countdown, 1000),
    }
}

function pointsCount(){
    state.values.points++;
    state.view.score.textContent = state.values.points;
}

function countdown (){
    state.values.time --;
    state.view.timer.textContent = state.values.time;
}



function getPlayerData() {
    state.values.playerName = prompt("Qual o sue nome forasteiro? ");
   
}

function playGame(){
    let title = document.querySelector('.title');
    let subtitle = document.querySelector('.subtitle');
    let playBtn = document.querySelector('.playBtn');
    let btnClicker = document.querySelector('.clickBtn');
    let footerText = document.querySelector('.click-text');
    title.classList.add('hide');
    subtitle.classList.add('hide');
    playBtn.classList.add('hide');
    btnClicker.classList.remove('hide');
    footerText.classList.remove('hide');
    playBtn.disabled = true;
    playBtn.style.cursor = 'default';
}



function init(){
    getPlayerData();
}

// init();
