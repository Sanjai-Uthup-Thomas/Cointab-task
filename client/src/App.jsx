import { BrowserRouter as Router, Routes, Route,Navigate} from "react-router-dom";
import './App.css';
import Buttons from './components/buttons';
import ErrorPage from "./components/errorPage";
import Users from "./components/users";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route path="/" element={<Navigate to="/HomePage" replace />} />
        <Route path="/HomePage" element={<Buttons />} />
        <Route path="/UserDetailPage" element={<Users />} />
        <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
