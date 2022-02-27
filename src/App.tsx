import { Typography } from "@mui/material";
import { Routes, Route } from "react-router-dom";

import LandlordsPage from "./containers/LandlordsPage";
import UsersPage from "./containers/UsersPage";
import RequestToRentPage from "./containers/RequestToRentPage";
import "./App.css";

function App() {
  return (
    <div>
      <Typography align="center" variant="h3" className="appTitle">
        Apartments Renting (Demo App)
      </Typography>
      <Routes>
        <Route path="/" element={<UsersPage />} />
        <Route path="users" element={<UsersPage />} />
        <Route path="landlords" element={<LandlordsPage />} />
        <Route
          path="request-to-rent/:apartmentId"
          element={<RequestToRentPage />}
        />
      </Routes>
    </div>
  );
}

export default App;
