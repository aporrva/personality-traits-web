
const questionlist = [
    {
        "id": 1,
        "image":"https://w0.peakpx.com/wallpaper/733/114/HD-wallpaper-the-grim-adventures-of-billy-and-mandy-tv-series-2001-2007-backdrops.jpg",
        "story": "You arrive at a party where you don’t know many people. The room is filled with chatter, laughter, and lively conversations.",
        "question": "What do you do?",
        "options": [
            { "id": "A", "text": "Find a quiet corner and observe before engaging.", "score": { "introversion": 10, "extroversion": 0 } },
            { "id": "B", "text": "Join a small group and introduce yourself.", "score": { "introversion": 5, "extroversion": 5 } },
            { "id": "C", "text": "Start a conversation with the most energetic group.", "score": { "introversion": 0, "extroversion": 10 } },
            { "id": "D", "text": "Approach the host and ask for introductions.", "score": { "introversion": 3, "extroversion": 7 } }
        ]
    },
    {
        "id": 2,
        "image":"https://akamaividz2.zee5.com/image/upload/w_1170,h_658,c_scale,f_auto,q_auto/resources/0-1-239853/list/01239853_list.jpg",
        "story": "You are given a tight deadline at work for an important project. Unexpected challenges arise.",
        "question": "How do you handle the situation?",
        "options": [
            { "id": "A", "text": "Stay calm, break the task into steps, and focus on problem-solving.", "score": { "introversion": 10, "extroversion": 0 } },
            { "id": "B", "text": "Seek help from colleagues to manage stress.", "score": { "introversion": 5, "extroversion": 5 } },
            { "id": "C", "text": "Panic but push through, even if it means overworking yourself.", "score": { "introversion": 0, "extroversion": 10 } },
            { "id": "D", "text": "Take short breaks and use stress management techniques.", "score": { "introversion": 3, "extroversion": 7 } }
        ]
    },
    {
        "id": 3,
        "image":"https://getwallpapers.com/wallpaper/full/f/7/f/927204-shin-chan-wallpapers-1920x1200-windows-10.jpg",
        "story": "You are traveling to a new country alone for the first time. You have some free time to explore.",
        "question": "What do you do?",
        "options": [
            { "id": "A", "text": "Stick to a planned itinerary and visit well-known places.", "score": { "introversion": 10, "extroversion": 0 } },
            { "id": "B", "text": "Go with the flow and explore whatever catches your eye.", "score": { "introversion": 5, "extroversion": 5 } },
            { "id": "C", "text": "Step out without a plan, looking for adventure.", "score": { "introversion": 0, "extroversion": 10 } },
            { "id": "D", "text": "Ask locals for recommendations and explore their suggestions.", "score": { "introversion": 3, "extroversion": 7 } }
        ]
    },
    {
        "id": 4,
        "image":"https://www.animationxpress.com/wp-content/uploads/2022/10/Miraculous-Tales-of-Ladybug-and-Cat-Noir-Season-5.jpg",
        "story": "You have a weekend to relax with no obligations or plans.",
        "question": "How do you spend your time?",
        "options": [
            { "id": "A", "text": "Spend time alone reading or watching a movie.", "score": { "introversion": 10, "extroversion": 0 } },
            { "id": "B", "text": "Go out for a walk and casually meet friends.", "score": { "introversion": 5, "extroversion": 5 } },
            { "id": "C", "text": "Call friends and plan an outing.", "score": { "introversion": 0, "extroversion": 10 } },
            { "id": "D", "text": "Try a new hobby or activity solo.", "score": { "introversion": 3, "extroversion": 7 } }
        ]
    },
    {
        "id": 5,
        "image":"https://tse3.mm.bing.net/th?id=OIP.FSlTbDu0_qgs4GIJcREzjwHaEK&pid=Api&P=0&h=180https://tse4.mm.bing.net/th?id=OIP.wHWYezozkJcqU22sq3K_UwHaEK&pid=Api&P=0&h=180",
        "story": "A friend asks you to help them move apartments on short notice.",
        "question": "How do you respond?",
        "options": [
            { "id": "A", "text": "Offer to help but set boundaries on your time.", "score": { "introversion": 10, "extroversion": 0 } },
            { "id": "B", "text": "Help for a few hours and enjoy socializing.", "score": { "introversion": 5, "extroversion": 5 } },
            { "id": "C", "text": "Jump in enthusiastically and make an event out of it.", "score": { "introversion": 0, "extroversion": 10 } },
            { "id": "D", "text": "Suggest they ask a moving service instead.", "score": { "introversion": 3, "extroversion": 7 } }
        ]
    },
    {
        "id": 6,
        "image":"https://www.chhotabheem.com/image/catalog/wallpaper/1920x1200/series_03.jpg",
        "story": "You are in a group discussion, and a topic you’re passionate about comes up.",
        "question": "How do you contribute?",
        "options": [
            { "id": "A", "text": "Listen carefully and contribute only if necessary.", "score": { "introversion": 10, "extroversion": 0 } },
            { "id": "B", "text": "Make small comments and engage moderately.", "score": { "introversion": 5, "extroversion": 5 } },
            { "id": "C", "text": "Take charge of the discussion and share strong opinions.", "score": { "introversion": 0, "extroversion": 10 } },
            { "id": "D", "text": "Ask questions and encourage others to talk.", "score": { "introversion": 3, "extroversion": 7 } }
        ]
    },
    {
        "id": 7,
        "image":"https://tse1.mm.bing.net/th?id=OIP.3R5Hwgj_pxbxvGa1z65tEgHaEK&pid=Api&P=0&h=180g",
        "story": "You are at a networking event where you have the chance to meet influential people in your industry.",
        "question": "What is your approach?",
        "options": [
            { "id": "A", "text": "Observe conversations and engage only when approached.", "score": { "introversion": 10, "extroversion": 0 } },
            { "id": "B", "text": "Introduce yourself to a few people and exchange contact details.", "score": { "introversion": 5, "extroversion": 5 } },
            { "id": "C", "text": "Actively network, initiate conversations, and seek new connections.", "score": { "introversion": 0, "extroversion": 10 } },
            { "id": "D", "text": "Ask mutual contacts for introductions and follow up later.", "score": { "introversion": 3, "extroversion": 7 } }
        ]
    },
    {
        "id": 8,
        "image":"https://wallpapers.com/images/hd/oggy-and-the-cockroaches-suspicious-smile-ykp282hxp5r6m8gp.jpg",
        "story": "You are working on a group project, and your team is struggling to make progress.",
        "question": "How do you handle it?",
        "options": [
            { "id": "A", "text": "Take a step back and focus on your assigned tasks.", "score": { "introversion": 10, "extroversion": 0 } },
            { "id": "B", "text": "Collaborate with one or two teammates to find a solution.", "score": { "introversion": 5, "extroversion": 5 } },
            { "id": "C", "text": "Take initiative and guide the team towards a solution.", "score": { "introversion": 0, "extroversion": 10 } },
            { "id": "D", "text": "Suggest alternative ways to approach the problem and facilitate discussion.", "score": { "introversion": 3, "extroversion": 7 } }
        ]
    },
    {
        "id": 9,
        "image":"https://wallpapercave.com/wp/wp6684369.png",
        "story": "You receive an unexpected invitation to an event where you won’t know anyone.",
        "question": "What do you do?",
        "options": [
            { "id": "A", "text": "Politely decline and prefer to stay home.", "score": { "introversion": 10, "extroversion": 0 } },
            { "id": "B", "text": "Accept but keep to yourself unless approached.", "score": { "introversion": 5, "extroversion": 5 } },
            { "id": "C", "text": "Go and try to meet as many new people as possible.", "score": { "introversion": 0, "extroversion": 10 } },
            { "id": "D", "text": "Attend with curiosity and see how it goes.", "score": { "introversion": 3, "extroversion": 7 } }
        ]
    },
    {
        "id": 10,
        "image":"https://tse2.mm.bing.net/th?id=OIP.82hIEaurZObeZJbQhPqjsgHaEC&pid=Api&P=0&h=180",
        "story": "You have a chance to present your ideas in front of a large audience.",
        "question": "How do you feel about it?",
        "options": [
            { "id": "A", "text": "Feel nervous and prefer to let someone else present.", "score": { "introversion": 10, "extroversion": 0 } },
            { "id": "B", "text": "Prepare thoroughly and present with confidence.", "score": { "introversion": 5, "extroversion": 5 } },
            { "id": "C", "text": "Get excited and look forward to engaging the audience.", "score": { "introversion": 0, "extroversion": 10 } },
            { "id": "D", "text": "Try to make the presentation more interactive and enjoyable.", "score": { "introversion": 3, "extroversion": 7 } }
        ]
    }

]

let Question = document.getElementById("Question")
let image = document.getElementById("image")
let story = document.getElementById("story")
let optionsContainer = document.querySelector("#options-container")
let optionlist = document.querySelectorAll(".list")
let radiolist = document.querySelectorAll(".radio-item")
let attemptedQuestions = document.getElementById("numberofquestions")
let attemptedQuestionsBar = document.querySelector("#attemptedQuestionsBar")
let analysis = document.querySelector(".analysis")
let nextButton = document.getElementById("Next")
let previousButton = document.getElementById("Previous")
let percentageofaQuality = document.getElementById("%1")
let questionNumber = 0
let optionNumber = 0
let introdiv = document.getElementById("introdiv")
let extrodiv = document.getElementById("extrodiv")
let per1 = document.getElementById("%1")
let per2 = document.getElementById("%2")


const scoreOFExtroversion = {
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
    7: 0,
    8: 0,
    9: 0,
    10: 0

}

const scoreOFIntroversion = {
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
    7: 0,
    8: 0,
    9: 0,
    10: 0

}
const clickedoptions={
    1:0,
    2:0,
    3:0,
    4:0,
    5:0,
    6:0,
    7:0,
    8:0,
    9:0,
    10:0
}
function alertt (){
    counting = 0
    clickedoptionsnewarray = Object.entries(clickedoptions)
    clickedoptionsnewarray.forEach((baby)=>{
        if (clickedoptions.baby != 0)
        {counting ++}
    })
    if(counting ===19){
        alert("congrats")
    }
}


function radiobuttonclicked() {
    radiolist.forEach((baby) => {
        baby.addEventListener("click", () => {
            let question = `${attemptedQuestions.textContent}`
            scoreOFExtroversion[question] = 0
            introversion = 0
            extroversion = 0
            if (baby.checked) {
                questionlist[questionNumber].options.forEach((num) => {
                    if (num.id === baby.value) {
                        clickedoptions[questionNumber+1]=num.id
                        extroversion += num.score.extroversion
                        scoreOFExtroversion[question] = extroversion
                        introversion += num.score.introversion
                        scoreOFIntroversion[question] = introversion
                        add()
                    }
                })
            }
        })
    })
    alertt()
}
radiobuttonclicked()

attemptedQuestions.textContent = questionNumber + 1
story.textContent = questionlist[questionNumber].story
Question.textContent = questionlist[questionNumber].question
attemptedQuestionsBar.style.width = (questionNumber + 1) * 10 + "%"
image.src = questionlist[((attemptedQuestions).textContent)-1].image
for (optionNumber; optionNumber < 4; optionNumber++) {
    optionlist[optionNumber].textContent = questionlist[questionNumber].options[optionNumber].text
}

function radioreset(){
    radiolist.forEach((baby) => {
        baby.checked = false
    })
}
function radiorecall(){
    radiolist.forEach((baby) => {
        if (baby.value === clickedoptions[attemptedQuestions.textContent]){
            baby.checked = true
            console.log(baby.value)
        }
    })
}
nextButton.addEventListener("click", changeQuestionToNext)
function changeQuestionToNext() {
    optionNumber = 0
    if (questionNumber < 9) {
        questionNumber++
        attemptedQuestions.textContent = questionNumber + 1
        attemptedQuestionsBar.style.width = (questionNumber + 1) * 10 + "%"
        story.textContent = questionlist[questionNumber].story
        Question.textContent = questionlist[questionNumber].question
        image.src = questionlist[((attemptedQuestions).textContent)-1].image
        for (optionNumber; optionNumber < 4; optionNumber++) {
            optionlist[optionNumber].textContent = questionlist[questionNumber].options[optionNumber].text
        }
    }
    if (clickedoptions[attemptedQuestions.textContent] === 0){
        radioreset()
    }
    else{
        radiorecall()
    }
}

previousButton.addEventListener("click", changeQuestionToPrevious)
function changeQuestionToPrevious() {
    optionNumber = 0
    if (questionNumber > 0) {
        questionNumber--
        attemptedQuestions.textContent = questionNumber + 1
        attemptedQuestionsBar.style.width = (questionNumber + 1) * 10 + "%"
        story.textContent = questionlist[questionNumber].story
        Question.textContent = questionlist[questionNumber].question
        image.src = questionlist[((attemptedQuestions).textContent)-1].image
        for (optionNumber; optionNumber < 4; optionNumber++) {
            optionlist[optionNumber].textContent = questionlist[questionNumber].options[optionNumber].text
        }
    }
    if (clickedoptions[attemptedQuestions.textContent] !=0){
        radiorecall()
    }
}

function add() {
    const scoreOFExtroversionArray = Object.entries(scoreOFExtroversion).flat()
    const scoreOFIntroversionArray = Object.entries(scoreOFIntroversion).flat()
    let exsum = 0
    let insum = 0
    let counter = 0
    while (counter < 20) {
        if (counter % 2 != 0) {
            exsum += parseInt(scoreOFExtroversionArray[counter])
        }
        counter++
    }
    counter = 0
    while (counter < 20) {
        if (counter % 2 != 0) {
            insum += parseInt(scoreOFIntroversionArray[counter])
        }
        counter++
    }
    extrodiv.style.width = `${exsum}%`
    per1.textContent = `${exsum}%`
    introdiv.style.width = `${insum}%`
    per2.textContent = `${insum}%`
}