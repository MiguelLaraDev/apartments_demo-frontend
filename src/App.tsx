import { Routes, Route } from "react-router-dom";
import "./App.css";
import LandlordsPage from "./containers/LandlordsPage";
import UsersPage from "./containers/UsersPage";
import RequestToRentPage from "./containers/RequestToRentPage";

function App() {
  return (
    <div className="App">
      <h1>Apartments Demo App</h1>
      <Routes>
        <Route path="/" element={<UsersPage />} />
        <Route path="users" element={<UsersPage />} />
        <Route path="landlords" element={<LandlordsPage />} />
        <Route path="request-to-rent/:apartmentId" element={<RequestToRentPage />} />
      </Routes>
    </div>
  );
}

export default App;
