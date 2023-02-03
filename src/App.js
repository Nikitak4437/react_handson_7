import React from "react";
import { Route, Routes } from "react-router-dom";
import Edit from "./Edit";
import Table from "./Table";
import Store from "./Store";
import { Provider } from "react-redux";
import NavigationLinks from "./NavigationLinks";
import NoPage from "./NoPage";
import "./App.css";
import Home from "./Home";

function App() {
  return (
    <>
      {/* NavBar */}
      <Provider store={Store}>
        <Routes>
          <Route path="/" element={<NavigationLinks />}>
            <Route index element={<Table />} />
            {/* Edit  */}
            <Route path="/editStudent" element={<Edit />} />
            <Route path="/addStudent" element={<Edit />} />
            <Route path="/Home" element={<Home message="Home" />} />
            <Route path="/Contact" element={<Home message="Contact Us" />} />

            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </Provider>
    </>
  );
}

export default App;
