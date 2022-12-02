import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navibar from './components/Navibar.js'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom"

import {Home} from './Home';
import {Users} from './Users';
import {About} from './About';
import {LoginPage} from './LoginPage'
import {Register} from './Register'

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Navibar />}>
        <Route index element={<Home />} />
        <Route path="users" element={<Users />} />
        <Route path="about" element={<About />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<Register />} />
      </Route>
    </Routes>
    </>
  );
}

export default App;
