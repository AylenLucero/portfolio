// import './App.css';
// import {Home} from "./screens/Home";
// import { Academy } from './screens/Academy';
import { Home, Academy } from './screens';
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import "./App.scss";

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/academy' element={<Academy />} />
        <Route path='/' element={<Home />} />        
      </Routes>
    </Router>
  );
}

export default App;
