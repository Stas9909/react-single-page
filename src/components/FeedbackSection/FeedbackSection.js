import React from "react";
import "./FeedbackSection.css";
import FBLogo from "../../Assets/3536394.png";
import tourist1 from "../../Assets/Tourist1.jpeg";
import tourist2 from "../../Assets/Tourist2.jpg";
import tourist3 from "../../Assets/Tourist3.jpg";
import tourist4 from "../../Assets/Tourist4.jpg";


const FeedbackSection = () => {
    return (
        <section className="FeedbackSection">
            <div className="ContainerDiv">
                <div className="DivForH2">
                    <h2 className="Header">ВІДГУКИ <span>ПРО КОМПАНІЮ</span></h2>
                </div>
                <div className="DivForSectionList">
                    <div className="FacebookReviewDiv">
                        <div className="DivForAva">
                            <img className="tourist1" src={tourist1} alt=''/>
                        </div>
                        <div className="DivForLogoFB">
                            <img className="FBLogo" src={FBLogo} alt=''/>
                        </div>
                        <div className="DivForFeedback">
                            <div className="wrap"><p className="ParForFeedback">Спасибо огромное команде Tours&Tickets за прекрасно подобранный тур и великолепный отдых.Огромное спасибо персональному менеджеру Лидии за правильно рекомендованный отель по моему запросу ,а также за внимание и понимание !!!</p>
                            <a className="RefForFeedback" href="#"><p className="DivForRef">Ще</p></a>
                            </div> 
                        </div>
                        <div className="DivForDate">
                            <p className="ParForDate">08 червня 2022</p>
                        </div>
                    </div>

                    <div className="FacebookReviewDiv">
                        <div className="DivForAva">
                            <img className="tourist2" src={tourist2} alt=''/>
                        </div>
                        <div className="DivForLogoFB">
                            <img className="FBLogo" src={FBLogo} alt=''/>
                        </div>
                        <div className="DivForFeedback">
                            <div className="wrap"><p className="ParForFeedback">Буквально вчора повернулася з відпочинку з Єгипту, тур замовляли в Tours&Tickets, і хочу вам сказати, що я рекомендую 💯. Ми залишились задоволені і відпочинком і організацією туру. Все швидко, професійно, надійно. Тепер я ваш постійний клієнт однозначно. Ще раз вам величезне дякую</p>
                            <a className="RefForFeedback" href="#"><p className="DivForRef">Ще</p></a>
                            </div> 
                        </div>
                        <div className="DivForDate">
                            <p className="ParForDate">26 cічня 2022</p>
                        </div>
                    </div>

                    <div className="FacebookReviewDiv">
                        <div className="DivForAva">
                            <img className="tourist3" src={tourist3} alt=''/>
                        </div>
                        <div className="DivForLogoFB">
                            <img className="FBLogo" src={FBLogo} alt=''/>
                        </div>
                        <div className="DivForFeedback">
                            <div className="wrap"><p className="ParForFeedback">Довольна работой агентства Tours&Tickets. А именно тем, что: в самом офисе теплая атмосфера, очень внимательные менеджеры, которые подробно объяснят о турах. Хорошо, что за несколько часов до вылета информируют о точном его времени. И всегда после прилёта домой интересуются, довольны ли отдыхом, были ли какие-то недочёты. Так что обратная связь есть. И это радует. Так что рекомендую!</p>
                            <a className="RefForFeedback" href="#"><p className="DivForRef">Ще</p></a>
                            </div> 
                        </div>
                        <div className="DivForDate">
                            <p className="ParForDate">03 січня 2022</p>
                        </div>
                    </div>

                    <div className="FacebookReviewDiv">
                        <div className="DivForAva">
                            <img className="tourist4" src={tourist4} alt=''/>
                        </div>
                        <div className="DivForLogoFB">
                            <img className="FBLogo" src={FBLogo} alt=''/>
                        </div>
                        <div className="DivForFeedback">
                            <div className="wrap"><p className="ParForFeedback">Спасибо огромное команде Tours&Tickets за прекрасно подобранный тур и великолепный отдых.Огромное спасибо персональному менеджеру Лидии за правильно рекомендованный отель по моему запросу ,а также за внимание и понимание !!!</p>
                            <a className="RefForFeedback" href="#"><p className="DivForRef">Ще</p></a>
                            </div> 
                        </div>
                        <div className="DivForDate">
                            <p className="ParForDate">17 грудня 2021</p>
                        </div>
                    </div>
                </div>

                <div className="divForInput">
                    <input className="InputForMoreProp" type="button" value="показати ще"/>
                </div>
            </div>
        </section>
    )
}

export default FeedbackSection;