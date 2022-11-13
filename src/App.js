import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';
import MainSection from './components/MainSection/MainSection';
import SubscribeSection from './components/SubscribeSection/SubscribeSection';
import {Container} from 'react-bootstrap';

let state = {
  key1: "value1",
  key2: "value2"
}

function App() {
  return (
    <div className='app'>
      <Header state={state}/>
      <Main/>
      <MainSection/>
      <SubscribeSection/>
      <Footer/>
    </div>
  )
}

export default App;
