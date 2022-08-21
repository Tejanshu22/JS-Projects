let score = 0;
cross = true;

audio = new Audio('tof.mp3');
setTimeout(() => {
    audio.play();
}, 100);

document.onkeydown = function(event){

    console.log("Key code is : ", event.keyCode);

    if(event.keyCode === 38){
        player = document.querySelector('.player');
        player.classList.add('animatePlayer');
        setTimeout(() => {
            player.classList.remove('animatePlayer')
        }, 700);
    }

    if(event.keyCode === 39){
        player = document.querySelector('.player');
        playerX = parseInt(window.getComputedStyle(player, null).getPropertyValue('left'));
        player.style.left = playerX + 120+"px";
    }
    if(event.keyCode === 37){
        player = document.querySelector('.player');
        playerX = parseInt(window.getComputedStyle(player, null).getPropertyValue('left'));
        player.style.left = (playerX - 120)+"px";
    }

}

setInterval(()=>{
    player = document.querySelector('.player');
    gameOver = document.querySelector('.gameOver');
    obstacle = document.querySelector('.obstacle');

    px = parseInt(window.getComputedStyle(player, null).getPropertyValue('left'));
    py = parseInt(window.getComputedStyle(player, null).getPropertyValue('top'));

    ox = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('left'));
    oy = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('top'));

    offsetX = Math.abs(px-ox);
    offsetY = Math.abs(py-oy);
    console.log(offsetX , offsetY);

    if(offsetX < 75 && offsetY <52){
        gameOver.style.visibility = 'visible';
        obstacle.classList.remove('obstacleAni');
        player.classList.remove('player');
        audio.pause();
    }
    else if(offsetX < 145 && cross){
        score+=5;
        UpdateScore(score);
        cross = false;
        setTimeout(() => {
            cross = true;
        }, 1000);
    }
},10);

function UpdateScore(score)
{
    scoreCount.innerHTML= "Your Score: " + score;
}
