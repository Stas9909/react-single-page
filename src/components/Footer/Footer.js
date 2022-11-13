import React from "react";
import "./Footer.css";

const Footer = () => {
    return (
      <footer>
        <div className="UpperFooter">
          <div className="DivForFooterWritng">
            <p className="FooterWritng">кількість наших туристів</p>
          </div>      
          <div className="ContainerForDivs">
            <div className="DivForFigures">2</div>
            <div className="DivForFigures">2</div>
            <div className="DivForFigures">1</div>
            <div className="DivForFigures">1</div>
            <div className="DivForFigures">5</div>
            <div className="DivForFigures">8</div>
          </div>
        </div>
        <div className="LowerFooter">
          <div className="DivForCol">
            <h4 className="H4">Тури та квитки</h4>
            <p className="TxtInFooter"><a className="A"  href="#">Пошук туру</a></p>
            <p className="TxtInFooter"><a className="A" href="#">Авіаквитки</a></p>
            <p className="ParInFooter"><a className="A" href="#">Країни</a></p>
          </div>
          <div className="DivForCol">
            <h4 className="H4">Послуги</h4>
            <p className="TxtInFooter"><a className="A"  href="#">Послуги</a></p>
            <p className="TxtInFooter"><a className="A" href="#">Страхування</a></p>
            <p className="TxtInFooter"><a className="A" href="#">Тури на виплату</a></p>
          </div>
          <div className="DivForCol">
            <h4 className="H4">О компанії</h4>
            <p className="TxtInFooter"><a className="A"  href="#">Про нас</a></p>
            <p className="TxtInFooter"><a className="A" href="#">Наші партнери</a></p>
          </div>
          <div className="DivForCol">
            <p className="ParInFooter Offset"><a className="A" href="#">Франчайзинг</a></p>
            <p className="TxtInFooter"><a className="A" href="#">Як відкрити турагенція</a></p>
            <p className="TxtInFooter"><a className="A" href="#">Франшиза турагенції</a></p>
            <p className="ParInFooter"><a className="A" href="#">Біржа заявок</a></p>
          </div>
          <div className="DivForCol DifWidth">
            <h4 className="H4">Контакти</h4>
            <p className="ContactsPar">063 326 03 03</p>
            <p className="ContactsPar">044 359 08 06</p>
            <p className="ContactsPar">067 326 03 03</p>
            <p className="ContactsPar">Skype: touristickets</p>
            <p className="ContactsPar">main@tat.ua</p>
            <h4 className="H4" id="H4ID">Ми в соціальних мережах</h4>
            <div className="DivForSocNets">
              <a className="Icons" href="#"><div className="Icn" id="Fb"/></a>
              <a className="Icons" href="#"><div className="Icn" id="Link"/></a>
              <a className="Icons" href="#"><div className="Icn" id="Insta"/></a>
              <a className="Icons" href="#"><div className="Icn" id="YouTube"/></a>
            </div>
          </div>
        </div>
      </footer>
    )
}

export default Footer;