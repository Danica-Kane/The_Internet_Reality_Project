/* NOTE : this the js folder where essentially all of my javascript and jqueary is, controlling everthing from acsessibility
controls, to my game, to my navigation bar */

/* ---------------------------------------------------- */ 

/*  --- NAV BAR HAMBURGER ---  */

/* set nav bar varriables */
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

/* listen for hamburger icon being clicked on and toggle the contents list open */
hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

/* hide hamburder when not needed */
document.querySelectorAll(".nav-link").forEach((n) =>
    n.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    })
);

/* ---------------------------------------------------- */ 

/* --- ACSESSIBILITY CONTROLS ---  */

/* DYSLEXIA BUTTON TOGGLE FUNCTIONS  */

/* set variables for dyslexia toggle status */
const modeBtn1 = document.getElementById('mode1');

/* toggle dyslexia controls */
modeBtn1.onchange = (e) => {
  /* toggle on dyslexia control if applicable */
  if (modeBtn1.checked === true) {
    document.documentElement.classList.remove("fontRegular")
    document.documentElement.classList.add("fontDyslexia")
    /* set new toggle status */
    localStorage.setItem('mode1', 'fontDyslexia');
  } 
  /* toggle off dyslexia control if applicable */
  else {
    document.documentElement.classList.remove("fontDyslexia")
    document.documentElement.classList.add("fontRegular")
    /* set new toggle status */
    localStorage.setItem('mode1', 'fontRegular');
  }
}

/* set new dyslexia toggle status */
const mode1 = window.localStorage.getItem('mode1');

/* set toggle state on page reloads */
if (mode1 == 'fontDyslexia') {
  modeBtn1.checked = true;
  document.documentElement.classList.remove("fontRegular")
  document.documentElement.classList.add("fontDyslexia")
}

if (mode1 == 'fontRegular') {
  modeBtn1.checked = false;
  document.documentElement.classList.remove("fontDyslexia")
  document.documentElement.classList.add("fontRegular")
}

/* ---------------------------------- */

/* FONT SIZE TOGGLE FUNCTIONS  */

/* set variables for font size toggle status */
const modeBtn2 = document.getElementById('mode2');

/* toggle font size controls */
modeBtn2.onchange = (e) => {
   /* toggle on font size control if applicable */
  if (modeBtn2.checked === true) {
    document.documentElement.classList.remove("sizeRegular")
    document.documentElement.classList.add("sizeIncreased")
    /* set new toggle status */
    localStorage.setItem('mode2', 'sizeIncreased');
  } 
   /* toggle off font size control if applicable */
  else {
    document.documentElement.classList.remove("sizeIncreased")
    document.documentElement.classList.add("sizeRegular")
    /* set new toggle status */
    localStorage.setItem('mode2', 'sizeRegular');
  }
}

/* set new font size toggle status */
const mode2 = window.localStorage.getItem('mode2');

/* set toggle state on page reloads */
if (mode2 == 'sizeIncreased') {
  modeBtn2.checked = true;
  document.documentElement.classList.remove("sizeRegular")
  document.documentElement.classList.add("sizeIncreased")
}

if (mode2 == 'sizeRegular') {
  modeBtn2.checked = false;
  document.documentElement.classList.remove("sizeIncreased")
  document.documentElement.classList.add("sizeRegular")
}

/* ---------------------------------------------------- */ 

/* --- PARRALAX SCROLL --- */

/* set variables for parralax scroll (get image via class name from active html page) */
var image = document.getElementsByClassName("hero-banner");

/* apply simpleParallax extention to image variable */
new simpleParallax(image);

/* ---------------------------------------------------- */ 

/* --- FORM VALIDATION USING REGEX --- */

function validate() {
  
    var user = document.getElementById("validationCustom01").value;
    var user2 = document.getElementById("validationCustom01");
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    
    document.getElementById('contact_submit').disabled = true;
}

document.getElementById('contact_submit').disabled = true;
/* ---------------------------------------------------- */ 


/* --- GAME --- */

/* set game variables */
const start_btn = document.querySelector(".start_btn button");
const info_box = document.querySelector(".info_box");
const exit_btn = info_box.querySelector(".buttons .quit");
const continue_btn = info_box.querySelector(".buttons .restart");
const quiz_box = document.querySelector(".quiz_box");
const result_box = document.querySelector(".result_box");
const option_list = document.querySelector(".option_list");
const time_line = document.querySelector("header .time_line");
const timeText = document.querySelector(".timer .time_left_txt");
const timeCount = document.querySelector(".timer .timer_sec");

/* start button (activates info page on game.html page) */
start_btn.onclick = () => {
    info_box.classList.add("activeInfo");
}

/* info box buttons */
exit_btn.onclick = () => {
    info_box.classList.remove("activeInfo");
}

continue_btn.onclick = () => {
    /* activate game box (activates game box on game.html page), and set nessesary game variables */
    info_box.classList.remove("activeInfo");
    quiz_box.classList.add("activeQuiz");
    showQuetions(0);
    queCounter(1);
    startTimer(120);
    startTimerLine(0);
}

/* set intial game values */
let timeValue = 120;
let que_count = 0;
let que_numb = 1;
let userScore = 0;
let counter;
let counterLine;
let widthValue = 0;


/* set restart and exit quiz button variables */
const restart_quiz = result_box.querySelector(".buttons .restart");
const quit_quiz = result_box.querySelector(".buttons .quit");

/* restart button */
restart_quiz.onclick = () => {
    /*activate quiz and reset values */
    quiz_box.classList.add("activeQuiz");
    result_box.classList.remove("activeResult");
    timeValue = 120;
    que_count = 0;
    que_numb = 1;
    userScore = 0;
    widthValue = 0;
    showQuetions(que_count);
    queCounter(que_numb);
    clearInterval(counter);
    clearInterval(counterLine);
    startTimer(timeValue);
    startTimerLine(widthValue);
    next_btn.classList.remove("show");
}

/* quit quiz button */
quit_quiz.onclick = () => {
    window.location.reload();
}

/* set game box footer variables | next button and question id counter */
const next_btn = document.querySelector("footer .next_btn");
const bottom_ques_counter = document.querySelector("footer .total_que");

/* next button */
next_btn.onclick = () => {
    /* move to next question if avaliable and reset values */
    if (que_count < questions.length - 1) {
        que_count++;
        que_numb++;
        showQuetions(que_count);
        queCounter(que_numb);
        clearInterval(counter); 
        clearInterval(counterLine);
        startTimer(timeValue);
        startTimerLine(widthValue);
        next_btn.classList.remove("show");
    } 
    /* move on to results page if no more questions */
    else {
        clearInterval(counter);
        clearInterval(counterLine);
        showResult();
    }
}

/* set image and audio variables */
var gameImg;
var audioElem2 = document.getElementById('audio2');

/* getting questions and options from array */
function showQuetions(index) {

    /* select question images and pass into game.html */
    if (questions[index].numb == 1) {
        var gameImg = '<br> <img src="/static/images/news-articals/fake-news-1.png" class="game-imgs"> <br> <br> <p class="game-links">Full artical not avaliable</p>'
    } else if (questions[index].numb == 2) {
        var gameImg = '<br> <img src="/static/images/news-articals/fake-news-2.png" class="game-imgs"> <br> <br> <a class="game-links" href="https://www.rnz.co.nz/news/business/492231/emissions-trading-scheme-plans-for-revamp-to-be-released" target="_blank">Read the full artical here</a>'
    } else if (questions[index].numb == 3) {
        var gameImg = '<br> <img src="/static/images/news-articals/fake-news-3.png" class="game-imgs"> <br> <br> <a class="game-links" href="https://www.thedailyexaminer.co.nz/te-whatu-ora-are-hiding-the-alarming-figures-a-tsunami-of-illness/" target="_blank">Read the full artical here</a>'
    } else if (questions[index].numb == 4) {
        var gameImg = '<br> <img src="/static/images/news-articals/fake-news-4.png" class="game-imgs"> <br> <br> <a class="game-links" href="https://thebfd.co.nz/2023/06/19/the-lawyers-are-coming-for-you-groomers/" target="_blank">Read the full artical here</a>'
    } else if (questions[index].numb == 5) {
        var gameImg = '<br> <img src="/static/images/news-articals/fake-news-5.png" class="game-imgs"> <br> <br> <a class="game-links" href="https://www.nzherald.co.nz/nz/man-admits-scissor-attack-on-passenger-during-cook-strait-crossing-on-interislander/EEFTWIIZGZAORAZBHCSRXWJVGU/" target="_blank">Read the full artical here</a>'
    }

    /* set variable for question text */
    const que_text = document.querySelector(".que_text");

    //creating a new span and div tag for question and option and passing the value using array index
    let que_tag = '<span>' + questions[index].numb + ". " + questions[index].question + gameImg + '</span>';
    let option_tag = '<div class="option"><span>' + questions[index].options[0] + '</span></div>'
        + '<div class="option"><span>' + questions[index].options[1] + '</span></div>'
    que_text.innerHTML = que_tag; //adding new span tag inside que_tag
    option_list.innerHTML = option_tag; //adding new div tag inside option_tag

    /* selected option variable */
    const option = option_list.querySelectorAll(".option");

    /* save chosen option for question */
    for (i = 0; i < option.length; i++) {
        option[i].setAttribute("onclick", "optionSelected(this)");
    }
}

let tickIconTag = '<div class="icon tick"><i class="fas fa-check"></i></div>';
let crossIconTag = '<div class="icon cross"><i class="fas fa-times"></i></div>';

/* determine if answer correct or incorrect and display status */
function optionSelected(answer) {
    /* set variables for answers ect */
    clearInterval(counter);
    clearInterval(counterLine);
    let userAns = answer.textContent;
    let correcAns = questions[que_count].answer;
    const allOptions = option_list.children.length;

    /* if answer is correct (matches given answer taken from game.js arrays) display relevent response and store information */
    if (userAns == correcAns) {
        userScore += 1;
        answer.classList.add("correct");
        answer.insertAdjacentHTML("beforeend", tickIconTag);
        console.log("Correct Answer");
        console.log("Your correct answers = " + userScore);
        audioElem2.play();
    } 
    /* if anwer is incorrect (does not match given answer in game.js arrays) display relevent response */
    else {
        answer.classList.add("incorrect");
        answer.insertAdjacentHTML("beforeend", crossIconTag);
        console.log("Wrong Answer");

        for (i = 0; i < allOptions; i++) {
            if (option_list.children[i].textContent == correcAns) {
                option_list.children[i].setAttribute("class", "option correct");
                option_list.children[i].insertAdjacentHTML("beforeend", tickIconTag);
                console.log("Auto selected correct answer.");
            }
        }
    }

    /* disable option buttons so user can't change it */
    for (i = 0; i < allOptions; i++) {
        option_list.children[i].classList.add("disabled");
    }

    /* activate next button */
    next_btn.classList.add("show");
}

/* calculate and display results */
function showResult() {
    /* disable irelevent game pages and activate reults page | and set relevent variables */
    info_box.classList.remove("activeInfo");
    quiz_box.classList.remove("activeQuiz");
    result_box.classList.add("activeResult");
    const scoreText = result_box.querySelector(".score_text");
    /* if great result above three, display contragulatory message and user score*/
    if (userScore > 3) {
        let scoreTag = '<span>and congrats! 🎉, You got <p>' + userScore + '</p> out of <p>' + questions.length + '</p></span>';
        scoreText.innerHTML = scoreTag;
    }
    /* if okay result above one, display okay message and user score*/
    else if (userScore > 1) {
        let scoreTag = '<span>and nice 😎, You got <p>' + userScore + '</p> out of <p>' + questions.length + '</p></span>';
        scoreText.innerHTML = scoreTag;
    }
    /* if bad score display sorry message and user score*/
    else {
        let scoreTag = '<span>and sorry 😐, You got only <p>' + userScore + '</p> out of <p>' + questions.length + '</p></span>';
        scoreText.innerHTML = scoreTag;
    }
}

/* timer function */

function startTimer(time) {
    counter = setInterval(timer, 1000);
    function timer() {
        timeCount.textContent = time;
        time--;
        if (time < 9) {
            let addZero = timeCount.textContent;
            timeCount.textContent = "0" + addZero;
        }
        /* if timer run down, or answer selected, stop timer */
        if (time < 0) {
            clearInterval(counter);
            timeText.textContent = "Time Off";
            const allOptions = option_list.children.length;
            let correcAns = questions[que_count].answer;
            for (i = 0; i < allOptions; i++) {
                if (option_list.children[i].textContent == correcAns) {
                    option_list.children[i].setAttribute("class", "option correct");
                    option_list.children[i].insertAdjacentHTML("beforeend", tickIconTag);
                    console.log("Time Off: Auto selected correct answer.");
                }
            }
            for (i = 0; i < allOptions; i++) {
                option_list.children[i].classList.add("disabled");
            }
            /* show next button */
            next_btn.classList.add("show");
        }
    }
}

function startTimerLine(time) {
    counterLine = setInterval(timer, 29);
    function timer() {
        time += 1;

        time_line.style.width = time + "px";
        if (time > 549) {
            clearInterval(counterLine);
        }
    }
}

/* count question id number */
function queCounter(index) {
    let totalQueCounTag = '<span><p>' + index + '</p> of <p>' + questions.length + '</p> Questions</span>';
    bottom_ques_counter.innerHTML = totalQueCounTag;
}
