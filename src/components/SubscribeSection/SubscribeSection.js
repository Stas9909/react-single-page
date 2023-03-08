import React from "react";
import "./SubscribeSection.css";
import ViberIcon from "../../Assets/124016.png";
import TelegramIcon from "../../Assets/3536661.png";
import MailIcon from "../../Assets/images.png";

const SubscribeSection = () => {
    return (
        <section className="SubscribeSection">
            <div className="BackgroundLineTop" />
            <div className="DivContainer">
                <div className="Wrapper">
                    <div className="innerTopSubSec">
                        <div className="DivForTxt">
                            <p className="UpTxt">Піпишіться, щоб отримувати</p>
                            <p className="BotTxt">кращі пропозиції</p>
                        </div>
                        <div className="DivForSubscr">
                            <div className="InnerDivForTel">
                                <div className="ImgTelegramIcon">
                                    <img className="TelegramIcon" src={TelegramIcon} alt='' />
                                </div>
                                <div className="divForParTxt">
                                    <p className="ParTxtTel">в Telegram</p>
                                </div>
                                <input className="TelegramBtn" type="button" value="ПІДПИСАТИСЯ" />
                            </div>
                            <div className="InnerDivForVib">
                                <div className="ImgViberIcon">
                                    <img className="ViberIcon" src={ViberIcon} alt='' />
                                </div>
                                <div className="divForParTxt">
                                    <p className="ParTxtVib">в Viber</p>
                                </div>
                                <input className="ViberBtn" type="button" value="ПІДПИСАТИСЯ" />
                            </div>
                        </div>
                    </div>
                    <div className="innerBotSubSec">
                        <div className="ImgMailIcon">
                            <img className="MailIcon" src={MailIcon} alt='' />
                        </div>
                        <div className="divForParTxt" id="EspDivForParTxt">
                            <p className="ParTxtMail">на Пошту</p>
                        </div>
                        <form className="Form">
                            <input type="text"
                                className="FirstInput"
                                placeholder="Ваше ім'я" />
                            <input type="email"
                                className="SecondInput"
                                placeholder="Ваш e-mail" />
                            <input className="MailBtn" type="button" value="ПІДПИСАТИСЯ" />
                        </form>
                    </div>
                </div>
            </div>
            <div className="BackgroundLineBottom" />
        </section>
    )
}

export default SubscribeSection;