import './App.css';
import MainNav from './components/Header/MainNav';
import NewsBoard from './components/Header/NewsBoard';

function App() {
  return (
    <div className="App">
      <NewsBoard />
      <MainNav />
    </div>
  );
}

export default App;
