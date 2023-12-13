import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Splash from './components/Splash';
import OnBoarding from './components/OnBoarding';
import Main from './components/Main';
import Complete from './components/Complete';
import Terms from './components/Terms';
import Feedback from './components/Feedback';

const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Splash />} />
          <Route path="/onboarding" element={<OnBoarding />} />
          <Route path="/main" element={<Main />}  />
          <Route path="/complete" element={<Complete />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/feedback" element={<Feedback />} />
        </Routes>
    </BrowserRouter>
  );
};

function App() {
  return (
    <div className="App">
         <Router />
    </div>
  );
}

export default App;
