import tourist1 from "../Assets/Tourist1.jpeg";
import tourist2 from "../Assets/Tourist2.jpg";
import tourist3 from "../Assets/Tourist3.jpg";
import tourist4 from "../Assets/Tourist4.jpg";
import tourist5 from "../Assets/girl-avatar15.jpg";
import tourist6 from "../Assets/girl-avatar16.jpg";
import tourist7 from "../Assets/man-avatar.webp";


const ADD_FEEDBACK = "ADD-FEEDBACK";
const UPDATE_NEW_FEEDBACK_TEXT = "UPDATE-NEW-FEEDBACK-TEXT";

Date.prototype.monthNames = [
    "Січня", "Лютого", "Березня",
    "Квітня", "Травня", "Червня",
    "Липня", "Серпня", "Вересня",
    "Жовтня", "Листопада", "Грудня"
];

Date.prototype.getMonthNames = function (){
    return this.monthNames[this.getMonth()];
};

let newDate = new Date()
let date = newDate.getDate();
let month = newDate.getMonthNames();
// let month = newDate.getMonth() + 1;
let year = newDate.getFullYear();
let dateFull = `${date<10?`0${date}`:`${date}`}`;
let currentData = `${dateFull} ${month} ${year}`;

let initialState = {
    FeedbackTemplate: [
        {id: 1, revievLogo: tourist1, txtReview: "Спасибо огромное команде Tours&Tickets за прекрасно подобранный тур и великолепный отдых.Огромное спасибо персональному менеджеру Лидии за правильно рекомендованный отель по моему запросу ,а также за внимание и понимание !!!", dateReview: "17 грудня 2021"},
        {id: 2, revievLogo: tourist2, txtReview: "Буквально вчора повернулася з відпочинку з Єгипту, тур замовляли в Tours&Tickets, і хочу вам сказати, що я рекомендую 💯. Ми залишились задоволені і відпочинком і організацією туру. Все швидко, професійно, надійно. Тепер я ваш постійний клієнт однозначно. Ще раз вам величезне дякую", dateReview: "03 cічня 2022"},
        {id: 3, revievLogo: tourist3, txtReview: "Довольна работой агентства Tours&Tickets. А именно тем, что: в самом офисе теплая атмосфера, очень внимательные менеджеры, которые подробно объяснят о турах. Хорошо, что за несколько часов до вылета информируют о точном его времени. И всегда после прилёта домой интересуются, довольны ли отдыхом, были ли какие-то недочёты. Так что обратная связь есть. И это радует. Так что рекомендую!", dateReview: "10 січня 2022"},
        {id: 4, revievLogo: tourist4, txtReview: "Спасибо огромное команде Tours&Tickets за прекрасно подобранный тур и великолепный отдых.Огромное спасибо персональному менеджеру Лидии за правильно рекомендованный отель по моему запросу ,а также за внимание и понимание !!!", dateReview: "26 січня 2022"},
        {id: 5, revievLogo: tourist5, txtReview: "Очень благодарна вашей компании за организацию отдыха", dateReview: "08 лютого 2022"},
        {id: 6, revievLogo: tourist6, txtReview: "Дякую. Будемо надалі їздити відпочивати тільки через Вас", dateReview: "03 червня 2022"},
    ],
    NewFeedbackText: ""
}

const feedbackReducer = (dataState = initialState, action) => {
    switch (action.type){
        case ADD_FEEDBACK: 
            let NewFeedbackTemplate = {
                id: 7,
                revievLogo: tourist7,
                txtReview: dataState.NewFeedbackText,
                dateReview: `${currentData}`
            };
            return {
                ...dataState, 
                FeedbackTemplate: [...dataState.FeedbackTemplate, NewFeedbackTemplate],
                NewFeedbackText: "" 
            }
            // dataState.FeedbackTemplate.push(NewFeedbackTemplate);
            // return dataState;

        case UPDATE_NEW_FEEDBACK_TEXT:
            return {
                ...dataState, NewFeedbackText: action.newText//action.payload
            };
            // dataState.NewFeedbackText = action.newText;
            // return dataState;

        default:
            return dataState;
    }
}

export const addFeedbackActionCreator = () => {
    return {
        type: ADD_FEEDBACK
    }
}

export const updateNewFeedbackTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_FEEDBACK_TEXT,
        newText: text
    }
}

export default feedbackReducer;