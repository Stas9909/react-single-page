import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';
import MainSection from './components/MainSection/MainSection';
import SubscribeSection from './components/SubscribeSection/SubscribeSection';
import {Container, NavLink} from 'react-bootstrap';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import FeedbackSection from './components/FeedbackSection/FeedbackSection';

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
