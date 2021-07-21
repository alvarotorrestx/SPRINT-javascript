let character = document.getElementById('character');
let block = document.getElementById('block');
// Span to display Score #
const score = document.getElementById('score');
// ID to enable overlay of Alert
const alert = document.getElementById('alertOverlay');

let counter = 0;
function jump(){
    if( character.classList == 'animate'){return}
    character.classList.add('animate');
    setTimeout(function(){
        character.classList.remove('animate');
    }, 300);

    // If alert overylay is shown, no longer allow jump in background
    if (alert.style.display === 'flex') {
        character.classList.remove('animate');
    }
}

let checkDead = setInterval(function() {
    let characterTop = parseInt( window.getComputedStyle(character).getPropertyValue('top'));
    let blockLeft = parseInt( window.getComputedStyle(block).getPropertyValue('left'));


    if( blockLeft < 20 && blockLeft > -20 && characterTop>=130){
        block.style.animation = 'none';
        // If dead, display alert overlay
        alert.style.display = 'flex';
        // Ensures to check if alert is shown
        if (alert.style.display === 'flex') {
            // Set game score display
            score.innerHTML = Math.floor(counter/100);
            // Stop counter under game and displays score #
            document.getElementById('scoreSpan').innerHTML = Math.floor(counter/100);
        }
    }
    else{
        // If alert overlay is shown run
        if (alert.style.display === 'flex') {
            // Sets counter #, stops
            counter = counter;
            // Stop counter under game and displays score #
            document.getElementById('scoreSpan').innerHTML = Math.floor(counter/100);
        } else {
            counter++;
            document.getElementById('scoreSpan').innerHTML = Math.floor(counter/100);
        }
    }
}, 10);

// Function for stop button, gives thank message and offers to play again.
function stop() {
    document.getElementById('stop').style.display = 'none';
    document.getElementById('gameScoreText').innerHTML = `Thanks for playing! 😎<br>If you change your mind, here's the play button!<br>👇`;
    document.getElementById('continue').innerHTML = 'Play';
}