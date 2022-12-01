import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';
import MainSection from './components/MainSection/MainSection';
import SubscribeSection from './components/SubscribeSection/SubscribeSection';
import {Container, NavLink} from 'react-bootstrap';
import {Route, Routes} from "react-router-dom";
import FeedbackSection from './components/FeedbackSection/FeedbackSection';
import CountriesSection from "./components/Main/CountriesSection/CountriesSection";
import TurkeyHotelsSection from "./components/Main/CountriesSection/TurkeyHotelsSection/TurkeyHotelsSection";
import EgyptHotelsSection from "./components/Main/CountriesSection/EgyptHotelsSection/EgyptHotelsSection";
import OAEHotelsSection from "./components/Main/CountriesSection/OAEHotelsSection/OAEHotelsSection";

function App(props) {
  return (
      <div className='app'>
        <Header/>
        <Routes>
          <Route path="/" element={
            <>
              <Main/>
              <MainSection/>
              <FeedbackSection 
                  FeedbackDataState={props.appDataState.feedbackVar.FeedbackTemplate}
                  dispatch={props.dispatch}
              />
            </>
          }/>
          <Route path="countries/" element={<CountriesSection/>}>
            <Route path="turkey/" element={<TurkeyHotelsSection/>}/>
            <Route path="egypt/" element={<EgyptHotelsSection/>}/> 
            <Route path="OAE/" element={<OAEHotelsSection/>}/>     
          </Route>
        </Routes>
        <SubscribeSection/>
        <Footer/>
      </div>
  )
}

export default App;






