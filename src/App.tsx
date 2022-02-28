import { Typography } from "@mui/material";
import { Routes, Route } from "react-router-dom";

import LandlordsPage from "./containers/LandlordsPage";
import ApartmensListPage from "./containers/ApartmensListPage";
import RequestToRentPage from "./containers/RequestToRentPage";
import "./App.css";

function App() {
  return (
    <div>
      <Typography align="center" variant="h1" className="appTitle">
        Apartments (Demo App)
      </Typography>
      <Routes>
        <Route path="/" element={<ApartmensListPage />} />
        <Route path="users" element={<ApartmensListPage />} />
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
