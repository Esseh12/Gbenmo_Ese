import Homepage from './components/homepage';
import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Mail from './components/mail';
import Collage from './components/collage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/mail" element={<Mail />} />
        <Route path='/collage' element={<Collage />} />
      </Routes>
    </Router>
  )
  
}

export default App;
