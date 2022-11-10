import React from "react";
import "./App.css";
import Form from "./Component/Form";
import Dashboard from "./Component/Dashboard";
import EditProfile from "./Component/EditProfile";
import AddEntry from "./Component/AddEntry";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AddEvent from "./Component/AddEvent";
import FrontPage from "./Component/FrontPage";

function App() {
  return (
    <div>
      {/* <FrontPage /> */}
      {/* <Form /> */}
      {/* <Dashboard /> */}
      {/* <EditProfile /> */}
      {/* <AddEntry /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<FrontPage />} />
            <Route path="form" element={<Form />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="addevent" element={<AddEvent />} />
            <Route path="addentry" element={<AddEntry />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
