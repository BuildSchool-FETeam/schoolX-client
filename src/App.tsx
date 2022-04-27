import { RouterLink } from "component-ui/RouterLink/RouterLink";
import { Page1 } from "pages/testPages/Page1/page1";
import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Page2 } from "./pages/testPages/Page2/page2";

function App() {
  return (
    <div className="App">
      <nav>
        <RouterLink to="/" mr={"1rem"}>
          Page 1
        </RouterLink>
        <RouterLink to="/page2">Page 2</RouterLink>
      </nav>
      <div>
        <Routes>
          <Route path="/" element={<Page1 />} />
          <Route path="/page2" element={<Page2 />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
