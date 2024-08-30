import { BrowserRouter as  Router, Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import { FacebookLoginButton } from "react-social-login-buttons";
import Login from './components/Login';
function App() {
  

  return (
    <>
<Login/>

     <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        
      </Routes>
    </Router>
  </>
  )
}

export default App
