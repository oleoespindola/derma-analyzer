import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import '/src/styles/styles.css';

import Welcome from './pages/Welcome';
import Auth from './pages/Auth';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/auth" element={<Auth  />} />
      </Routes>
    </Router>
  )
};

export default App;
