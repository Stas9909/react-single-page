import LogoTurkue from "../Assets/Курорт-Олюдениз.jpg";
import LogoEgypt from "../Assets/shutterstock_114130168.jpg";
import LogoOAE from "../Assets/Dubaj.jpg";
import LogoDom from "../Assets/Dominicana.jpg";
import LogoGreece from "../Assets/Greece.jpg";
import LogoMexico from "../Assets/mexico-cancun-big2.jpg";
import LogoMontenegro from "../Assets/chernogoriya-v-maye.jpg";
import LogoItaly from "../Assets/kuda-poehat-v-italy.jpg";
import LogoCroatia from "../Assets/Croatiajpg.jpg";

import attractions1 from "../Assets/Turkey background.webp";
import attractions2 from "../Assets/Egypt background.jpg";
import attractions3 from "../Assets/OAE background.jpeg";

import CarouselTurkey1 from "../Assets/Carousel Turkey1.jpg";
import CarouselTurkey2 from "../Assets/Carousel Turkey2.jpg";
import CarouselTurkey3 from "../Assets/Carousel Turkey3.jpg";
import CarouselTurkey4 from "../Assets/Carousel Turkey4.jpg";
import CarouselTurkey5 from "../Assets/Carousel Turkey5.jpg";
import CarouselTurkey6 from "../Assets/Carousel Turkey6.jpg";
import CarouselTurkey7 from "../Assets/Carousel Turkey7.jpg";

import CarouselEgypt1 from "../Assets/Carousel Egypt1.jpg";
import CarouselEgypt2 from "../Assets/Carousel Egypt2.jpg";
import CarouselEgypt3 from "../Assets/Carousel Egypt3.jpg";
import CarouselEgypt4 from "../Assets/Carousel Egypt4.jpg";
import CarouselEgypt5 from "../Assets/Carousel Egypt5.jpg";
import CarouselEgypt6 from "../Assets/Carousel Egypt6.jpg";
import CarouselEgypt7 from "../Assets/Carousel Egypt7.jpg";

import CarouselOAE1 from "../Assets/Carousel OAE1.jpg";
import CarouselOAE2 from "../Assets/Carousel OAE2.jpg";
import CarouselOAE3 from "../Assets/Carousel OAE3.jpg";
import CarouselOAE4 from "../Assets/Carousel OAE4.jpg";
import CarouselOAE5 from "../Assets/Carousel OAE5.jpg";
import CarouselOAE6 from "../Assets/Carousel OAE6.jpg";
import CarouselOAE7 from "../Assets/Carousel OAE7.jpg";

const SET_COUNTRIES = 'SET_COUNTRIES';

let initialState = {
    toursTemplate : [
        {id: 1, route: 'turkish-direction', pict: LogoTurkue, resort: "Туреччина", sightseeingPict: attractions1, CarouselImage1: CarouselTurkey1, CarouselImage2: CarouselTurkey2, CarouselImage3: CarouselTurkey3, CarouselImage4: CarouselTurkey4, CarouselImage5: CarouselTurkey5, CarouselImage6: CarouselTurkey6, CarouselImage7: CarouselTurkey7, HeaderForCountry: "Тури на відпочинок до Туреччини", 
        CountryDescription: "Наверное, нет смысла спрашивать, были ли вы в Турции. Интереснее узнать, сколько раз вы там отдыхали и какие курорты и отели стали вашими любимыми. Ведь Турция – это страна, где есть абсолютно все, чтобы хотелось возвращаться сюда вновь и вновь. Потрясающей красоты природа, целых четыре моря и более 400 пляжей, которые отмечены «Голубым флагом». Умопомрачительные сладости, разнообразные кебабы – гордость местной кухни, огромный выбор фруктов и овощей и вкуснейший кофе по-турецки. А еще, конечно же, теплые и подкупающие с первых минут гостеприимство и забота, которые чувствуешь на каждом шагу, и особая атмосфера легкости и домашнего уюта. Как не вернуться в этот рай снова? \n\
        Мы хотим, чтобы каждое ваше путешествие в Турцию оставило множество ярких впечатлений. Вместе с нашими партнерами мы продумали все до мелочей и позаботились о том, чтобы вас ждал самый комфортный и красивый отдых."},   
        {id: 2, route: 'egypt-direction', pict: LogoEgypt, resort: "Єгипет", sightseeingPict: attractions2, CarouselImage1: CarouselEgypt1, CarouselImage2: CarouselEgypt2, CarouselImage3: CarouselEgypt3, CarouselImage4: CarouselEgypt4, CarouselImage5: CarouselEgypt5, CarouselImage6: CarouselEgypt6, CarouselImage7: CarouselEgypt7, HeaderForCountry: "Тури на відпочинок до Єгипту",
        CountryDescription: "Египет — одно из самых популярных направлений среди украинцев. Уже который год наши соотечественники колесят по этой дивной стране и отдыхают на берегу Красного моря — кажется, что о Египте уже известно все. Но нет! Туроператор Join UP! откроет для вас Египет заново! Вы увидите его таким, каким никогда не видели прежде! Смените пассивный отдых на пляже на череду незабываемых впечатлений от нового Египта! Join UP! против шаблонов, зато за качественный, интересный и неповторимый отдых. Поэтому в Египте туроператор нашел самые удивительные места для развлечений и предлагает открыть новые грани такой знакомой, но все же неизведанной страны.\n\
        Туристических достопримечательностей в этой стране хоть отбавляй. Главный её аттракцион — Красное море, одно из самых красивых на планете, рай для любителей дайвинга, сноркелинга и кайтинга, и, конечно же, для тех, кто активным видам отдыха предпочитает лежание на пляже. Второй по значимости повод посетить Египет — это древние руины, крепости, храмы. Предки современных египтян строили так основательно, что эти «руины» смотрятся покрепче нынешних построек. Египетские пирамиды — единственное официальное чудо света, сохранившееся с античных времён. Третий повод — религиозный. Тут и гора Моисея, и коптский монастырь Святого Антония и даже крупнейший в мире исламский университет «Аль-Азхар»."},
        {id: 3, route: 'oae-direction', pict: LogoOAE, resort: "ОАЕ", sightseeingPict: attractions3, CarouselImage1: CarouselOAE1, CarouselImage2: CarouselOAE2, CarouselImage3: CarouselOAE3, CarouselImage4: CarouselOAE4, CarouselImage5: CarouselOAE5, CarouselImage6: CarouselOAE6, CarouselImage7: CarouselOAE7, HeaderForCountry: "Тури на відпочинок до ОАЕ", 
        CountryDescription: `Объединенные Арабские Эмираты собрали в себе невероятное количество чудес! И что немаловажно — все они рукотворные. Вот где можно действительно восхититься умом и способностями человека, ведь всего каких-то 40 лет назад в местах, которые сейчас будоражат и захватывают своими невероятными творениями, была бескрайняя пустыня и обычная рыбацкая деревушка! Начнем с того,
        что даже с воздуха открывается невероятный вид на искусственные острова Персидского залива, о сотворении которых ходят легенды и сняты документальные фильмы, повествующие обо всех этапах грандиозного строительства. Присмотритесь к этим творениям рук человеческих: Пальма Джумейра, Пальма Джебель Али, Пальма Дейра, а также искусственные архипелаги «Мир» и «Вселенная», которые состоят из мелких островов – такого вы не встретите ни в одной стране мира. О рекордах ОАЭ вы слышали ни один раз: здесь самое современное метро, лучший в мире шопинг, самый высокий небоскреб, самый роскошный отель с собственным океанариумом, на открытие которого потратили больше фейерверков, чем на Олимпийских играх в Пекине. Здесь вы будете постоянно удивляться и впечатляться.`},
        {id: 4, route: 'dominic-direction', pict: LogoDom, resort: "Домінікана", sightseeingPict: attractions1},
        {id: 5, route: 'greece-direction', pict: LogoGreece, resort: "Греція", sightseeingPict: attractions2},
        {id: 6, route: 'mexico-direction', pict: LogoMexico, resort: "Мексика", sightseeingPict: attractions3},
        {id: 7, route: 'montenegro-direction', pict: LogoMontenegro, resort: "Чорногорія", sightseeingPict: attractions1},
        {id: 8, route: 'italy-direction', pict: LogoItaly, resort: "Італія", sightseeingPict: attractions2},
        {id: 9, route: 'croatia-direction', pict: LogoCroatia, resort: "Хорватія", sightseeingPict: attractions3},
    ]
};     

const MainSectionReducer = (dataState=initialState, action) => {
    switch (action.type) {
        case SET_COUNTRIES:
            return {
                ...dataState,
                // toursTemplate: dataState.toursTemplate
            }
        default: // need this for default case
            return dataState 
    }        
}

export const setCountriesActionCreator = () => {
    return {
        type: SET_COUNTRIES,
    }
}

export default MainSectionReducer;
