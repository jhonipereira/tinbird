import Bird from './Bird.js';
import data from './data.js';

let currentBirdIndex = 0

let currentBird = new Bird(data[currentBirdIndex])

function render(){
    if(currentBird.name){
    document.getElementById('card').innerHTML = currentBird.getBirdHtml()
    }
    else{
        document.getElementById('card').innerHTML = `<h2 class="text-center" style="margin-top: 15vh; color: grey; padding: 10px;">No birds available at the moment. Check this page again in the future! 🦉</h2>
        `
        document.getElementById('actions').style.display = "none"
    }
}

function getNewBird() {
    resetAnimation();
    currentBirdIndex += 1
    currentBird = new Bird(data[currentBirdIndex])
    render()
}

function accept() {
    currentBird.setMatchStatus(true)
    animateMatch('accept')
    setTimeout( ()=> getNewBird(), 1500 )
}

function reject() {
    currentBird.setMatchStatus(false)
    animateMatch('reject')
    setTimeout( ()=> getNewBird(), 1500 )
}

function resetAnimation(){
    document.querySelectorAll('#animations img').forEach(function(e){
        e.classList.remove('animate');
    })
}

function animateMatch(status){
    const animationId = status+"-anim";
    resetAnimation();
    document.getElementById(animationId).classList.add('animate')
}

document.getElementById('accept-button').addEventListener('click', () => { accept() })
document.getElementById('reject-button').addEventListener('click', () => { reject() })

render()