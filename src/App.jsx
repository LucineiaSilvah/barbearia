import './App.css'
import Banner from './components/Banner';

import Header from './components/Header';
import Space from './components/Space';

const App = () => {
  return (
    <div className='App'>
      <Header/>
      <Banner/>
      <Space/>
    </div>
  );
};

export default App;