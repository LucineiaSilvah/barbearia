import './App.css'
import Banner from './components/Banner';
import Contact from './components/Contact';
import Footer from './components/Footer';

import Header from './components/Header';
import Space from './components/Space';

const App = () => {
  return (
    <div className='App'>
      <Header/>
      <Banner/>
      <Space/>
      <Contact/>
      <Footer/>
    </div>
  );
};

export default App;