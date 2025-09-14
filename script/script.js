//part two
const greet = "hello";
function greeting(){
    console.log(greet)
}
greeting();

function greets(name){
    console.log("hello " + name)
}
greets("jane")

const discount = (perc_discount, marked_price) =>{
    return perc_discount/100 * marked_price
}
console.log("Discount is : "+discount(3, 1200))

//part three
const toggle = document.getElementById('toggleFlip');
const card = document.getElementById('card');

toggle.addEventListener('click', () => {
const isFlipped = card.classList.toggle('is-flipped');
toggle.setAttribute('aria-pressed', String(isFlipped));
});

//spinner
const spinner = document.getElementById('spinner');
const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const resetBtn = document.getElementById('resetBtn');

startBtn.addEventListener('click', () => {
    spinner.classList.add('running');
});

stopBtn.addEventListener('click', () => {
    spinner.classList.remove('running');
});