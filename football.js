let score = [0,1]

var t1 = {
    name: "Real Madrid",
    runs: [],
    score: 0
}

var t2 = {
    name: "Heusca",
    runs: [],
    score: 0
}

var turn;

window.onload = () =>{
    selectTurn();
    updateButton();
    updateScore();
    updateRuns()
}
selectTurn = () =>{
    turn = Math.round(Math.random())+1;
}

function updateButton(){
    var button = document.getElementById("button")
    var result = document.getElementById("result")
    result.style.visibility="";
    button.textContent = turn === 1 ? t1.name +' Strike' : t2.name +' Strike'
    if(t1.runs.length==6 && t2.runs.length==6){
        button.remove();
        result.textContent= t1.score===t2.score ? 'Draw': t1.score>t2.score?t1.name +" Wins": t2.name +" Wins"
    }
    else{
        turn = t1.runs.length===6?2:t2.runs.length===6?1 : turn;
    }
        
}
updateScore = ()=>{
    document.getElementById("t1-score").textContent = t1.score;
    document.getElementById("t2-score").textContent = t2.score;
}
var handleStrikeButton = ()=>{
    var runs =score[Math.floor(Math.random()* score.length)]
    if(turn===1){
        t1.runs.push(runs)
        t1.score=calScore(t1.runs)
        console.log(t1.score)
    }
    else{
        t2.runs.push(runs)
        t2.score=calScore(t2.runs)
        console.log(t2.score)
    }
    updateButton();
    updateRuns();
    updateScore();

}
var calScore =(runs)=>{
    return runs.map(run =>{
        return run;
        }
    )
    .reduce((total, runs)=> total+runs)

}
updateRuns = ()=>{
    var t1RoundElement = document.getElementById("t1-round-runs").children;
    var t2RoundElement = document.getElementById("t2-round-runs").children;
    t1.runs.forEach((run, index)=>{
        t1RoundElement[index].textContent =run;
        if(run==0)
        t1RoundElement[index].style.background="red"
        else if(run==1)
        t1RoundElement[index].style.background="green"
        
    })
    t2.runs.forEach((run, index)=>{
        t2RoundElement[index].textContent =run;
        if(run==0)
        t2RoundElement[index].style.background="red"
        else if(run==1)
        t2RoundElement[index].style.background="green"
        
    })
}


