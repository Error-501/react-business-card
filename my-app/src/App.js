import './App.css';
import CardImage from './components/CardImage';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Links from './components/Links';
import Footer from './components/Footer';

function App() {
  return (
    <div className="card">
      <CardImage/>
      <Header/>
      <Links/>
      <MainContent/>
      <Footer/>
    </div>
  );
}

export default App;
