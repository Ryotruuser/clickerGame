state = {
    view: {
        timer: document.querySelector('.timer-value'),
        score: document.querySelector('.score-value'),
        rank: document.querySelector('.rank-value'),
        motivation: document.querySelector('.motivation-text'),
        gameOverText: document.querySelector('.gameover-message'),
        rankText: document.querySelector('.gm-over-text'),
        rankMsg: document.querySelector('.gm-over-rank-msg'),
    },
    values:{
        time: 250,
        points:0,
        playerName: "",
        rank: {
            ferro: 0,
            bronze: 200,
            prata: 500,
            ouro: 700,
            platina: 800,
            ascendente: 900,
            imortal: 1000,
            radiante: 1100,
        },
        rankAtual: "",
    },
    actions: {
        timerId: null,
        countDownTimer: null,
    }
}

function rankVerify(points){
    if(points >= 0 && points <= 99){
        state.values.rankAtual = 'ferro';
    }

    if(points >= 100 && points <= 200){
        state.view.rank.classList.remove("ferro");
        state.view.rank.classList.add("bronze");
        state.view.rank.textContent = "bronze";
        state.values.rankAtual = state.view.rank.textContent;
    }else if(points >= 500 && points <= 699){
        state.view.rank.classList.remove("bronze");
        state.view.rank.classList.add("prata");
        state.view.rank.textContent = "prata";
        state.values.rankAtual = state.view.rank.textContent;
    }else if(points >= 700 && points <= 799 ){
        state.view.rank.classList.remove("prata");
        state.view.rank.classList.add("ouro");
        state.view.rank.textContent = "ouro";
        state.values.rankAtual = state.view.rank.textContent;
    }else if(points >= 800 && points <= 899){
        state.view.rank.classList.remove("ouro");
        state.view.rank.classList.add("platina");
        state.view.rank.textContent = "platina";
        state.values.rankAtual = state.view.rank.textContent;
    }else if(points >= 900 && points <= 999){
        state.view.rank.classList.remove("platina");
        state.view.rank.classList.add("ascendente");
        state.view.rank.textContent = "ascendente";
        state.values.rankAtual = state.view.rank.textContent;
    }else if(points >= 1000 && points <= 1099){
        state.view.rank.classList.remove("ascendente");
        state.view.rank.classList.add("imortal");
        state.view.rank.textContent = "imortal";
        state.values.rankAtual = state.view.rank.textContent;
    }else if(points >= 1100){
        state.view.rank.classList.remove("imortal");
        state.view.rank.classList.add("radiante");
        state.view.rank.textContent = "radiante";
        state.values.rankAtual = state.view.rank.textContent;
    }
}

function pointsCount(){
    state.values.points++;
    state.view.score.textContent = state.values.points;
}

function gameOver(time){
    if(time === 0){
        clearInterval(state.actions.countDownTimer);
        state.actions.countDownTimer = null;
        playAgain();
        state.view.gameOverText.textContent = `Você tem um bom clique ${state.values.playerName} pegue seus ${state.values.points} pontos.`;
        const rankAtual = state.view.rankMsg;
        rankAtual.classList.remove('ferro','bronze', 'prata', 'ouro', 'platina', 'ascendente', 'imortal', 'radiante');
        rankAtual.classList.add(`${state.values.rankAtual}`);
        state.view.rankText.textContent = `Seu ultimo rank foi:`;
        state.view.rankMsg.textContent = ` ${state.values.rankAtual}`;
        state.view.rankText.classList.remove('hide');
        state.view.rankMsg.classList.remove('hide');
        state.view.gameOverText.classList.remove('hide');
        state.values.time = 250;
        state.values.points = 0;
        state.view.score.textContent = state.values.points;
        state.view.timer.textContent = state.values.time;
        state.view.rank.textContent = "Ferro";
        const listRanks = state.view.rank;
        listRanks.classList.remove('bronze', 'prata', 'ouro', 'platina', 'ascendente', 'imortal', 'radiante');
        listRanks.classList.add('ferro');
    }
}


function countdown (){
    state.values.time--;
    state.view.timer.textContent = state.values.time;
    gameOver(state.values.time);
    rankVerify(state.values.points, state.values.time);
}

function getPlayerData() {
    state.values.playerName = prompt("Qual o sue nome forasteiro? ");
   
}

function playAgain(){
    let title = document.querySelector('.title');
    let subtitle = document.querySelector('.subtitle');
    let playBtn = document.querySelector('.playBtn');
    let btnClicker = document.querySelector('.clickBtn');
    let footerText = document.querySelector('.click-text');
    title.classList.remove('hide');
    subtitle.classList.remove('hide');
    playBtn.classList.remove('hide');
    btnClicker.style.display = 'none';
    footerText.classList.add('hide');
    playBtn.disabled = false;
    playBtn.style.cursor = 'cursor';
}


function playGame(){
    state.view.gameOverText.classList.add('hide');
    let title = document.querySelector('.title');
    let subtitle = document.querySelector('.subtitle');
    let playBtn = document.querySelector('.playBtn');
    let btnClicker = document.querySelector('.clickBtn');
    let footerText = document.querySelector('.click-text');
    title.classList.add('hide');
    state.view.rankText.classList.add('hide');
    state.view.rankMsg.classList.add('hide');
    subtitle.classList.add('hide');
    playBtn.classList.add('hide');
    btnClicker.style.display = 'block';
    footerText.classList.remove('hide');
    playBtn.disabled = true;
    playBtn.style.cursor = 'default';
    if (state.actions.countDownTimer) {
        clearInterval(state.actions.countDownTimer);
    }
    state.actions.countDownTimer = setInterval(countdown, 1000);
    
}


function init(){
    getPlayerData();

}

init();
