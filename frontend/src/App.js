import './global.css';
import Routes from './routes/index';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";

function App() {
  return (
      <Router>
        <AuthProvider>
          <Routes />
        </AuthProvider>
      </Router>
  );
}

export default App;
