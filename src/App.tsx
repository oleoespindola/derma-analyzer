import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import '/src/styles/styles.css';

import Welcome from './pages/Welcome';
import Auth from './pages/Auth';
import Analyzer from './pages/Analyzer';

import WithAuth from './components/withAuth';
import WithoutAuth from './components/withoutAuth';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/auth" element={
          <WithoutAuth>
            <Auth  />
          </WithoutAuth>
        } />
        <Route path="/analyzer" element={
          <WithAuth>
            <Analyzer  />
          </WithAuth>
        } />
      </Routes>
    </Router>
  )
};

export default App;
