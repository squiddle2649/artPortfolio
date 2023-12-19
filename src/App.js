import Header from './components/header'
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import AboutPage from './pages/aboutPage/aboutPage'
import ContactPage from './pages/contactPage/contactPage'
import MainPage from './pages/mainPage/mainPage'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/artPortfolio" element={<MainPage />} />
        <Route path="/artPortfolio/contact" element={<ContactPage />} />
        <Route path="/artPortfolio/about" element={<AboutPage />} />
        
      </Routes>
    </Router>
  );
}

export default App;
