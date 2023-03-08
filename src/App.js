import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';
import SubscribeSection from './components/SubscribeSection/SubscribeSection';
import { Route, Routes } from "react-router-dom";
import CountriesSection from "./components/Main/CountriesSection/CountriesSection";
import TurkeyHotelsSection from './components/Main/CountriesSection/TurkeyHotelsSection/TurkeyHotelsSection';
import EgyptHotelsSection from "./components/Main/CountriesSection/EgyptHotelsSection/EgyptHotelsSection";
import OAEHotelsSection from "./components/Main/CountriesSection/OAEHotelsSection/OAEHotelsSection";
import FeedbackSectionContainer from "./components/FeedbackSection/FeedbackSectionContainer";
import MainSection from './components/MainSection/MainSection';
import CountryDirectionSection from "./components/MainSection/ToursTemplateSection/CountryDirectionSectionContainer/CountryDirectionSection";
import ExactHotelComponent from './components/Main/CountriesSection/TurkeyHotelsSection/HotelsTemplateElements/ExactHotelComponent';

function App() {
  return (
    <div className='app'>
      <Header />
      <Routes>
        <Route path="/react-single-page/" element={
          <>
            <Main />
            <MainSection />
            <FeedbackSectionContainer />
          </>
        } />
        <Route path="/" element={
          <>
            <Main />
            <MainSection />
            <FeedbackSectionContainer />
          </>
        } />
        <Route path="/react-single-page/:direction" element=
          {<CountryDirectionSection />} />
        <Route exact path="countries/" element={<CountriesSection />}>
          <Route path="turkey/" element={<TurkeyHotelsSection />} />
          <Route path="egypt/" element={<EgyptHotelsSection />} />
          <Route path="OAE/" element={<OAEHotelsSection />} />
        </Route>
        <Route path="countries/turkey/:id" element={<ExactHotelComponent />} />
      </Routes>
      <SubscribeSection />
      <Footer />
    </div>
  )
}

export default App;






