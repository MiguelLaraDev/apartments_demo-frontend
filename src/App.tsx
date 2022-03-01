import { Typography } from "@mui/material";
import { Routes, Route } from "react-router-dom";

import ApartmensListPage from "./containers/ApartmentsListPage/ApartmentsListPage";
import RequestToRentPage from "./containers/RequestToRentPage/RequestToRentPage";
import "./App.css";

function App() {
  return (
    <div>
      <Typography align="center" variant="h1" className="appTitle">
        Apartments (Demo App)
      </Typography>
      <Routes>
        <Route path="/" element={<ApartmensListPage />} />
        <Route path="request/:apartmentId" element={<RequestToRentPage />} />
      </Routes>
    </div>
  );
}

export default App;
