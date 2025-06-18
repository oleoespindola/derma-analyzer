import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import '/src/styles/styles.css';

import Welcome from './views/Welcome';
import Auth from './views/Auth';
import Analyzer from './views/Analyzer';

import WithAuth from './guards/PrivateRoute';
import WithoutAuth from './guards/PublicRoute';

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
