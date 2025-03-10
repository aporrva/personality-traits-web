
const questionlist = [
    {
        "id": 1,
        "story": "You arrive at a party where you don’t know many people. The room is filled with chatter, laughter, and lively conversations.",
        "question": "What do you do?",
        "options": [
            { "id": "A", "text": "Find a quiet corner and observe before engaging.", "score": { "introversion": 10, "extroversion": 0 } },
            { "id": "B", "text": "Join a small group and introduce yourself.", "score": { "introversion": 5, "extroversion": 5 } },
            { "id": "C", "text": "Start a conversation with the most energetic group.", "score": { "introversion": 0, "extroversion": 10 } }
        ]
    },
    {
        "id": 2,
        "story": "You are given a tight deadline at work for an important project. Unexpected challenges arise.",
        "question": "How do you handle the situation?",
        "options": [
            { "id": "A", "text": "Stay calm, break the task into steps, and focus on problem-solving.", "score": { "emotional_stability": 10, "neuroticism": 0 } },
            { "id": "B", "text": "Seek help from colleagues to manage stress.", "score": { "emotional_stability": 5, "neuroticism": 5 } },
            { "id": "C", "text": "Panic but push through, even if it means overworking yourself.", "score": { "emotional_stability": 0, "neuroticism": 10 } }
        ]
    },
    {
        "id": 3,
        "story": "You are traveling to a new country alone for the first time. You have some free time to explore.",
        "question": "What do you do?",
        "options": [
            { "id": "A", "text": "Stick to a planned itinerary and visit well-known places.", "score": { "planning": 10, "spontaneity": 0 } },
            { "id": "B", "text": "Go with the flow and explore whatever catches your eye.", "score": { "planning": 5, "spontaneity": 5 } },
            { "id": "C", "text": "Step out without a plan, looking for adventure.", "score": { "planning": 0, "spontaneity": 10 } }
        ]
    }
    ,
    {
        "id": 4,
        "story": "You are traveling to a new country alone for the first time. You have some free time to explore.",
        "question": "What do you do?",
        "options": [
            { "id": "A", "text": "Stick to a planned itinerary and visit well-known places.", "score": { "planning": 10, "spontaneity": 0 } },
            { "id": "B", "text": "Go with the flow and explore whatever catches your eye.", "score": { "planning": 5, "spontaneity": 5 } },
            { "id": "C", "text": "Step out without a plan, looking for adventure.", "score": { "planning": 0, "spontaneity": 10 } }
        ]
    }
    ,
    {
        "id": 5,
        "story": "You are traveling to a new country alone for the first time. You have some free time to explore.",
        "question": "What do you do?",
        "options": [
            { "id": "A", "text": "Stick to a planned itinerary and visit well-known places.", "score": { "planning": 10, "spontaneity": 0 } },
            { "id": "B", "text": "Go with the flow and explore whatever catches your eye.", "score": { "planning": 5, "spontaneity": 5 } },
            { "id": "C", "text": "Step out without a plan, looking for adventure.", "score": { "planning": 0, "spontaneity": 10 } }
        ]
    }
    ,
    {
        "id": 6,
        "story": "You are traveling to a new country alone for the first time. You have some free time to explore.",
        "question": "What do you do?",
        "options": [
            { "id": "A", "text": "Stick to a planned itinerary and visit well-known places.", "score": { "planning": 10, "spontaneity": 0 } },
            { "id": "B", "text": "Go with the flow and explore whatever catches your eye.", "score": { "planning": 5, "spontaneity": 5 } },
            { "id": "C", "text": "Step out without a plan, looking for adventure.", "score": { "planning": 0, "spontaneity": 10 } }
        ]
    }
    ,
    {
        "id": 7,
        "story": "You are traveling to a new country alone for the first time. You have some free time to explore.",
        "question": "What do you do?",
        "options": [
            { "id": "A", "text": "Stick to a planned itinerary and visit well-known places.", "score": { "planning": 10, "spontaneity": 0 } },
            { "id": "B", "text": "Go with the flow and explore whatever catches your eye.", "score": { "planning": 5, "spontaneity": 5 } },
            { "id": "C", "text": "Step out without a plan, looking for adventure.", "score": { "planning": 0, "spontaneity": 10 } }
        ]
    }
    ,
    {
        "id": 8,
        "story": "You are traveling to a new country alone for the first time. You have some free time to explore.",
        "question": "What do you do?",
        "options": [
            { "id": "A", "text": "Stick to a planned itinerary and visit well-known places.", "score": { "planning": 10, "spontaneity": 0 } },
            { "id": "B", "text": "Go with the flow and explore whatever catches your eye.", "score": { "planning": 5, "spontaneity": 5 } },
            { "id": "C", "text": "Step out without a plan, looking for adventure.", "score": { "planning": 0, "spontaneity": 10 } }
        ]
    }
    ,
    {
        "id": 9,
        "story": "You are traveling to a new country alone for the first time. You have some free time to explore.",
        "question": "What do you do?",
        "options": [
            { "id": "A", "text": "Stick to a planned itinerary and visit well-known places.", "score": { "planning": 10, "spontaneity": 0 } },
            { "id": "B", "text": "Go with the flow and explore whatever catches your eye.", "score": { "planning": 5, "spontaneity": 5 } },
            { "id": "C", "text": "Step out without a plan, looking for adventure.", "score": { "planning": 0, "spontaneity": 10 } }
        ]
    }
    ,
    {
        "id": 10,
        "story": "You are traveling to a new country alone for the first time. You have some free time to explore.",
        "question": "What do you do?",
        "options": [
            { "id": "A", "text": "Stick to a planned itinerary and visit well-known places.", "score": { "planning": 10, "spontaneity": 0 } },
            { "id": "B", "text": "Go with the flow and explore whatever catches your eye.", "score": { "planning": 5, "spontaneity": 5 } },
            { "id": "C", "text": "Step out without a plan, looking for adventure.", "score": { "planning": 0, "spontaneity": 10 } }
        ]
    }

]

let Question = document.getElementById("Question")
let story = document.getElementById("story")
let optionlist = document.querySelectorAll(".list")
let attemptedQuestions = document.getElementById("attemptedQuestions")
let attemptedQuestionsBar = document.querySelector("#attemptedQuestionsBar")
let analysis = document.querySelector(".analysis")
let nextButton = document.getElementById("Next")
let previousButton = document.getElementById("Previous")
let questionNumber = 0
let optionNumber = 0

attemptedQuestions.textContent = questionNumber
// attemptedQuestionsBar. = `(questionNumber+1)*10%`
story.textContent = questionlist[questionNumber].story
Question.textContent = questionlist[questionNumber].question
for (optionNumber; optionNumber < 5; optionNumber++) {
    optionlist[optionNumber].textContent = questionlist[questionNumber].options[optionNumber].text
}
nextButton.addEventListener("click", changeQuestionToNext)
function changeQuestionToNext() {
    // questionNumber++
    // if (questionNumber < 10) {
    //     attemptedQuestions.textContent = questionNumber
    //     // attemptedQuestionsBar. = `(questionNumber+1)*10%`
    //     story.textContent = questionlist[questionNumber].story
    //     Question.textContent = questionlist[questionNumber].question
    //     for (optionNumber; optionNumber < 5; optionNumber++) {
    //         optionlist[optionNumber].textContent = questionlist[questionNumber].options[optionNumber].text
    //     }
    // }


}
previousButton.addEventListener("click", changeQuestionToPrevious)
function changeQuestionToPrevious() {
    questionNumber--
    if (questionNumber > 0) {
        attemptedQuestions.textContent = questionNumber
        // attemptedQuestionsBar. = `(questionNumber+1)*10%`
        story.textContent = questionlist[questionNumber].story
        Question.textContent = questionlist[questionNumber].question
        for (optionNumber; optionNumber < 5; optionNumber++) {
            optionlist[optionNumber].textContent = questionlist[questionNumber].options[optionNumber].text
        }
    }
}