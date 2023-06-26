/* NAV BAR HAMBURGER */
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach((n) =>
    n.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    })
);

/* ACSESSIBILITY */

var acsessibility = document.getElementById("acsessibility-btn");

acsessibility.onclick = function () {
    acsessibility.style.background = "#00BF63";
};

const dyslexia = document.querySelector(".dyslexia-btn");

dyslexia.addEventListener("click", () => {
    document.body.classList.toggle("dyslexia");
});

/* remove classes */

dyslexia.addEventListener("click", () => {
    var element = document.getElementById("home-text-one");
    element.classList.toggle("colum-home-1-text-font");
});

dyslexia.addEventListener("click", () => {
    var element = document.getElementById("home-text-two");
    element.classList.toggle("colum-home-2-text-font");
});

dyslexia.addEventListener("click", () => {
    var element = document.getElementById("h1");
    element.classList.toggle("home-header-one-font");
});

dyslexia.addEventListener("click", () => {
    var element = document.getElementById("h1-2");
    element.classList.toggle("home-header-two-font");
});

/* --- */

dyslexia.addEventListener("click", () => {
    var element = document.getElementById("contact-text-one");
    element.classList.toggle("colum-contact-1-text-font");
});

dyslexia.addEventListener("click", () => {
    var element = document.getElementById("contact-text-two");
    element.classList.toggle("colum-contact-2-text-font");
});

dyslexia.addEventListener("click", () => {
    var element = document.getElementById("h1-3");
    element.classList.toggle("contact-header-one-font");
});

/*--*/

dyslexia.addEventListener("click", () => {
    var element = document.getElementById("education-container");
    element.classList.toggle("education-container");
});

/*--*/
const fontSize = document.querySelector(".font-size-btn");

fontSize.addEventListener("click", () => {
    document.body.classList.toggle("font-size");
});

/* --- PARRALAX SCROLL --- */

var image = document.getElementsByClassName("hero-banner");
new simpleParallax(image);

/* FORM SUBMISSION ALERT */

var submit_alert = document.getElementById("contact_submit");
submit_alert.onclick = function () {
    alert("Sucsess! Your Message is being sent. The page will reload after you close this message.")
};

/* -- GAME -- */
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

start_btn.onclick = () => {
    info_box.classList.add("activeInfo");
}

exit_btn.onclick = () => {
    info_box.classList.remove("activeInfo");
}

continue_btn.onclick = () => {
    info_box.classList.remove("activeInfo");
    quiz_box.classList.add("activeQuiz");
    showQuetions(0);
    queCounter(1);
    startTimer(120);
    startTimerLine(0);
}

let timeValue = 120;
let que_count = 0;
let que_numb = 1;
let userScore = 0;
let counter;
let counterLine;
let widthValue = 0;

const restart_quiz = result_box.querySelector(".buttons .restart");
const quit_quiz = result_box.querySelector(".buttons .quit");


restart_quiz.onclick = () => {
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


quit_quiz.onclick = () => {
    window.location.reload();
}

const next_btn = document.querySelector("footer .next_btn");
const bottom_ques_counter = document.querySelector("footer .total_que");


next_btn.onclick = () => {
    if (que_count < questions.length - 1) {
        que_count++;
        que_numb++;
        showQuetions(que_count);
        queCounter(que_numb);
        clearInterval(counter); //clear counter
        clearInterval(counterLine); //clear counterLine
        startTimer(timeValue); //calling startTimer function
        startTimerLine(widthValue); //calling startTimerLine function
        next_btn.classList.remove("show"); //hide the next button
    } else {
        clearInterval(counter); //clear counter
        clearInterval(counterLine); //clear counterLine
        showResult(); //calling showResult function
    }
}

var gameImg;
var audioElem2 = document.getElementById('audio2');

// getting questions and options from array
function showQuetions(index) {
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

    const que_text = document.querySelector(".que_text");

    //creating a new span and div tag for question and option and passing the value using array index
    let que_tag = '<span>' + questions[index].numb + ". " + questions[index].question + gameImg + '</span>';
    let option_tag = '<div class="option"><span>' + questions[index].options[0] + '</span></div>'
        + '<div class="option"><span>' + questions[index].options[1] + '</span></div>'
    que_text.innerHTML = que_tag; //adding new span tag inside que_tag
    option_list.innerHTML = option_tag; //adding new div tag inside option_tag

    const option = option_list.querySelectorAll(".option");


    for (i = 0; i < option.length; i++) {
        option[i].setAttribute("onclick", "optionSelected(this)");
    }
}

let tickIconTag = '<div class="icon tick"><i class="fas fa-check"></i></div>';
let crossIconTag = '<div class="icon cross"><i class="fas fa-times"></i></div>';


function optionSelected(answer) {
    clearInterval(counter);
    clearInterval(counterLine);
    let userAns = answer.textContent;
    let correcAns = questions[que_count].answer;
    const allOptions = option_list.children.length;

    if (userAns == correcAns) {
        userScore += 1;
        answer.classList.add("correct");
        answer.insertAdjacentHTML("beforeend", tickIconTag);
        console.log("Correct Answer");
        console.log("Your correct answers = " + userScore);
        audioElem2.play();
    } else {
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
    for (i = 0; i < allOptions; i++) {
        option_list.children[i].classList.add("disabled");
    }
    next_btn.classList.add("show");
}

function showResult() {
    info_box.classList.remove("activeInfo");
    quiz_box.classList.remove("activeQuiz");
    result_box.classList.add("activeResult");
    const scoreText = result_box.querySelector(".score_text");
    if (userScore > 3) {

        let scoreTag = '<span>and congrats! 🎉, You got <p>' + userScore + '</p> out of <p>' + questions.length + '</p></span>';
        scoreText.innerHTML = scoreTag;
    }
    else if (userScore > 1) {
        let scoreTag = '<span>and nice 😎, You got <p>' + userScore + '</p> out of <p>' + questions.length + '</p></span>';
        scoreText.innerHTML = scoreTag;
    }
    else {
        let scoreTag = '<span>and sorry 😐, You got only <p>' + userScore + '</p> out of <p>' + questions.length + '</p></span>';
        scoreText.innerHTML = scoreTag;
    }
}

function startTimer(time) {
    counter = setInterval(timer, 1000);
    function timer() {
        timeCount.textContent = time;
        time--;
        if (time < 9) {
            let addZero = timeCount.textContent;
            timeCount.textContent = "0" + addZero;
        }
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

function queCounter(index) {

    let totalQueCounTag = '<span><p>' + index + '</p> of <p>' + questions.length + '</p> Questions</span>';
    bottom_ques_counter.innerHTML = totalQueCounTag;
}
