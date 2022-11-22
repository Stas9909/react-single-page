import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';
import MainSection from './components/MainSection/MainSection';
import SubscribeSection from './components/SubscribeSection/SubscribeSection';
import {Container, NavLink} from 'react-bootstrap';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import FeedbackSection from './components/FeedbackSection/FeedbackSection';

// import LogoOAE from "../../Assets/Dubaj.jpg";
// import LogoDom from "../../Assets/Dominicana.jpg";
// import LogoGreece from "../../Assets/Greece.jpg";
// import LogoMexico from "../../Assets/mexico-cancun-big2.jpg";
// import LogoMontenegro from "../../Assets/chernogoriya-v-maye.jpg";
// import LogoItaly from "../../Assets/kuda-poehat-v-italy.jpg";
// import LogoCroatia from "../../Assets/Croatiajpg.jpg";

// import Navbar from "./Navbar";


function App() {

    // const registrationBlock = ({PopupField: true}) 

  return (
    <BrowserRouter>
      <div className='app'>
        {/* <Header registrationBlock={registrationBlock}/> */}
        <Header RegField/>
        <Header/>
        <Main/>
        {/* <Routes>
            <Route path="/searching" element={
            <>
            <MainSection/>
            <FeedbackSection/>
            </>
          }
        />          
        </Routes> */}
        <MainSection/>
        <FeedbackSection/>
        <SubscribeSection/>
        <Footer/>
      </div>
    </BrowserRouter>
  )
}

export default App;
