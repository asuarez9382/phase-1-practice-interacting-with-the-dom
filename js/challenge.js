//Selects counter from html
const counter = document.querySelector("#counter")

//Increments counter by one every second
let sec = 0
let isPaused = false;

function myTimer() {
    return setInterval(() => {
        counter.innerHTML = sec
        sec += 1
    }, 1000)
    
}
let timer = myTimer()





//handles increment
function handleIncrement() {
    sec += 1
    counter.innerHTML = sec
}

//handle decrement
function handleDecrement() {
    sec -= 1
    counter.innerHTML = sec
}

//handles like
function handleLike() {
    const likeList = document.querySelector(".likes")
    let like = document.createElement("li")
    like.innerHTML = `The number ${counter.innerHTML} has been liked.`;
    likeList.appendChild(like)
}

//Grabs plus from html and adds an increment event listener
const plus = document.querySelector("#plus")
plus.addEventListener("click", handleIncrement)

//Grabs minus from html and adds a decrement event listener
const minus = document.querySelector("#minus")
minus.addEventListener("click", handleDecrement)

//Likes a specific number and adds to the list
const heart = document.querySelector("#heart")
heart.addEventListener("click", handleLike)

//Pauses the counter
const pause = document.querySelector('#pause')
pause.addEventListener("click", () => {
    if(isPaused){
        //Resumes counter
        isPaused = false;
        pause.innerHTML = "pause"
        timer = myTimer()
        plus.addEventListener("click", handleIncrement)
        minus.addEventListener("click", handleDecrement)
        heart.addEventListener("click", handleLike)
        
    }
    else {
        //Pauses counter
        isPaused = true;
        pause.innerHTML = "resume"
        clearInterval(timer)
        plus.removeEventListener("click", handleIncrement, false)
        minus.removeEventListener("click", handleDecrement, false)
        heart.removeEventListener("click", handleLike, false)  
    }
    
    
})

//Submits form and adds it to the comment list
const form = document.querySelector("#comment-form")
form.addEventListener("submit", e => {
    e.preventDefault();
    const input = document.querySelector("#comment-input")
    const list = document.querySelector("#list")
    const comment = document.createElement("li")
    comment.innerHTML = input.value
    list.appendChild(comment)
})
