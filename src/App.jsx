import './App.css'
import Banner from './components/Banner';
import Contact from './components/Contact';

import Header from './components/Header';
import Space from './components/Space';

const App = () => {
  return (
    <div className='App'>
      <Header/>
      <Banner/>
      <Space/>
      <Contact/>
    </div>
  );
};

export default App;