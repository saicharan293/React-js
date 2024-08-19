
import './App.css';
import { Content } from './Content';
import { Footer } from './Footer';
import { Header } from './Header';

function App() {
  const name='Sai';
  

  return (
    <div className="App">
      <Header />
      <Content/>
      <Footer />
    </div>
  );
}

export default App;
