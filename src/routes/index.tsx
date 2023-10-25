import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "../App";
import { Plaground } from "../Plaground";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/play" element={<Plaground />} />
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
