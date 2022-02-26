import { Routes, Route } from "react-router-dom";
import "./App.css";
import LandlordsPage from "./containers/LandlordsPage";
import UsersPage from "./containers/UsersPage";

function App() {
  return (
    <div className="App">
      <h1>Apartments Demo App</h1>
      <Routes>
        <Route path="/" element={<UsersPage />} />
        <Route path="users" element={<UsersPage />} />
        <Route path="landlords" element={<LandlordsPage />} />
      </Routes>
    </div>
  );
}

export default App;
