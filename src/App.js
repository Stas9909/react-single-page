import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';
// import MainSection from './components/MainSection/MainSection';
import SubscribeSection from './components/SubscribeSection/SubscribeSection';
import {Route, Routes} from "react-router-dom";
// import FeedbackSection from './components/FeedbackSection/FeedbackSection';
import CountriesSection from "./components/Main/CountriesSection/CountriesSection";
import TurkeyHotelsSection from "./components/Main/CountriesSection/TurkeyHotelsSection/TurkeyHotelsSection";
import EgyptHotelsSection from "./components/Main/CountriesSection/EgyptHotelsSection/EgyptHotelsSection";
import OAEHotelsSection from "./components/Main/CountriesSection/OAEHotelsSection/OAEHotelsSection";
import FeedbackSectionContainer from "./components/FeedbackSection/FeedbackSectionContainer";
import MainSectionContainer from "./components/MainSection/MainSectionContainer";

import CountryDirectionSectionContainer from "./components/MainSection/ToursTemplateSection/CountryDirectionSectionContainer/CountryDirectionSectionContainer";


function App() {
  return (
      <div className='app'>
        <Header/>
        <Routes>
          <Route path="/" element={
            <>
              <Main/>
              <MainSectionContainer/>
              <FeedbackSectionContainer/>
            </>
          } />
          <Route path="/react-single-page/" element={
            <>
              <Main/>
              <MainSectionContainer/>
              <FeedbackSectionContainer/>
            </>
          }/>
          <Route path="countries/" element={<CountriesSection/>}>
            <Route path="turkey/" element={<TurkeyHotelsSection/>}/>
            <Route path="egypt/" element={<EgyptHotelsSection/>}/> 
            <Route path="OAE/" element={<OAEHotelsSection/>}/>     
          </Route>
          <Route path="tours/:direction" element={<CountryDirectionSectionContainer/>}/>
        </Routes>
        <SubscribeSection/>
        <Footer/>
      </div>
  )
}

export default App;






